import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Chappie' },
  { id: 12, name: 'Rembrandt' },
  { id: 13, name: 'Princeton' },
  { id: 14, name: 'Harvard' },
  { id: 15, name: 'Stanford' },
  { id: 16, name: 'Tommy' }
]