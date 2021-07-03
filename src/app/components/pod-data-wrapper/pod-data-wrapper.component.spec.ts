import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodDataWrapperComponent } from './pod-data-wrapper.component';

describe('PodDataWrapperComponent', () => {
  let component: PodDataWrapperComponent;
  let fixture: ComponentFixture<PodDataWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodDataWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodDataWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
