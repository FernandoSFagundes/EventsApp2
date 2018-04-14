import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventsServiceProvider {

  private _apiEndPoint = 'http://api.cursodeionic.com.br';
  
    constructor(private _http: HttpClient) {
    }
  
    getEvents(): Observable<any>{
      return this._http.get(this._apiEndPoint + '/events');
    }

    getEvent( id : string): Observable<any>{
      return this._http.get(this._apiEndPoint + '/events/' + id);
    }
}
