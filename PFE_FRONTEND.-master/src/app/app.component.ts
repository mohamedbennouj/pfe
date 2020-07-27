import { Component } from '@angular/core';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './services/auth/authentication.service';
import { ConfigService } from './services/config/config.service';
import { ToastsService } from './services/toast/toasts.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lieu touristique',
      url: '/list',
      icon: 'list'
    }, 
    {
      title: 'Déconnexion',
      url: '/login',
      icon: 'log-out'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private navController: NavController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastsService,
    private network: Network,
    public config: ConfigService,
    public http: HttpClient,
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // watch network for a disconnection
      this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected ☹️');
        this.toastCtrl.presentToast('Internet not available  ☹️');
        this.exitFunction('Exit and try again');
      });

      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        this.toastCtrl.presentToast('Network connected! ☺️ ');
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            this.toastCtrl.presentToast('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });

      this.authenticationService.authState.subscribe(state => {
        console.log(state);
        // alert(state);
        if (state) {
           this.navController.navigateRoot(['home']);
        } else {
          this.navController.navigateRoot(['login']);
        }
      });

    });
  }


  async exitFunction(msg: string) {
    const alert = await this.alertCtrl.create({
      header: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Okay',
          handler: () => {
            navigator['app'].exitApp();
            // console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();
  }

}
