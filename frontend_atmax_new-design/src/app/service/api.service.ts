import { apiEndPoint } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "http://207.180.235.195:8080/";

  constructor(private http: HttpClient) { }

  authLogin(email, password) {
    return this.http.post(this.baseUrl + "api/auth/login", {
      email,
      password
    });
  }

  uploadEmpData(formdata) {
    return this.http.post(apiEndPoint("api/employee/upload"), formdata);
  }
  uploadEmpTestPerformData(formdata) {
    return this.http.post(apiEndPoint("api/uploademployeectc"), formdata);
  }
  uploadCtcData(formdata) {
    return this.http.post(apiEndPoint("api/ctc/upload"), formdata);
  }
  uploadBonusData(formdata) {
    return this.http.post(apiEndPoint("api/bonus/upload"), formdata);
  }

  uploadPerformenceData(formdata) {
    return this.http.post(apiEndPoint("api/performance/upload"), formdata);
  }

  getEmployeeDataSummary() {
    return this.http.get(apiEndPoint("api/employee/datasummry"));
  }

  getDevationData() {
    return this.http.get(apiEndPoint("api/employee/deviationlist"));
  }

  getEmployeeDevationSummary() {
    return this.http.get(apiEndPoint("api/employee/deviationlist"));
  }

  getPreviouslyUploadedFilesData() {
    return this.http.get(apiEndPoint("api/employee/filedetails"));
  }

  getPlanEligibilityList() {
    return this.http.get(apiEndPoint("api/plan_creation"));
  }

  addPlan(formData) {
    return this.http.post(apiEndPoint("api/plan_creation"), formData);
  }

  editPlan(formData) {
    const id = formData.id;
    delete formData['id'];
    return this.http.put(apiEndPoint(`api/plan_creation/${id}`), formData);
  }

  deletePlan(id) {
    return this.http.delete(apiEndPoint(`api/plan_creation/${id}`));
  }

  getEmployeeCriteria() {
    return this.http.get(apiEndPoint(`api/employee/criteria`));
  }

  getEmployeeCriteriaDetail(key) {
    return this.http.get(apiEndPoint(`api/employee/criteria/${key}`));
  }

  uploadFileDetail(id) {
    return this.http.get(apiEndPoint(`api/employee/viewdetails/${id}`));
  }

  deletePreviousUploadFiles(id) {
    return this.http.delete(apiEndPoint(`api/employee/delete/${id}`));
  }

  /**
   * Load Employee Graph Data
   */
  getemployeeGraphData() {
    return this.http.get(apiEndPoint("api/employee/look_eligiblity"));

  }

  /**
   * Eligibility list
   */

  getEmployeeEligibilityList() {
    return this.http.get(apiEndPoint(`api/eligibility_exclusion/list`));
  }

  editEmployeeEligibilityList(frmdata: any, id: any) {
    return this.http.put(apiEndPoint(`api/eligibility_exclusion/list/${id}`), frmdata, httpOptions);
  }

  deleteEmployeeEligibilityList(id: any) {
    return this.http.delete(apiEndPoint(`api/eligibility_exclusion/list/${id}`));
  }
}
