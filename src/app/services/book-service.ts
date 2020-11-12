import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BookDTO } from '../dtos/book-dto';
import { Observable } from 'rxjs';

export const MAIN_URL = 'http://localhost:8084';
const urls = '/api/v1/admins';
const URL = '/api/v1/admins/saves';

@Injectable()
export class BookService {

    constructor(private http: HttpClient){}

    // tslint:disable-next-line: typedef
    saveBook(bookDto: BookDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, bookDto);
    }
    // getAllAdmins(): Observable<Array<AdminDTO>> {
    //     return this.http.get<Array<AdminDTO>>(MAIN_URL + urls);
    // }
    getBookList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }

}
