import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonReceptionComponent } from './add-bon-reception.component';

describe('AddBonReceptionComponent', () => {
  let component: AddBonReceptionComponent;
  let fixture: ComponentFixture<AddBonReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBonReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
