import { TestBed } from '@angular/core/testing';

import { VoiceRecService } from './voice-rec.service';

describe('VoiceRecService', () => {
  let service: VoiceRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
