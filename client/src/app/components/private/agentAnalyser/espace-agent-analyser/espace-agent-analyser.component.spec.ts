import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAgentAnalyserComponent } from './espace-agent-analyser.component';

describe('EspaceAgentAnalyserComponent', () => {
  let component: EspaceAgentAnalyserComponent;
  let fixture: ComponentFixture<EspaceAgentAnalyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAgentAnalyserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAgentAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
