import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonAnalyseDetailComponent } from './bon-analyse-detail.component';

describe('BonAnalyseDetailComponent', () => {
  let component: BonAnalyseDetailComponent;
  let fixture: ComponentFixture<BonAnalyseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonAnalyseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonAnalyseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
