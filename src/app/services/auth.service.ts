import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const AUTH_API = environment.webauthurl;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    validar(data: any): Observable<any> {
        return this.http.post<any>(AUTH_API + `/otp-validation`, data, httpOptions);
    }

    enviar(email: string): Observable<any> {
        return this.http.post<any>(AUTH_API + `authenticate`, {
            "email" : email
        },httpOptions);
    }
}
