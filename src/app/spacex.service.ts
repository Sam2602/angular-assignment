import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Launch } from './launch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private httpClient: HttpClient) { }

  getSpaceX(url : string, data : any) : Observable<Launch[]>
  {
    let params = new HttpParams();
    if (data) {
      for (const paramKeys in data) {
        params = params.append(paramKeys, data[paramKeys]);
      }
    }
    return  this.httpClient.get<Array<Launch>>(url, {params});
  }
}
