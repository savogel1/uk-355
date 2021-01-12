import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Navigation',
      url: '/navigation',
      icon: 'compass'
    },
    {
      title: 'Zahlen',
      url: '/zahlen',
      icon: 'infinite'
    },
    {
      title: 'String',
      url: '/string',
      icon: 'language'
    },
    {
      title: 'Objekte',
      url: '/objekte',
      icon: 'planet'
    },
    {
      title: 'Array',
      url: '/array',
      icon: 'barcode'
    },
    {
      title: 'DataBinding',
      url: '/data-binding',
      icon: 'git-compare'
    },
    {
      title: 'Calculator',
      url: '/calculator',
      icon: 'calculator'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'accessibility'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
