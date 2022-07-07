import { TestBed } from '@angular/core/testing';

import { AgentReceptionGuard } from './agent-reception.guard';

describe('AgentReceptionGuard', () => {
  let guard: AgentReceptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentReceptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
