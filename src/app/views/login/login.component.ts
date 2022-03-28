import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoggedIn: boolean = false;
    emailSend: boolean = false;

    loginForm: FormGroup = this.formBuilder.group({
        email: '',
        code: ''
    });

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

    ngOnInit(): void {

    }

    enviar() : void {
        const { email } = this.loginForm.value;
        if(!email){
            alert("Preencher o campo email.")
        } else {
            this.authService.enviar(email).subscribe(
                () => {
                    this.emailSend = true;
                },
                err => {
                    alert("Erro ao enviar código: " + err.error.message);
                    this.loginForm.reset();
                }
            )
        }
    }

    validar(): void {
        this.authService.validar(this.loginForm.value).subscribe(
            () => {
                localStorage.setItem('email', this.loginForm.value.email)
                this.router.navigate(['/quiz']);
            },
            err => {
                alert("Erro no login: " + err.error.message);
                this.loginForm.reset();
            }
        )
    }
}
