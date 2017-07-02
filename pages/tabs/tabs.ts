import {Component} from '@angular/core';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerPage } from '../speaker/speaker';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage{
    tab1Root : any = SchedulePage;
    tab2Root : any = SpeakerPage;
    tab3Root : any = MapPage;
    tab4Root : any = AboutPage;
    constructor(){}
}