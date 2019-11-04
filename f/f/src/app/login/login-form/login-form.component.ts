import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  // providers: [NgbActiveModal]
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private ar: Router, private am: NgbModal) { 
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      user: '',
      password:''
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Login");
    console.log(this.ar);
    this.ar.navigate(['/home/display']).then(()=>{ this.am.dismissAll(); console.log(this.am); },()=>console.log("B"));
  }
}
