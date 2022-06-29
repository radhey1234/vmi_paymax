import { apiEndPoint } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RangeCreationService {

  constructor(private http: HttpClient) { }

  getRangeCreationList() {
    return this.http.get(apiEndPoint("api/range_creation"));
  }

  addRangeCreation(frmdata: any) {
    return this.http.post(apiEndPoint("api/range_creation"), frmdata, httpOptions);
  }

  editRangeCreation(frmdata: any, id: any) {
    return this.http.put(apiEndPoint(`api/range_creation/${id}`), frmdata, httpOptions);
  }

  deleteRangeCreation(id: any) {
    return this.http.delete(apiEndPoint(`api/range_creation/${id}`));
  }


}
