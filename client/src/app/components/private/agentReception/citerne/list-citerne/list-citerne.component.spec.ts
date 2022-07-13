import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCiterneComponent } from './list-citerne.component';

describe('ListCiterneComponent', () => {
  let component: ListCiterneComponent;
  let fixture: ComponentFixture<ListCiterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCiterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCiterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
