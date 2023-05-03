import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 12, name: 'Dr. Nice', level: 5} as Hero,
      {id: 13, name: 'Bombasto', level: 6} as Hero,
      {id: 14, name: 'Celeritas', level: 4} as Hero,
      {id: 15, name: 'Magneta', level: 9} as Hero,
      {id: 16, name: 'RubberMan', level: 1} as Hero,
      {id: 17, name: 'Dynama', level: 3} as Hero,
      {id: 18, name: 'Dr. IQ', level: 5} as Hero,
      {id: 19, name: 'Magma', level: 7} as Hero,
      {id: 20, name: 'Tornado', level: 6} as Hero
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
