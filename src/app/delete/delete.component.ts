import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { OneItemService } from '../one-item.service';
import { DeleteService } from '../delete.service';

import { Item } from '../item';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  item: Item = {
      itemID: 0,
      firstName: '',
      lastName: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private oneItemService: OneItemService, private deleteService: DeleteService) { }

  /*deleteItem(userID: number) {
    this.deleteService.deleteItem(userID);
  }*/

  ngOnInit(): void {
    this.activatedRoute
        .params
        .switchMap((params: Params) => this.oneItemService.getItem('delete', +params['itemID']))
        .subscribe(item => {
            this.item = item;
        });
  }

}
