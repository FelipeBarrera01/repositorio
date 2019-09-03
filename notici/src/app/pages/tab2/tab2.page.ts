import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonSegmentButton } from '@ionic/angular';
import { NoticasService } from '../../service/noticas.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, {static: true} ) segement: IonSegment;

  categorias = [ 'business' ,'entertainment', 'general', 'health', 'science',' sports' ,'technology'];
  noticias : Article[] = [];

  constructor( private servicio : NoticasService) {

  }

 ngOnInit(){
  
   this.segement.value = this.categorias[0];

this.cargarNoticias(this.categorias[0]);
 }
 cambioCategoria( event ){
   this.noticias = [];
   this.cargarNoticias(event.detail.value);
 }

 cargarNoticias(categoria: string, event?){


  this.servicio.getTopHeadLinesCategoria(categoria).subscribe(res=>{
      console.log(res);
      this.noticias.push(... res.articles);
      if( event ){
        event.target.complete();
      }
  });
 }
 loadData(event){
   this.cargarNoticias(this.segement.value, event);
 }
}
