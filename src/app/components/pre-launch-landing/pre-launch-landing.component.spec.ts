import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLaunchLandingComponent } from './pre-launch-landing.component';

describe('PreLaunchLandingComponent', () => {
  let component: PreLaunchLandingComponent;
  let fixture: ComponentFixture<PreLaunchLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLaunchLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLaunchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
