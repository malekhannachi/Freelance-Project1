import { TestBed } from '@angular/core/testing';

import { AgentAnalyserGuard } from './agent-analyser.guard';

describe('AgentAnalyserGuard', () => {
  let guard: AgentAnalyserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentAnalyserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
