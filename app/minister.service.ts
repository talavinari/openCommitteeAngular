import { Injectable } from '@angular/core';
import { Minister } from './minister';
import { MINISTERS, MINISTERS_DETAILS } from './mock-minister';

@Injectable()
export class MinisterService {
    getMinisters(): Promise<Minister[]>
    {
       return Promise.resolve(MINISTERS);
    }

    getMinistersWithDetails(): Promise<Minister[]>
    {
       return Promise.resolve(MINISTERS_DETAILS);
    }
    
    getMinsterDetail(id: number): Promise<Minister> {
        return  this.getMinistersWithDetails()
            .then(ministers => ministers.find(minister => minister.id === id));
    }

    getMinister(id: number): Promise<Minister> {
        return  this.getMinisters()
            .then(ministers => ministers.find(minister => minister.id === id));
    }
}