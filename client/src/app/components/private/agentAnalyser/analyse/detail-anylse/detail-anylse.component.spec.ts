import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnylseComponent } from './detail-anylse.component';

describe('DetailAnylseComponent', () => {
  let component: DetailAnylseComponent;
  let fixture: ComponentFixture<DetailAnylseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAnylseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnylseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
