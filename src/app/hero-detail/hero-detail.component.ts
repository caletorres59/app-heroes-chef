import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero: Hero;
  heroes: Hero[] = [];
  constructor(private route: ActivatedRoute,
    private heroService: HeroesService,
    private location: Location) {
    
     }
  
  ngOnInit() {
    this.getHero();
  }
  
  /**
   *Metodo que me permite obtener los datos por medio del nombre del superheroe seleccionado
   */
  
  getHero(): void
  {
      let name = this.route.snapshot.paramMap.get('name');
      this.heroService.getHeroes().subscribe(content => { 
      this.heroes = content.filter(hero  => hero.name === name);
      this.hero = this.heroes[0];
    });
  
    
  }
/*
 * Metodo que me permite regresar al listado de heroes
*/ 
  goBack(): void {
    this.location.back();
  }


}
