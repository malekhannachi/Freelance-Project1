import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnylseComponent } from './list-anylse.component';

describe('ListAnylseComponent', () => {
  let component: ListAnylseComponent;
  let fixture: ComponentFixture<ListAnylseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnylseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnylseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
