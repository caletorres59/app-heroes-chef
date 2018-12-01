import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  cont: number = 0;
  constructor(public serviceHeroes: HeroesService) {
    
    this.serviceHeroes.getHeroes().subscribe(content => {
    this.heroes = content;
    console.log(this.heroes);
    })
   }

  ngOnInit() {
  }
  countLikeS(hero:Hero)
  {
  

let nameHero = hero.name;
let datos = localStorage.cantidad==null?[]:JSON.parse(localStorage.getItem('cantidad'));
let resultados = datos.find(e => e.name == nameHero);
if(resultados == undefined){
  
  console.log(nameHero );
  let add = { name: hero.name, likes: 1 }; 
  datos.push(add);
  console.log(datos);
}else{

  resultados.likes = 3;

  localStorage.cantidad = JSON.stringify(datos);

  console.log(datos);

}
    
    // hero.likes = 0;
    // let datos = localStorage.setItem("cantidad", JSON.stringify(hero));
    // hero = JSON.parse(localStorage.getItem("cantidad"));
    // console.log(hero.likes);
    
    // if (hero.likes > 0)
    // {
    //   hero.likes++;
    //   localStorage.setItem("cantidad", JSON.stringify(datos));
    //   console.log(datos);
    // } else
    // {
     
    // }
   
  }
}
