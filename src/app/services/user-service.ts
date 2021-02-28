import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../dtos/user-dto';

export const MAIN_URL = 'http://localhost:8081';
const urls = '/api/v1/users/getAllActive';
const URL = '/api/v1/users/create';

@Injectable()
export class UserService {

    constructor(private http: HttpClient){}

    // tslint:disable-next-line: typedef
    saveUser(userDto: UserDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, userDto);
    }
    // getAllAdmins(): Observable<Array<AdminDTO>> {
    //     return this.http.get<Array<AdminDTO>>(MAIN_URL + urls);
    // }
    getUsersList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }

}
