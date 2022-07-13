import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCiterneComponent } from './update-citerne.component';

describe('UpdateCiterneComponent', () => {
  let component: UpdateCiterneComponent;
  let fixture: ComponentFixture<UpdateCiterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCiterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCiterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
