import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const  apikey = environment.apikey;
const  apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class NoticasService {
  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor( private http: HttpClient) { }
    private ejecutarQuery<T>(query :string){
      query = apiUrl + query;
      return this.http.get<T>(query, {headers});
    }

  getTopHeadLines(){
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.headlinesPage}`);
    
  }
  getTopHeadLinesCategoria( categoria: string){

    if(this.categoriaActual === categoria){
      this.categoriaPage++;
    }else{
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country?=us&category=${categoria}&page=${this.categoriaPage}`);
   // return this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-03&sortBy=publishedAt&apiKey=1bc6bd590058487bb507952137694aea`);
  }
}
