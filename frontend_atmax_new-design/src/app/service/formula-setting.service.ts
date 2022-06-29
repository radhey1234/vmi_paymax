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
export class FormulaSettingService {

  constructor(private http: HttpClient) { }

  getFormulaSettingList() {
    return this.http.get(apiEndPoint("api/formula_setting"));
  }

  addFormulaSetting(frmdata: any) {
    return this.http.post(apiEndPoint("api/formula_setting"), frmdata, httpOptions);
  }

  editFormulaSetting(frmdata: any, id: string) {
    return this.http.put(apiEndPoint(`api/formula_setting/${id}`), frmdata, httpOptions);
  }


  deleteFormulaSetting(id: any) {
    return this.http.delete(apiEndPoint(`api/formula_setting/${id}`));
  }


}
