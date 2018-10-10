import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

// page tabs
import { AboutPage } from '../pages/about/about'
import { ContactPage } from '../pages/contact/contact'
import { HomePage } from '../pages/home/home'
import { MesUrgengesPage } from '../pages/mes-urgenges/mes-urgenges'
import { TabsPage } from '../pages/tabs/tabs'

// API native
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { ScreenOrientation } from '@ionic-native/screen-orientation'

// page de navigation
import { UrgencePage } from '../pages/home/urgence/urgence'
import { PersonneConcernePage } from '../pages/home/urgence/personne-concerne/personne-concerne'
import { TypeUrgence_1Page } from '../pages/home/urgence/type-urgence-1/type-urgence-1'
import { TypeUrgence_2Page } from '../pages/home/urgence/type-urgence-1/type-urgence-2/type-urgence-2'
import { LieuPage } from '../pages/home/urgence/lieu/lieu'
import { IndividusSurLieuxPage } from '../pages/home/urgence/lieu/individus-sur-lieux/individus-sur-lieux'
import { InfoPage } from '../pages/home/urgence/info/info'

// custom components
import { ComponentsModule } from '../components/components.module'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MesUrgengesPage,
    TabsPage,
    UrgencePage,
    PersonneConcernePage,
    TypeUrgence_1Page,
    TypeUrgence_2Page,
    LieuPage,
    IndividusSurLieuxPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MesUrgengesPage,
    TabsPage,
    UrgencePage,
    PersonneConcernePage,
    TypeUrgence_1Page,
    TypeUrgence_2Page,
    LieuPage,
    IndividusSurLieuxPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
