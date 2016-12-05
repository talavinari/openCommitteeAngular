import { Injectable } from '@angular/core';
import { Minister } from './minister';
import { MINISTERS } from './mock-minister';

@Injectable()
export class MinisterService {
    getMinisters(): Promise<Minister[]>
    {
       return Promise.resolve(MINISTERS);
    }

    getMinister(id: number): Promise<Minister> {
        return this.getMinisters()
            .then(ministers => ministers.find(bill => bill.id === id));
    }
}