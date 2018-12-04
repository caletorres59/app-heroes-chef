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
    let res = "";
    let datos = "";// localStorage.cantidad==null?[]:JSON.parse(localStorage.getItem('cantidad'));
    if (action == 'likes')
    {
      res = JSON.parse(localStorage.getItem(hero.name));
    } else
    {
      res = JSON.parse(localStorage.getItem(hero.name+action));
   }
    
    console.log(res);
    if (res == undefined)
    {
      if (action == 'likes')
      {
        localStorage.setItem(hero.name, JSON.stringify({ likes: 1}));
      hero.likes = 1;
      } else
      {
        localStorage.setItem(hero.name+action, JSON.stringify({ dislikes: 1}));
        hero.dislikes = 1;
        }
      
    } else
    {
      if (action == 'likes')
      {
      let cant = hero.likes += 1;
      localStorage.setItem(hero.name, JSON.stringify({ likes: cant }));
      } else
      {
        let cantdis = hero.dislikes += 1;
        localStorage.setItem(hero.name+action, JSON.stringify({ dislikes: cantdis }));
        
        }
      
    }
  }
}
