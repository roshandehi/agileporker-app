import { TestBed, inject } from '@angular/core/testing';

import { WebSocketDataService } from './websocket-data.service';

describe('WebsocketDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketDataService]
    });
  });

  it('should be created', inject([WebSocketDataService], (service: WebSocketDataService) => {
    expect(service).toBeTruthy();
  }));
});
