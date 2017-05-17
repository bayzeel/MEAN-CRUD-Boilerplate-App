import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

import 'rxjs/add/operator/switchMap';

import { OneItemService } from '../one-item.service';
import { EditService } from '../edit.service';

import { Item } from '../item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item: Item = {
    itemID: 0,
    firstName: '',
    lastName: ''
  };
  updateForm: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;

  isEdited: boolean = false;

  constructor( fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private oneItemService: OneItemService, private editService: EditService ) {
    this.firstNameCtrl = fb.control('', [Validators.required]);
    this.lastNameCtrl = fb.control('', [Validators.required]);
    this.updateForm = fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl
    });
  }

  editItem(itemId: number) {
    console.log(itemId);
  }

  save(firstName: string, lastName: string): void{
    firstName = firstName.trim();
    lastName = lastName.trim();

    if(!firstName || !lastName){
      return
    }

    this.editService.updateItem(this.item).then(() => {
      this.isEdited = true;
    });
  }

  goToItemList() {
    this.router.navigate(['/items']);
  }

  ngOnInit(): void {
    this.activatedRoute
        .params
        .switchMap((params: Params) => this.oneItemService.getItem('delete', +params['itemID']))
        .subscribe(item => {
          this.item = item;
        });
  }

}
