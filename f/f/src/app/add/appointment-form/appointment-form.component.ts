import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/appointments/appointments.service';
import { Appointment } from 'src/app/model/appointment';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  newAppointment: Appointment = new Appointment();
  
  elementCreated: boolean = false;

  appointmentDate:Date;
  appointmentTime:Time;
  
  constructor(private appointmentsservice:AppointmentsService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.appointmentDate);
    console.log(this.appointmentTime);
    this.newAppointment.date = this.appointmentDate.toString()+' '+this.appointmentTime.toString();

    console.log(this.newAppointment);
    this.appointmentsservice.addAppointment(this.newAppointment).subscribe((data: object) => {
      this.elementCreated = true;
    });
  }

}
