import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/contacts/contacts.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  newContact: Contact = new Contact();
  
  elementCreated: boolean = false;

  constructor(private contactservice: ContactsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newContact);
    this.contactservice.addContact(this.newContact).subscribe((data: object) => {
      console.log(data);
      this.elementCreated = true;
    }, 
    );
  }


}
