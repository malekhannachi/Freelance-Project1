import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAgentFacturationComponent } from './espace-agent-facturation.component';

describe('EspaceAgentFacturationComponent', () => {
  let component: EspaceAgentFacturationComponent;
  let fixture: ComponentFixture<EspaceAgentFacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAgentFacturationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAgentFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
