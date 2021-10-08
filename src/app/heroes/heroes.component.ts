import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(
    public heroService: HeroService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  //hero je ovdje jedan objekt, a Hero je interface koji definira izgled objekta
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };


  //heroes je ovdje objekt?, a HEROES je polje/array
  //heroes = HEROES;
  heroes: Hero[] = [];

  //methods: ne koriste se nakon implementacije routinga
  //selectedHero?: any;
  //onSelect(myhero: Hero): void {
    //console.log(this.selectedHero = myhero);
    //this.selectedHero = myhero;
    //this.messageService.add('Selected hero name: ' + myhero.name);
  //}

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //prije observable-a se vraćao Hero[] array, a sada vraća Observable<Hero[]> pa treba promijenit return ovdje
    //observable krene publishat values tek kada se iskoristi subscribe
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
