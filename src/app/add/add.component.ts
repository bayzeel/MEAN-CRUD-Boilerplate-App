import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
//import "rxjs/Rx";
//import "rxjx/add/operator/debounceTime";
//import "rxjx/add/operator/distingUntilChanged";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.firstNameCtrl = fb.control("", [Validators.required]);
    this.lastNameCtrl = fb.control("", [Validators.required]);
    this.addForm = fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl
    });
  }

  ngOnInit() {
  }

}
