import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const QUIZ_API = environment.webapiurl + 'answer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AnwerService {

    constructor(private http: HttpClient) { }

    create(body: any) {
        return this.http.post<any[] | null>(`${QUIZ_API}`, body);
    }
}
