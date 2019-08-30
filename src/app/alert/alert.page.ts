import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
titulo = 'Alert Page';
  constructor(public alerta: AlertController ) {

   }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'igrese el titulo'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
         
          }
        }, {
          text: 'Okay',
          handler: (data) => {
            console.log('Confirm Okay');
            this.titulo = data.titulo;
          }
        }
      ]
    });

    await alert.present();
  }

}
