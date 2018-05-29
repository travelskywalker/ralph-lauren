import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// providers
import { EvtProvider } from '../providers/evt/evt';


// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { WardrobePage } from '../pages/wardrobe/wardrobe';



const pages = [ MyApp,
      HomePage,
      RegistrationPage,
      WardrobePage
      ];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home/:id' },
        { component: RegistrationPage, name: 'RegistrationPage', segment: 'register' },
        { component: WardrobePage, name: 'WardrobePage', segment: 'wardrobe' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvtProvider
  ]
})
export class AppModule {}
