import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public utype = null;
  public package = null;
  private uTypeArr: Array<String> = ['employee', 'manager', 'cnb'];

  constructor(
    public sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _cookieService: CookieService
  ) {
  }

  sidebarToggle: boolean = false;

  ngOnInit() {
    if (window.innerWidth > 980) {
      this.sidebarToggle = true
    }
    this.sidebarService.toggleSidebar.subscribe(() => {
      this.sidebarToggle = this.sidebarToggle ? false : true;
    })

    // this.utype = this.activatedRoute.snapshot.paramMap.get('utype');
    this.package = this._cookieService.get('ptype');
    // console.log(this.package);
    // if(!this.uTypeArr.includes(this.utype)) {
    //   this.router.navigate(['/']);
    // } 
  }

  hide() {
    if (window.innerWidth <= 980) {
      this.sidebarService.toggleSidebar.emit()
    }
  }

}
