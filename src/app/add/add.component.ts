import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
//import "rxjs/Rx";
//import "rxjx/add/operator/debounceTime";
//import "rxjx/add/operator/distingUntilChanged";

import { AddService } from '../add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;

  isAlertSuccess: boolean = false;

  constructor(fb: FormBuilder, private addService: AddService, private router: Router) {
    this.firstNameCtrl = fb.control('', [Validators.required]);
    this.lastNameCtrl = fb.control('', [Validators.required]);
    this.addForm = fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl
    });
  }

  addItem(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();

    if(!firstName || !lastName){
      return
    }

    this.addService.create(firstName, lastName).then(() => {
      this.firstNameCtrl.reset('');
      this.lastNameCtrl.reset('');

      this.isAlertSuccess = true;
    });
  }

  goToItemList(){
    this.router.navigate(['/items']);
  }

  ngOnInit() {
  }

}
