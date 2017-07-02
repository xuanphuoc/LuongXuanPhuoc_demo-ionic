import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AboutPopoverPage } from '../pages/about-po/about-popover';
import { AcountPage } from '../pages/acount/acount';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerPage } from '../pages/speaker/speaker';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AcountPage,
    LoginPage,
    MapPage,
    AboutPopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignUpPage,
    SpeakerDetailPage,
    SpeakerPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerPage, name: 'Speaker', segment: 'speaker' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AcountPage, name: 'AccountPage', segment: 'account' },
        { component: SignUpPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AcountPage,
    LoginPage,
    MapPage,
    AboutPopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignUpPage,
    SpeakerDetailPage,
    SpeakerPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
