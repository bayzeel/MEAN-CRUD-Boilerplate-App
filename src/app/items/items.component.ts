import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  records: any = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // Retrieve records from the API
    this.itemsService.getAllRecords().subscribe(records => {
      this.records = records;
    });
  }

}
