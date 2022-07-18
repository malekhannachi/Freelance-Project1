import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnylseComponent } from './add-anylse.component';

describe('AddAnylseComponent', () => {
  let component: AddAnylseComponent;
  let fixture: ComponentFixture<AddAnylseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnylseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnylseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
