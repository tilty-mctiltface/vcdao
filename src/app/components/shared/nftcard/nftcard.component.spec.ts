import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftcardComponent } from './nftcard.component';

describe('NftcardComponent', () => {
  let component: NftcardComponent;
  let fixture: ComponentFixture<NftcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
