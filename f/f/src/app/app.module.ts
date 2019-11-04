import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { ContactFormComponent } from './add/contact-form/contact-form.component';
import { AppointmentFormComponent } from './add/appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from './globals';
import { FormValidationDirective } from './form-validation.directive';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignupFormComponent } from './login/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AppointmentsComponent,
    DisplayComponent,
    AddComponent,
    ContactFormComponent,
    AppointmentFormComponent,
    FormValidationDirective,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,  
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Globals, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
