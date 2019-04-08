import { TestBed } from '@angular/core/testing';

import { ControlsService } from './controls.service';

describe('ControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlsService = TestBed.get(ControlsService);
    expect(service).toBeTruthy();
  });
});
