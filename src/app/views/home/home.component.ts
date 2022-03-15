import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  quizList: any = [];

  ngOnInit(): void {
    this.quizService.getAll().subscribe(
      data => {
        this.quizList = data;
      },
      err => {
          alert("Erro ao buscar o quiz: " + err.error.message);
      }
    )
  }

}
