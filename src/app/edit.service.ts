import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class EditService {
  private updateItemUrl = '/api/edit';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: Http ) { }

  updateItem(item: Item): Promise<Item> {
    const url = `${this.updateItemUrl}/${item.itemID}`;
    return this.http.put(url, JSON.stringify(item), {headers: this.headers})
        .toPromise()
        .then(() => item)
        .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
