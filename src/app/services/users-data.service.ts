import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsersDataService {
    constructor(private http:HttpClient) { }

    getUsers() {
        return this.http.get('http://kaigi.loc/users');
    }
}
