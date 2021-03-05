import { Time } from "@angular/common";

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RackDTO } from '../dtos/rack-dto';

export const MAIN_URL = 'http://localhost:8081';
const urls = '/api/v1/logs/getAll';
const UR1L = '/api/v1/racks/create';

@Injectable()
export class UlogService {
    constructor(private http: HttpClient) { }

    getLogList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }
}
