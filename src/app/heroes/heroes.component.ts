import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*Content Heroes*/
  heroes: Hero[] = [];
 
  constructor(public serviceHeroes: HeroesService) {
    
    
    
   }

  ngOnInit() {
    /*Inicio lista de heroes*/
    
    this.getHeroes();
    localStorage.clear();
  }
/**
 * Metodo que me permite realizar la subscripcion para obtener los datos del servicio
 *
 */
  getHeroes(): void
  {
    this.serviceHeroes.getHeroes().subscribe(content => {
      this.heroes = content;
    });
  }
  
/**
 *Metodo que me permite almacenar en el localStorage la cantida de likes de un usuario
 */
  countLikeS(hero:Hero,action:string)
  {
  
   
    hero.name;
    let datos = "";// localStorage.cantidad==null?[]:JSON.parse(localStorage.getItem('cantidad'));
   
    let res = JSON.parse(localStorage.getItem(hero.name));
    console.log(res);
    if (res == undefined)
    {
      localStorage.setItem(hero.name, JSON.stringify({ likes: 1}));
      hero.likes = 1;
    } else
    {
      let cant = hero.likes += 1;
      localStorage.setItem(hero.name, JSON.stringify({ likes: cant }));
    }
  }
}
