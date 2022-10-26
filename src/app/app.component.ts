import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Explore', url: '/folder/Inbox', icon: 'earth' },
    { title: 'Hotels', url: '/folder/Outbox', icon: 'bed' },
    { title: 'Vacation Rentals', url: '/folder/Favorites', icon: 'heart' },
  ];
 
  constructor() {}
}
