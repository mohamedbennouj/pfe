import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../services/config/config.service';
import { LoaderService } from '../services/loader/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  public newsJSON: any;
  constructor(
    private authService: AuthenticationService,
    private navController: NavController,
    private config: ConfigService,
    private loadService: LoaderService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadService.present('Please Wait ...', 'dots');
    const url = this.config.configURL + 'mobileHandlers/newsList.ashx?newsMode=kar';
    this.config.getData(url).subscribe((data) => {
      console.log(data);
      this.newsJSON = data;
      this.loadService.dismiss();
    }, error => {
      console.log(error);
      this.loadService.dismiss();
    });
  }

  logoutFn() {
    localStorage.clear();
    this.authService.logout();
    this.navController.navigateRoot(['login']);
  }

}
