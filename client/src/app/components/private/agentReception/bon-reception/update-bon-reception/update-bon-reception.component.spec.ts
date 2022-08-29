import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBonReceptionComponent } from './update-bon-reception.component';

describe('UpdateBonReceptionComponent', () => {
  let component: UpdateBonReceptionComponent;
  let fixture: ComponentFixture<UpdateBonReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBonReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBonReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
