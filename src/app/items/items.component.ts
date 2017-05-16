import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  records: any = [];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    // Retrieve records from the API
    this.itemsService.getAllRecords('items').then(records => {
      this.records = records;
    });
  }

  goToAddForm(): void {
    this.router.navigate(['/add']);
  }

  renderDeleteConfirm(itemID: number): void {
    this.router.navigate(['/delete', itemID]);
  }
}
