import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCamionComponent } from './update-camion.component';

describe('UpdateCamionComponent', () => {
  let component: UpdateCamionComponent;
  let fixture: ComponentFixture<UpdateCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
