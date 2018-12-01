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
  
  getHero(): void
  {
    let name = this.route.snapshot.paramMap.get('name');
      this.heroService.getHeroes().subscribe(content => { 
      this.heroes = content.filter(hero  => hero.name === name);
      this.hero = this.heroes[0];
    });
  
    
  }

  goBack(): void {
    this.location.back();
  }


}
