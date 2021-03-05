
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RackDTO } from '../dtos/rack-dto';

export const MAIN_URL = 'http://localhost:8081';
const urls = '/api/v1/racks/getAll';
const UR1L = '/api/v1/racks/create';

@Injectable()
export class RackService {
    constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    saveRack(rackdto: RackDTO): Observable<number> {
        return this.http.post<number>(MAIN_URL + UR1L, rackdto);
    }
    getRackList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }
}
