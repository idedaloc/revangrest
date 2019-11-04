import { TestBed } from '@angular/core/testing';

import { AppointmentsService } from './appointments.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Globals } from '../globals';

describe('AppointmentsServiceService', () => {
  beforeEach(() => {

    const spy = jasmine.createSpyObj('Globals', ['BASE'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppointmentsService, { provide: Globals, useValue: spy }]
    });
  }
  );

  it('should be created', () => {
    const service: AppointmentsService = TestBed.get(AppointmentsService);
    expect(service).toBeTruthy();
  });
});
