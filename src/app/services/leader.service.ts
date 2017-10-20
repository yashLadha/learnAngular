import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADER} from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADER);
  }

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADER.filter((leader) => (leader.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADER.filter((leader) => (leader.featured === true))[0]);
  }

}
