import { CookieService } from 'ngx-cookie';
import { SidebarService } from './sidebar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  packagename = null;
  node: String;


  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SidebarService,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    // this.packagename = this.activatedRoute.snapshot.paramMap.get('ptype');
    this.packagename = this._cookieService.get('ptype');
    this.service.ptype = this.packagename;
    // console.log(this.service.ptype);
    this.node = "$$$$";
    // console.log(this.activatedRoute.snapshot.paramMap.get('ptype'));
  }

}
