import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class AddService {
  private addItemUrl = '/api/add';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(firstName: string, lastName: string): Promise<Item> {
    return this.http
        .post(this.addItemUrl, JSON.stringify({firstName: firstName, lastName: lastName}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Item)
        .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
