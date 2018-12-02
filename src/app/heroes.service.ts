import { Observable } from 'rxjs';




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';


@Injectable()
export class HeroesService {

  heroesUrl:string = 'http://35.162.46.100/superheroes/ ';

  constructor(private http: HttpClient) { }
  
  /*
  * Metodo que retorna un Observable a traves de Http Client de Angular
  */
  getHeroes():Observable<Hero[]>
  {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  

}
