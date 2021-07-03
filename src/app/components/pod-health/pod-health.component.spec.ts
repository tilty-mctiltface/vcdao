import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodHealthComponent } from './pod-health.component';

describe('PodHealthComponent', () => {
  let component: PodHealthComponent;
  let fixture: ComponentFixture<PodHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
