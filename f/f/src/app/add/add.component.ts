import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  elementCreated = false;

  constructor(private modalservice: NgbModal) { }

  ngOnInit() {
  }

  openAddForm(formType: string) {
    const m = this.modalservice.open(formType, { scrollable: true });

  //   m.result.then((result)=>{
  //     console.log("********"+result);
  //     this.elementCreated
   // });
  }


}
