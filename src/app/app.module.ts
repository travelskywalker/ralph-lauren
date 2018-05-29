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
<<<<<<< HEAD
import { ThankYou2Page } from '../pages/thank-you2/thank-you2';
import { EvtProvider } from '../providers/evt/evt';
=======
import { WardrobePage } from '../pages/wardrobe/wardrobe';

>>>>>>> dev_lei


const pages = [ MyApp,
      HomePage,
      RegistrationPage,
<<<<<<< HEAD
      ThankYou2Page
=======
      WardrobePage
>>>>>>> dev_lei
      ];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home/:id' },
        { component: RegistrationPage, name: 'RegistrationPage', segment: 'register' },
<<<<<<< HEAD
        { component: ThankYou2Page, name: 'ThankYou2Page', segment: 'thank-you-2' }
=======
        { component: WardrobePage, name: 'WardrobePage', segment: 'wardrobe' }
>>>>>>> dev_lei
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
