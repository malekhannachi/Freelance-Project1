import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAgentReceptionComponent } from './espace-agent-reception.component';

describe('EspaceAgentReceptionComponent', () => {
  let component: EspaceAgentReceptionComponent;
  let fixture: ComponentFixture<EspaceAgentReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAgentReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAgentReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
