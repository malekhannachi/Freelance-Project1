import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonVidageComponent } from './bon-vidage.component';

describe('BonVidageComponent', () => {
  let component: BonVidageComponent;
  let fixture: ComponentFixture<BonVidageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonVidageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonVidageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
