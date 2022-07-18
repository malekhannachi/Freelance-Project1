import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnylseComponent } from './update-anylse.component';

describe('UpdateAnylseComponent', () => {
  let component: UpdateAnylseComponent;
  let fixture: ComponentFixture<UpdateAnylseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnylseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnylseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
