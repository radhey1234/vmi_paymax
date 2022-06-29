import { apiEndPoint } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GridFormulaService {

  constructor(private http: HttpClient) { }

  getGridAxis() {
    return this.http.get(apiEndPoint("api/grid_setting/grid_axis"));
  }

  gridSettingLoad() {
    return this.http.get(apiEndPoint("api/grid_setting"));
  }

  addGridSetting(formData) {
    return this.http.post(apiEndPoint("api/grid_setting/save"), formData);
  }

  editGridSetting(formData, id) {
    return this.http.put(apiEndPoint(`api/grid_setting/${id}`), formData);
  }

  deleteGridSetting(id) {
    return this.http.delete(apiEndPoint(`api/grid_setting/${id}`));
  }

  loadAnchorPoint(id) {
    return this.http.get(apiEndPoint(`api/anchor_point/${id}`));
  }

  editGridSettingPopup(formData, id) {
    return this.http.put(apiEndPoint(`api/anchor_point/${id}`), formData);
  }


  /**
   * ----------------------------------------------
   * Simulation TAB
   * ----------------------------------------------
   */

  simulationListLoad() {
    return this.http.get(apiEndPoint("api/simulation_analysis"));
  }

  addSimulation(formData) {
    return this.http.post(apiEndPoint("api/simulation_analysis"), formData);
  }

  editSimulation(formData, id) {
    return this.http.put(apiEndPoint(`api/simulation_analysis/${id}`), formData);
  }

  deleteSimulation(id) {
    return this.http.delete(apiEndPoint(`api/simulation_analysis/${id}`));
  }





  // deletePlan(id) {
  //   return this.http.delete(apiEndPoint(`api/plan_creation/${id}`));
  // }
}
