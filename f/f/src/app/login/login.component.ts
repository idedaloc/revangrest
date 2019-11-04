import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router,  private am: NgbActiveModal) { }

  ngOnInit() {
  }

  openForm(contentForm){
    console.log(this.am);
    this.modalService.open(contentForm, {backdropClass: 'light-blue-backdrop'}).result.then(()=>console.log("C"),()=>console.log("d"))
    // console.log('open')
    //  this.router.navigate(['/home/']).then(()=>console.log("S"),()=>console.log("B"));
  }

 

  // openSignupForm(content){
  //   this.modalService.open(content, {backdropClass: 'light-red-backdrop'})
  // }

}
