import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  
  signupForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.signupForm = this.builder.group({
      user: '',
      password:'',
      repeatedPassword:''
    })
  }

  ngOnInit() {
  }

}
