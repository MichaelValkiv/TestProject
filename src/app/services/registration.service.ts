import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private http: HttpClient) {
    }

    public postUser(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>('https://jsonplaceholder.typicode.com/users', user);
    }

}
