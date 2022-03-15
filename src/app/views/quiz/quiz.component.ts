import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizIdFromRoute: number = 0;
  questions: any = [];

  constructor(private questioService: QuestionService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.quizIdFromRoute = Number(routeParams.get("quizId"));

    this.questioService.getById(this.quizIdFromRoute).subscribe(
      data => {
        this.questions = data;
      },
      err => {
          alert("Erro ao buscar o quiz: " + err.error.message);
      }
    )
  }

}
