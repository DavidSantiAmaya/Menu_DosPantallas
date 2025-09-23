import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
