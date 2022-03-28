import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anwser } from 'src/app/models/answer';
import { AnwserCreate } from 'src/app/models/anwerCreate';
import { AnwerService } from 'src/app/services/anwer.service';
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
  anwserCreate = {} as AnwserCreate;

  constructor(private questioService: QuestionService, private route: ActivatedRoute, private anwerService: AnwerService, private router: Router) { }


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

  enviar(){
    let email = localStorage.getItem('email');

    const routeParams = this.route.snapshot.paramMap;
    this.quizIdFromRoute = Number(routeParams.get("quizId"));

    this.anwserCreate.patientId = email || '';
    this.anwserCreate.quizId = this.quizIdFromRoute;

    this.anwerService.create(this.anwserCreate).subscribe(
      () => {
        alert("Formulário enviado com sucesso!");
        this.router.navigate(['/quiz']);
      },
      err => {
          alert("Erro ao buscar o quiz: " + err.error.message);
      }
    )
  }

  changeValue(value: any, id: any, text?: any){
    let answer: Anwser;
    if(this.anwserCreate.answerDTOList){
      answer = this.anwserCreate.answerDTOList.filter(a => a.questionId === id)[0];
      
      if(!answer){
        this.insertIntoArray(value, id, text);
      } else if (text){
        answer.description = text;
      } else{
        answer.answer = value;
      }
    } else {
      this.insertIntoArray(value, id);
    }
  }

  insertIntoArray(value: any, id: any, text?: any){
      let answer: Anwser;
      answer = {} as Anwser
      answer.questionId = id;
      
      if (text){
        answer.description = text;
      } else{
        answer.answer = value;
      }

      let array: any = this.anwserCreate.answerDTOList as [];
      if(!array){
        array = []
      }
      array.push(answer)
      this.anwserCreate.answerDTOList = array;
  }

  inputChange(event: any, id: any) {
    this.changeValue(null, id, (event.target as HTMLInputElement)?.value);
  }
}
