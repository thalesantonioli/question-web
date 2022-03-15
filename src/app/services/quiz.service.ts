import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quiz } from '../models/quiz';
import { User } from '../models/user';

const QUIZ_API = environment.webapiurl + 'quiz';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Quiz[] | null>(`${QUIZ_API}`, httpOptions);
    }

    getById(id: number) {
        return this.http.get<Quiz | null>(`${QUIZ_API}/` + id, httpOptions);
    }
}
