import { apiEndPoint } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PopulationSelectionService {

  constructor(private http: HttpClient) { }

  getPopulationSelection() {
    return this.http.get(apiEndPoint("api/population_selection"));
  }

  addPopulationSelection(frmdata: any) {
    return this.http.post(apiEndPoint("api/population_selection"), frmdata, httpOptions);
  }

  editPopulationSelection(frmdata: any, id: any) {
    return this.http.put(apiEndPoint(`api/population_selection/${id}`), frmdata, httpOptions);
  }

  deletePopulationSelection(id: any) {
    return this.http.delete(apiEndPoint(`api/population_selection/${id}`), httpOptions);
  }
}
