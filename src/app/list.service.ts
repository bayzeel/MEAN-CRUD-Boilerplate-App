import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  // Get all records from the API
  getAllRecords() {
    return this.http.get('/api/list')
        .map(res => {
          return res.json();
        });
  }
}
