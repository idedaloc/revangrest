import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '../model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../globals'
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  contactsUrl = this.globals.BASE + ":8090" + "/contact";

  constructor(private http: HttpClient, private globals: Globals) { }

  getContacts(){
    
    return this.http.get(this.contactsUrl);

  }

  addContact(newContact:Contact):Observable<Object>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })} ;
    
    // console.log(newContact);
    // return this.http.post<Contact>(this.contactsUrl,newContact,headers).pipe(
    //     catchError((error) =>{return error;})
    // );
    return this.http.post<Contact>(this.contactsUrl,newContact,headers);


  }

  deleteContact(contact:Contact):Observable<{}>{
    const url = contact.url;
    return this.http.delete(url)    
  }

}
