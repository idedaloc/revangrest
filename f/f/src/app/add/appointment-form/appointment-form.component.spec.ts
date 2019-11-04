import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFormComponent } from './appointment-form.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from 'src/app/appointments/appointments.service';

describe('AppointmentFormComponent', () => {
  let component: AppointmentFormComponent;
  let fixture: ComponentFixture<AppointmentFormComponent>;

  beforeEach(async(() => {

    const spy = jasmine.createSpyObj('AppointmentsService',['addAppointment']);

    TestBed.configureTestingModule({ 
      imports: [FormsModule],
      declarations: [ AppointmentFormComponent ],
      providers: [ {provide: AppointmentsService, useValue: spy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
