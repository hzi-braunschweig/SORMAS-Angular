import { CaseControllerService } from 'api-client';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CaseService } from './case.service';

class CaseControllerServiceMock extends CaseControllerService {}

describe('CaseServiceService', () => {
  let service: CaseService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CaseService],
    });
    service = TestBed.inject(CaseService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
