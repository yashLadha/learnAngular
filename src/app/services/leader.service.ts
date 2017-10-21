import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADER} from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise( (resolve) => {
      setTimeout(() => resolve(LEADER), 2000);
    });
  }

  getLeader(id: number): Promise<Leader> {
    return new Promise( (resolve) => {
      setTimeout(() => resolve(LEADER.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise( (resolve) => {
      setTimeout(() => resolve(LEADER.filter((leader) => (leader.featured === true))[0]), 2000);
    });
  }

}
