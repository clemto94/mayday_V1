import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MesUrgengesPage } from '../pages/mes-urgenges/mes-urgenges';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation'
import { UrgencePage } from '../pages/home/urgence/urgence';
import { MonUrgencePage } from '../pages/mon-urgence/mon-urgence';
import { TestNavPage } from '../pages/test-nav/test-nav';
import { TypeUrgence_1Page } from '../pages/type-urgence-1/type-urgence-1';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MesUrgengesPage,
    UrgencePage,
    TestNavPage,
    TabsPage,
    MonUrgencePage,
    TypeUrgence_1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MesUrgengesPage,
    TabsPage,
    TestNavPage,
    UrgencePage,
    MonUrgencePage,
    TypeUrgence_1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
