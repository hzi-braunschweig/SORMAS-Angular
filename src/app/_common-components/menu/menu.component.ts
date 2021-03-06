import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import logoPath from '../../../assets/img/sormas-logo.svg';

export interface RouteItem {
  link: string;
  label: string;
  selectedLink: string;
}

export const routesConfig: RouteItem[] = [
  { link: '', label: 'mainMenuDashboard', selectedLink: 'dashboard' },
  { link: 'about', label: 'mainMenuAbout', selectedLink: 'about' },
  { link: 'tasks/list', label: 'mainMenuTasks', selectedLink: 'tasks' },
  { link: 'cases/list', label: 'mainMenuCases', selectedLink: 'cases' },
  { link: 'events/list', label: 'mainMenuEvents', selectedLink: 'events' },
  { link: 'contacts/list', label: 'mainMenuContacts', selectedLink: 'contacts' },
  { link: 'samples/list', label: 'mainMenuSamples', selectedLink: 'samples' },
  { link: 'user-profile', label: 'mainMenuMyProfile', selectedLink: 'user-profile' },
  { link: 'persons/list', label: 'mainMenuPersons', selectedLink: 'persons' },
  { link: 'users/list', label: 'mainMenuUsers', selectedLink: 'users' },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('animateMenu', [
      state(
        'close',
        style({
          height: '68px',
        })
      ),
      state(
        'open',
        style({
          maxHeight: '2000px',
        })
      ),
      transition('close=>open', animate('200ms')),
      transition('open=>close', animate('200ms')),
    ]),
  ],
})
export class MenuComponent implements OnDestroy {
  routeConfig: RouteItem[] = routesConfig;
  logo = logoPath;

  navigation = routesConfig;
  menuOpen = false;

  selectedRoute = '';

  private subscription: Subscription[] = [];

  constructor(public translateService: TranslateService, public router: Router) {
    translateService.setDefaultLang('en');
    translateService.use('en');

    this.subscription.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.selectedRoute = event.url;
        }
      })
    );
  }

  toggleMenu(closed?: boolean): void {
    this.menuOpen = closed ?? !this.menuOpen;
  }

  isSelectedLink(link: string): boolean {
    return this.selectedRoute.includes(link);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
