import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAnalyseComponent } from './details-analyse.component';

describe('DetailsAnalyseComponent', () => {
  let component: DetailsAnalyseComponent;
  let fixture: ComponentFixture<DetailsAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
