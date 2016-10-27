import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Nehal'},
      {id: 12, name: 'Tim'},
      {id: 13, name: 'Rob'},
      {id: 14, name: 'Jignesh'},
      {id: 15, name: 'Ko'},
      {id: 16, name: 'Matt'},
      {id: 17, name: 'Torrey'},
      {id: 18, name: 'Sam'},
      {id: 19, name: 'Abhishek'},
      {id: 20, name: 'Peter'}
    ];
    return {heroes};
  }
}