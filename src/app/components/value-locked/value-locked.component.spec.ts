import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueLockedComponent } from './value-locked.component';

describe('ValueLockedComponent', () => {
  let component: ValueLockedComponent;
  let fixture: ComponentFixture<ValueLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueLockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
