import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';
import { Globals } from '../globals';

let contactsService: ContactsService;

describe('ContactsServiceService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({ 
    imports: [ HttpClientTestingModule ], 
    providers: [ContactsService, Globals]
  }));

  it('should use ContactsService', () => {
    contactsService = TestBed.get(ContactsService);
    expect(contactsService).toBeTruthy();
  });

});
