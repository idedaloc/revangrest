import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../model/contact';

import { Router } from '@angular/router'

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = new Array();
  contactRawData: Array<Object>;

  constructor(private contactsservice: ContactsService, private router: Router) { }

  ngOnInit() {
    this.getContacts();

  }
  
  getContacts() {
    this.contactsservice.getContacts().subscribe((data: Object) => {
      console.log(data);
      this.contactRawData = data['_embedded']['contact'];

      var element;
      for (element of this.contactRawData) {
        console.log(element);
        const tmpContact = new Contact();
        tmpContact.id = element._links.self.href.toString().split('/')[element._links.self.href.toString().split('/').length - 1];
        tmpContact.firstName = element.firstName;
        tmpContact.lastName = element.lastName;
        tmpContact.phoneNumber = element.phoneNumber;
        tmpContact.url = element._links.self.href.toString();
        console.log(tmpContact);

        console.log(this.contacts);
        this.contacts.push(tmpContact);

      }
    }
    )
  }

  deleteElement(contact: Contact) {

    this.contactsservice.deleteContact(contact).subscribe();
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl('/display'));
  }

}
