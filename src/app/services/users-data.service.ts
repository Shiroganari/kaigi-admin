import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsersDataService {
    constructor(private http:HttpClient) { }

    getUsers(name?: string) {
        const params = new HttpParams().append('name', name!);
        return this.http.get('http://kaigi.loc/users', { params: params });
    }

    blockUser(userData: object) {
        return this.http.post('http://kaigi.loc/users/block', userData);
    }
}
