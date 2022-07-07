import { TestBed } from '@angular/core/testing';

import { AgentFacturationGuard } from './agent-facturation.guard';

describe('AgentFacturationGuard', () => {
  let guard: AgentFacturationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentFacturationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
