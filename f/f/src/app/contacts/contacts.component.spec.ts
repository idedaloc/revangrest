import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;


  beforeEach(async(() => {
      
    let testContact: object;

    const contactsservice = jasmine.createSpyObj('ContactsService',['getContacts','deleteContact']);
    const router = jasmine.createSpyObj('Router',['navigateByUrl'])

    // getContactsSpy = contactService.getContacts.and.returnValue( of(testContact) );
    
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      // imports: [ RouterModule.forRoot([])],
      providers: [
        { provide: ContactsService, useValue: contactsservice}, 
        { provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
