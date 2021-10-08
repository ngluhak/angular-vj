import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }
  getHeroes(): Observable<Hero[]> {
   // const heroes = of(HEROES);
   // this.messageService.add('This is a new message wooohoooo');
   // return heroes;
    //ovo gore je bilo za rxjs pozivanje vrijednosti
    //return HEROES;
    return this.http.get<Hero[]>(this.heroesUrl)

  }

  
  getHero(id:number):Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
    
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
private heroesUrl= 'api/heroes';
}
