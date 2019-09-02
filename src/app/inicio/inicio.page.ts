import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    components: Componente [] = [
      {
        icon: 'american-football',
        name: 'action',
        redirectTo: '/action'
      },
      {
        icon: 'appstore',
        name: 'alert',
        redirectTo: '/alert'
      },
      {
        icon: 'beaker',
        name: 'Avatar',
        redirectTo: '/avatar'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;

}