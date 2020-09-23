import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { TodoComponent } from './pages/todo/todo.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';

import { StatusTransformerPipe } from './pipes/status-transformer.pipe';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        TodoComponent,
        StatusTransformerPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        DialogModule,
        CheckboxModule,
        ToastModule,
        InputMaskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
