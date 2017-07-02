import { Component } from '@angular/core';
import { AboutPopoverPage} from '../about-po/about-popover';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '1995-09-12';
  constructor(public popoverCtrl: PopoverController) {

  }
   presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(AboutPopoverPage);
    popover.present({ ev: event });
  }
}
