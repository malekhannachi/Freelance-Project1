import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonAnalyseComponent } from './bon-analyse.component';

describe('BonAnalyseComponent', () => {
  let component: BonAnalyseComponent;
  let fixture: ComponentFixture<BonAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
