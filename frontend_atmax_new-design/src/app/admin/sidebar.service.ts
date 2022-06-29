import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public toggleSidebar: EventEmitter<any> = new EventEmitter();
  public ptype = null;
  public header = null;
  public backbutton = false;
  public backlink = null;
  constructor() { }
}
