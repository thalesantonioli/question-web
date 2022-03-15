import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { User } from '../models/user';

const QUIZ_API = environment.webapiurl + 'question';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(private http: HttpClient) { }

    getById(id: number) {
        return this.http.get<Question[] | null>(`${QUIZ_API}/quiz/` + id, httpOptions);
    }
}
