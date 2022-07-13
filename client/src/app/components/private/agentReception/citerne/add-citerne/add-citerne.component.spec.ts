import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiterneComponent } from './add-citerne.component';

describe('AddCiterneComponent', () => {
  let component: AddCiterneComponent;
  let fixture: ComponentFixture<AddCiterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCiterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCiterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
