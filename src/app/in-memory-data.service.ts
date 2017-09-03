import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'BatMan' },
            { id: 12, name: 'SuperMan' },
            { id: 13, name: 'Iron Man' },
            { id: 14, name: 'Spider Man' },
            { id: 15, name: 'Hulk' },
            { id: 16, name: 'Ant Man' },
            { id: 17, name: 'Jarvis' },
            { id: 18, name: 'Shaktiman' },
            { id: 19, name: 'Junior G' },
            { id: 20, name: 'Aryamaan' }
        ];
        return { heroes };
    }
}
