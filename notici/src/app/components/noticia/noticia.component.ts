import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../service/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() indice : number;
  @Input() enFAvoritos;
  constructor( private iab: InAppBrowser,
                private actionSheetCtrl: ActionSheetController,
                private social: SocialSharing ,
                private dataLocal: DataLocalService) {
    
   }

  ngOnInit() {}
   abrirNoticia(){
    const browser = this.iab.create(this.noticia.url, '_system');
   }
  
  async lanzarMenu(){
    let guardarBtn;

    if( this.enFAvoritos){
      guardarBtn =  {
        text: 'Borrar favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
         this.dataLocal.borrarNoticia(this.noticia);
        }
      };
    }else{
    guardarBtn =  {
        text: 'Favorite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
         this.dataLocal.guardarNoticia(this.noticia);
        }
      };
    }
   
    const actionSheet = await this.actionSheetCtrl.create({
   
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.social.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );

        }
      },
      guardarBtn,
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
   }
}
