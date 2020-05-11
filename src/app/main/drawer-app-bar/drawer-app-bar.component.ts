import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-drawer-app-bar',
  templateUrl: './drawer-app-bar.component.html',
  styleUrls: ['./drawer-app-bar.component.scss']
})
export class DrawerAppBarComponent implements OnInit {
  destinations = [
    {label: 'Inbox', icon: 'inbox', activated: true},
    {label: 'Star', icon: 'star', activated: false},
    {label: 'Sent Mail', icon: 'send', activated: false},
    {label: 'Drafts', icon: 'drafts', activated: false}
  ];
  isDrawerOpen = true;
  appBarClass = 'drawer-open';

  drawerState: Subject<boolean> = new Subject();

  constructor() {
    this.drawerState.subscribe(value => {
      this.isDrawerOpen = value;
      if (value) {
        this.appBarClass = 'drawer-open';
      } else {
        this.appBarClass = '';
      }
    });
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    const newState = !this.isDrawerOpen;
    this.drawerState.next(newState);
  }
}
