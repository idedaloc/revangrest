import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ContactsService } from 'src/app/contacts/contacts.service';
import { FormsModule } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
  
    const spy = jasmine.createSpyObj('ContactsService',['addContact']);
  
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [ FormsModule ],
      providers: [{ provide: ContactsService, useValue: spy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
