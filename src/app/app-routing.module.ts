import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { QuizComponent } from './views/quiz/quiz.component';

const routes: Routes = [
    {
        path: "quiz",
        children: [
            {
                path: "",
                component: HomeComponent,
            },
            {
                path: ":quizId",
                component: QuizComponent,
                data: {
                    isUserRegister: true
                }
            }
        ]
    },
    {
        path: "",
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
