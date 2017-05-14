import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  // Get all records from the API
  getAllRecords(url: string) {
    return this.http.get(`/api/${url}`)
        .map(res => {
          return res.json();
        });
  }
}
