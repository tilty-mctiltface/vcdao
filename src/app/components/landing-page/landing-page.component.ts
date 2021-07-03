import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  barView: [number, number] = [460, 100];
  barSingle: any[] = [
    {
      name: 'TVL',
      value: 180987876.23
    },
    {
      name: 'Current reward cycle',
      value: 60987876.23
    }
  ];
  gaugeView: [number, number] = [600 * 0.75, 400 * 0.75];
  gaugeSingle: any[] = [
    {
      name: 'Current token supply',
      value: 83000
    },
    {
      name: 'Not minted',
      value: 100000 - 83000
    },
  ];
  legendPosition: LegendPosition = LegendPosition.Below;
  // options
  barShowXAxis: boolean = true;
  barShowYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;

  colorScheme = {
    domain: ['#1ce700', 'rgb(28,28,28)']
  };

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
    let s1 = this.renderer.createElement('script')
    s1.id = 'vertexShaderGradient'
    s1.type = 'x-shader/x-vertex'
    s1.text = `#include <morphtarget_pars_vertex>
        varying vec2 vUv;
        varying float normalZ;
        void main() {
            #include <begin_vertex>
            #include <morphtarget_vertex>
            vUv = uv;
            normalZ = normal.z;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.0);
        }`

    let s2 = this.renderer.createElement('script')
    s2.id = 'fragmentShaderGradient'
    s2.type = 'x-shader/x-fragment'
    s2.text = `uniform vec3 botGradient;
        uniform vec3 topGradient;
        uniform vec3 sideColor;
        float normalFactor;
        varying vec2 vUv;
        varying float normalZ;
        void main() {
            normalFactor = abs(normalZ) * 0.5 + 0.5;
            gl_FragColor = vec4(mix(botGradient, topGradient, vUv.y) * normalFactor + (sideColor * (1.0 - normalFactor)), 1.0);
        }`

    let s3 = this.renderer.createElement('script')
    s3.id = 'vertexShaderGlow'
    s3.type = 'x-shader/x-vertex'
    s3.text = `varying vec2 vUv;
        varying float normalY;
        void main() {
            vUv = uv;
            normalY = normal.y;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`

    let s4 = this.renderer.createElement('script')
    s4.id = 'fragmentShaderGlow'
    s4.type = 'x-shader/x-fragment'
    s4.text = `uniform vec3 color;
        varying vec2 vUv;
        varying float normalY;
        float opacity;
        void main() {
            opacity = vUv.y;
            gl_FragColor = vec4(color, (normalY != 0.0) ? 0.0 : opacity*opacity);
        }`

    let s5 = this.renderer.createElement('script')
    s5.id = 'vertexShaderPoints'
    s5.type = 'x-shader/x-vertex'
    s5.text = `uniform vec3 objInPos;
        uniform float size;
        varying float opacity;
        float distance;
        void main() {
            distance = (position.x * position.x * 0.5) + (objInPos.y - position.y) * (objInPos.y - position.y) + (objInPos.z - position.z) * (objInPos.z - position.z);
            opacity = (1.0 - distance * 0.1) * fract(distance) * (10.1 - objInPos.y) * 0.04 * objInPos.y;
            gl_PointSize = size;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`

    let s6 = this.renderer.createElement('script')
    s6.id = 'fragmentShaderPoints'
    s6.type = 'x-shader/x-fragment'
    s6.text = `uniform vec3 color;
        varying float opacity;
        void main() {
            gl_FragColor = vec4(color, opacity);
        }`

    let s7 = this.renderer.createElement('script')
    s7.type = 'module'
    s7.text = `
    import {OBJLoader} from "./OBJLoader.js";
        import * as THREE from './three.module.js';

        var scene, camera, renderer, material, materialGradient, materialGlow, materialPoints, polys, backgroundCube, bgCubeMixer, points, spine, objLoader, numLoadedObjects, delta;
        var mixerArray = [];
        var clock = new THREE.Clock();

        function init() {

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 100);
            camera.position.z = 10;
            camera.position.y = 5.5;

            renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setClearColor(0x000000, 0);
            renderer.setSize(window.innerWidth, window.innerHeight);

            document.body.appendChild(renderer.domElement);

            material = new THREE.MeshBasicMaterial({
                color: 0x6CC86B, //light saturated green
            });

            materialGradient = new THREE.ShaderMaterial({
                uniforms: {
                    botGradient: {
                        value: new THREE.Color(0x006633) //dark green
                    },
                    topGradient: {
                        value: new THREE.Color(0x5D9B5C) //light green
                    },
                    sideColor: {
                        value: new THREE.Color(0x08242B) //dark blue
                    }
                },
                vertexShader: document.getElementById( 'vertexShaderGradient' ).textContent,
\t\t        fragmentShader: document.getElementById( 'fragmentShaderGradient' ).textContent,
                morphTargets: true
            });

            polys = [];

            objLoader = new OBJLoader();
            numLoadedObjects = 0;

            loadObjects();

            loadSpine();

            createBackgroundCube();

            createPoints();

            window.addEventListener('resize', onWindowResize);

            animate();

        }

        //creates a grid of points
        function createPoints() {

            var vertices = [];

            for (let i = 0; i < 280; i++) {
                var x = Math.floor(i / 40) - 3;
                var y = (i % 40) * 0.35 - 1.5;
                var z = -1;

                vertices.push( x, y, z );
            }

            var geometry = new THREE.BufferGeometry();
            geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

            materialPoints = new THREE.ShaderMaterial({
                uniforms: {
                    color: {
                        value: new THREE.Color(0x8EFFBC) //bright green
                    },
                    size: {
                        value: 6
                    },
                    objInPos: {
                        value: backgroundCube.position //point opacity based on distance from the pulse cube
                    }
                },
                vertexShader: document.getElementById( 'vertexShaderPoints' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShaderPoints' ).textContent,
                transparent: true
            });
            points = new THREE.Points( geometry, materialPoints );
            scene.add(points);
        }
        //creates the cube that is the pulsing effect
        function createBackgroundCube() {
            var geometry = new THREE.BoxGeometry(1.3,1,1.3);
            //subtract 0.5 from each verticie so that the object pivot is at the top of the cube
            for(let i = 0; i < geometry.attributes.position.count; i++) {
                geometry.attributes.position.array[i*3 + 1] -= 0.5;
            }
            materialGlow = new THREE.ShaderMaterial({
                uniforms: {
                    color: {
                        value: new THREE.Color(0x8EFFBC) //bright green
                    }
                },
                vertexShader: document.getElementById( 'vertexShaderGlow' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShaderGlow' ).textContent,
                transparent: true,
                side: THREE.DoubleSide
            });
            backgroundCube = new THREE.Mesh(geometry, materialGlow);
            var scaleTrack = new THREE.VectorKeyframeTrack('.scale', [2, 4, 5], [1,0,1, 1,10.1,1, 1,0,1]);
            var positionTrack = new THREE.VectorKeyframeTrack('.position', [2, 4], [0,0,0, 0,10.1,0]);
            var clip = new THREE.AnimationClip('action', 8, [scaleTrack, positionTrack]);
            backgroundCube.animations.push(clip);
            bgCubeMixer = new THREE.AnimationMixer(backgroundCube);
            var clipAction = bgCubeMixer.clipAction(clip);
            clipAction.play();
            scene.add(backgroundCube);
        }
        //loads the central candle spine object
        function loadSpine(){
            objLoader.load("objects/Spine_Square.obj", function(obj){
                obj.name = "objects/Spine_Square.obj";
                obj.children[0].material.dispose();
                obj.children[0].material = material;
                spine = obj;
                scene.add(spine);
            });
        }
        //loads each segment of the outer part of logo; stored in one array of length 22
        function loadObjects() {
            var object;
            for(let i = 1; i < 23; i++) {
                if (i < 12) {
                    object = "objects/left/L_P" + i + ".obj";
                } else {
                    object = "objects/right/R_P" + (i % 12 + 1) + ".obj";
                }
                //load objects with callback; need all segments before setting up morph targets
                loadOBJ(object, i-1, function() {
                    ++numLoadedObjects;
                    if (numLoadedObjects === 22) {
                        createMorphTargets();
                        keyframeSetup();
                    }
                });
            }
        }
        //loads each outer segment; add morph position attr; sort array
        function loadOBJ(object, index, onLoaded) {
            objLoader.load(object, function(obj){
                obj.name = object;
                obj.children[0].material.dispose();
                obj.children[0].material = materialGradient;
                obj.children[0].geometry.morphAttributes.position = [];
                if (polys[index] !== null) {
                    var temp = polys[index];
                    polys[index] = obj;
                    polys.push(temp);
                } else {
                    polys[index] = obj;
                }
                onLoaded();
            });
        }
        //create morph targets for each segment; clone the positions of each segment and rotate them by 180 degrees
        function createMorphTargets() {
            polys.splice(22,7);
            var leftClone, rightClone;
            var euler = new THREE.Euler(0, Math.PI, 0, 'XYZ');
            for (let i = 0; i < 11; i++) {
                cloneObjects(i, function() {
                    updateCloneRotations(leftClone, rightClone, euler, function() {
                        polys[i].children[0].geometry.morphAttributes.position.push(rightClone);
                        polys[i+11].children[0].geometry.morphAttributes.position.push(leftClone);
                        scene.add(polys[i]);
                        scene.add(polys[i+11]);
                        polys[i].children[0].updateMorphTargets();
                        polys[i+11].children[0].updateMorphTargets();
                    })
                })
            }
            //clone verticie positions
            function cloneObjects(i, onClone) {
                leftClone = polys[i].children[0].geometry.attributes.position.clone();
                rightClone = polys[i+11].children[0].geometry.attributes.position.clone();
                onClone();
            }
            //rotate each point by 180 degrees around y-axis
            function updateCloneRotations(o1, o2, rotation, onRotate) {
                var o1V3, o2V3, updatedIndex;
                for(let i = 0; i < o1.count; i++) {
                    updatedIndex = i*3;
                    o1V3 = new THREE.Vector3(o1.array[updatedIndex], o1.array[updatedIndex+1], o1.array[updatedIndex+2]);
                    o2V3 = new THREE.Vector3(o2.array[updatedIndex], o2.array[updatedIndex+1], o2.array[updatedIndex+2]);
                    o1V3.applyEuler(rotation);
                    o2V3.applyEuler(rotation);
                    o1.array[updatedIndex] = o1V3.x;
                    o1.array[updatedIndex+1] = o1V3.y;
                    o1.array[updatedIndex+2] = o1V3.z;
                    o2.array[updatedIndex] = o2V3.x;
                    o2.array[updatedIndex+1] = o2V3.y;
                    o2.array[updatedIndex+2] = o2V3.z;
                }
                onRotate();
            }
        }
        //animation setup for outer logo segments
        function keyframeSetup() {
            var yAxis = new THREE.Vector3(0,1,0);
            var qInitial = new THREE.Quaternion().setFromAxisAngle( yAxis, 0 );
            var qIntermediate = new THREE.Quaternion().setFromAxisAngle( yAxis, Math.PI );
            var qFinal = new THREE.Quaternion().setFromAxisAngle( yAxis, 2*Math.PI );
            var updatedTime;
            for(let i = 0; i < 22; i++) {
                //the 0.08 is an arbitrary value that will determine how soon the next segment rotates after the previous
                updatedTime = (i%11)*0.08;
                //quat key frame track doesn't support three.js smooth interpolate unfortunately
                var rotationTrack = new THREE.QuaternionKeyframeTrack('.quaternion', [updatedTime,updatedTime+1,updatedTime+4,updatedTime+5], [qInitial.x, qInitial.y, qInitial.z, qInitial.w, qIntermediate.x, qIntermediate.y, qIntermediate.z, qIntermediate.w, qIntermediate.x, qIntermediate.y, qIntermediate.z, qIntermediate.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w]);
                var morphTrack = new THREE.NumberKeyframeTrack('.children[0].morphTargetInfluences[0]', [updatedTime,updatedTime+1,updatedTime+4,updatedTime+5], [0, 1, 1, 0]);
                var clip = new THREE.AnimationClip('action', 8, [rotationTrack, morphTrack]);
                polys[i].animations.push(clip);
                mixerArray[i] = new THREE.AnimationMixer(polys[i]);
                var clipAction = mixerArray[i].clipAction(clip);
                clipAction.play();
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            render();
        }
        function render() {
            delta = clock.getDelta();
            for(var mixer of mixerArray) {
                mixer.update(delta);
            }
            bgCubeMixer.update(delta);
            renderer.render(scene, camera);
        }
        function onWindowResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
        }
        init();
    `

    this.renderer.appendChild(this.document.body, s1)
    this.renderer.appendChild(this.document.body, s2)
    this.renderer.appendChild(this.document.body, s3)
    this.renderer.appendChild(this.document.body, s4)
    this.renderer.appendChild(this.document.body, s5)
    this.renderer.appendChild(this.document.body, s6)
    this.renderer.appendChild(this.document.body, s7)
  }

}
