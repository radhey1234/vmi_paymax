import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { Store } from '@ngrx/store';
import { AuthModel } from '../../../models/auth.model';
import { AuthLogout, getAuthName } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name$: Observable<String>;

  constructor(
    public sidebarService: SidebarService,
    private store: Store<AuthModel>
  ) { }

  ngOnInit() {
    this.name$ = this.store.select(getAuthName);
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar.emit()
  }

  logout() {
    this.store.dispatch(new AuthLogout())
  }

}
