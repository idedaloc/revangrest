import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Appointment } from '../model/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments:Appointment[] = new Array();
  appointmentRawData:Array<object>;

  constructor(private appointmentService:AppointmentsService, private router:Router,) { }

  ngOnInit() {

    this.appointmentService.getAppointments().subscribe((data:object) =>{

      this.appointmentRawData = data['_embedded']['appointment'];
      
      let element; 

      for( element of this.appointmentRawData ){

        console.log(element);
        //console.log(element._links);
        const tmpAppointment = new Appointment();
        tmpAppointment.id =  element._links.self.href.toString().split('/')[element._links.self.href.toString().split('/').length-1];
        // tmpAppointment.id =  element['_links']['self']['href'].toString().split('/')[element['_links']['self']['href'].toString().split('/').length-1];
        tmpAppointment.title = element.title;
        tmpAppointment.date = element.date;
        tmpAppointment.description = element.description;
        tmpAppointment.url = element._links.self.href.toString();
        
        console.log(tmpAppointment);
        //console.log(element._links);

        this.appointments.push(tmpAppointment);

      }

    })
  }

  deleteElement(appointment:Appointment){
    this.appointmentService.deleteAppointment(appointment).subscribe();
    this.router.navigateByUrl('/').then(()=>this.router.navigateByUrl('/display'));
  }

}
