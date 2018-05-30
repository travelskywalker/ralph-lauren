import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// providers
import { EvtProvider } from '../providers/evt/evt';
import { HttpModule } from '@angular/http';

// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { ThankYou2Page } from '../pages/thank-you2/thank-you2';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { WardrobePage } from '../pages/wardrobe/wardrobe';
import { PassageSelectPage } from '../pages/passage-select/passage-select';

const pages = [ MyApp,
      HomePage,
      RegistrationPage,
      ThankYouPage,
      ThankYou2Page,
      WardrobePage,
      PassageSelectPage
      ];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home/:id' },
        { component: RegistrationPage, name: 'RegistrationPage', segment: 'register' },
        { component: ThankYouPage, name: 'ThankYouPage', segment: 'thank-you' },
        { component: ThankYou2Page, name: 'ThankYou2Page', segment: 'thank-you-2' },
        { component: WardrobePage, name: 'WardrobePage', segment: 'wardrobe' },
        { component: PassageSelectPage, name: 'PassageSelectPage', segment: 'passage' }
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
