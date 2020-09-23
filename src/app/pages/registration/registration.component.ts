import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    providers: [MessageService]
})
export class RegistrationComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription();
    public registrationForm = this.formBuilder.group({
        name: [''],
        userName: [''],
        email: ['', [
            Validators.required,
            Validators.email
        ]],
        phone: ['', [
            Validators.required,
        ]],
        address: this.formBuilder.group({
            street: [''],
            suite: [''],
            city: [''],
            zipcode: ['']
        }),

    });

    constructor(
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService,
        private router: Router,
        private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    public registerUser(): void {
        this.subscription.add(this.registrationService.postUser(this.registrationForm.value).subscribe(
            () => {
                console.log('+++');
                this.router.navigate(['todo']).then();
            },
            (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
            }
        ));
    }
}
