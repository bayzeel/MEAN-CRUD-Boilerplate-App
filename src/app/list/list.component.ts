import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  records: any = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    // Retrieve records from the API
    this.listService.getAllRecords().subscribe(records => {
      this.records = records;
    });
  }

}
