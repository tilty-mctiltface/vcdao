import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListWrapperComponent } from './pool-list-wrapper.component';

describe('PoolListWrapperComponent', () => {
  let component: PoolListWrapperComponent;
  let fixture: ComponentFixture<PoolListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
