import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeleteService {
  deleteItemId: any = '';
  private deleteItemUrl = '/api/delete';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  deleteItem(itemID): Promise<void> {
    const url = `${this.deleteItemUrl}/${itemID}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
