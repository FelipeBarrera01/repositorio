import { Component, OnInit } from '@angular/core';
import { NoticasService } from '../../service/noticas.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];
  constructor(private servicio : NoticasService) {}

  ngOnInit(){
    this.cargarNoticias();
  }
  loadData(event){
    this.cargarNoticias(event);
  }
  cargarNoticias( event? ){
    this.servicio.getTopHeadLines().subscribe(res =>{
      
      console.log(event);
      if(res.articles.length === 0){
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.noticias.push(...res.articles);
      if( event ){
        event.target.complete();
      }
    }); 
  }
}
