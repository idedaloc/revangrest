import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment';
import { Observable } from 'rxjs';
import { Globals } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  // appointmentUrl = "http://localhost:8080" + "/appointment";
  appointmentUrl = this.globals.BASE + ":8080" + "/appointment";

  constructor(private http: HttpClient, private globals: Globals) { }

  getAppointments(){
    
    return this.http.get(this.appointmentUrl);

  }

  addAppointment(newAppointment: Appointment ): Observable<object>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })} ;
      
      return this.http.post<Appointment>(this.appointmentUrl,newAppointment,headers);

  }

  deleteAppointment(appointment:Appointment):Observable<{}>{
    const url = appointment.url;
    return this.http.delete(url);
  }

}
