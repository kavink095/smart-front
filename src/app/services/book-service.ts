import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BookDTO } from '../dtos/book-dto';
import { Observable } from 'rxjs';

export const MAIN_URL = 'http://localhost:8081';
const urls = '/api/v1/book/getAll';
const URL = '/api/v1/book/getWrong';

const UR1L = '/api/v1/book/create';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    saveBook(bookDto: BookDTO): Observable<number> {
        return this.http.post<number>(MAIN_URL + UR1L, bookDto);
    }
    // getAllAdmins(): Observable<Array<AdminDTO>> {
    //     return this.http.get<Array<AdminDTO>>(MAIN_URL + urls);
    // }
    getBookList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }

    getBookWrong(): Observable<any> {
        return this.http.get(MAIN_URL + URL);
    }

}
