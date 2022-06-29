import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiEndPoint } from './../../environments/environment';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeEligibilityExclusionService {

  constructor(private http: HttpClient) { }

  getEmployeeeligibilityExclusion() {
    return this.http.get(apiEndPoint("api/eligibility_exclusion"));
  }

  addEmployeeeligibilityExclusion(frmdata: any) {
    return this.http.post(apiEndPoint("api/eligibility_exclusion"), frmdata, httpOptions);
  }

  editEmployeeeligibilityExclusion(frmdata: any, id: any) {
    return this.http.put(apiEndPoint(`api/eligibility_exclusion/${id}`), frmdata, httpOptions);
  }
  deleteEmployeeeligibilityExclusion(id: any) {
    return this.http.delete(apiEndPoint(`api/eligibility_exclusion/${id}`));
  }


}
