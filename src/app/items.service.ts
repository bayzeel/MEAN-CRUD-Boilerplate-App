import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  // Get all records from the API
  /*getAllRecords(url: string) {
    return this.http.get(`/api/${url}`)
        .map(res => {
          return res.json();
        });
  }*/
  getAllRecords(url: string): Promise<Item>{
    let fullUrl = `/api/${url}`;
    return this.http.get(fullUrl)
        .toPromise()
        .then(res => res.json() as Item)
        .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
