import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADER} from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADER;
  }

  getLeader(id: number): Leader {
    return LEADER.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADER.filter((leader) => (leader.featured == true))[0];
  }

}
