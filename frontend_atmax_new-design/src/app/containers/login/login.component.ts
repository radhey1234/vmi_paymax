import { SnackBar } from './../../shared/notification';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Store } from '@ngrx/store';
import { AuthLoad } from 'src/app/store/actions';

export interface loginState {
  email: String,
  token: String,
  isLoggedIn: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private store: Store<{}>
  ) {
  }

  package_emp = '';
  package_manager = '';
  package_cnb = '';
  email = '';
  password = '';
  info: any = null;

  ngOnInit() {
  }

  login(p1, p2) {
    switch (p1) {
      case 'employee':
        if (this.package_emp) {

          this._cookieService.put('ptype', this.package_emp);
          this.info = this.store.dispatch(new AuthLoad(this.email, this.password));
          // this.router.navigate(['/admin'], { state: { package: this.package_emp } });
          // console.log(this.email, this.password);

          // this._cookieService.put('email', 'e@email.com');
          // this._cookieService.put('token', 'sddf');
          // this._cookieService.put('isLoggedIn', '1');

          // this.router.navigate(['/admin/' + p1 + '/' + this.package_emp + p2], { state: { package: this.package_emp } });
        }
        break;
      case 'manager':
        if (this.package_manager) {
          this._cookieService.put('ptype', this.package_manager);
          this.info = this.store.dispatch(new AuthLoad(this.email, this.password));
          // this.router.navigate(['/admin/' + p1 + '/' + this.package_manager + p2], { state: { package: this.package_manager } });
        }
        break;
      case 'cnb':
        if (this.package_cnb) {
          this._cookieService.put('ptype', this.package_cnb);
          this.info = this.store.dispatch(new AuthLoad(this.email, this.password));
          // this.router.navigate(['/admin/' + p1 + '/' + this.package_cnb + p2], { state: { package: this.package_cnb } });
        }
        break;
      default:
        break;
    }
  }

}
