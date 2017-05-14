import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OneItemService {

  constructor(private http: Http) { }

  getItem(url: string, itemID: number): Promise<any> {
    let fullUrl =  `/api/${url}/${itemID}`;
    console.log(fullUrl);
    return this.http.get(fullUrl)
        .toPromise()
        .then(res => {
            return res.json();
        })
        .catch(this.handleError);
    /*return this.http.get(fullUrl).map(res => {
        return res;
    });*/
  }

    private handleError (error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
