import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from '../../models/todo.model';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    providers: [MessageService]
})
export class TodoComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription();
    public todoForm = this.formBuilder.group({
        title: ['', [
            Validators.required
        ]],
        completed: [''],
    });

    public allTasks: TodoModel[];
    private taskListLength: number;
    public selectedTask: TodoModel;
    public showModal: boolean;
    public taskName: string;

    constructor(private formBuilder: FormBuilder, private todoService: TodoService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.getAllTasks();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private getAllTasks(): void {
        this.subscription.add(this.todoService.getAll().subscribe(
            response => {
                this.allTasks = response;
                this.taskListLength = response.length;
            },
            error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
            }
        ));
    }

    public selectTask(task: TodoModel): void {
        this.selectedTask = task;
        console.log(this.selectedTask);
        this.taskName = task.title;
    }

    // Doesn't work because new item id is bigger then 200 (last item id)
    public saveTask(): void {
        this.subscription.add(this.todoService.updateTodo(this.selectedTask).subscribe(
            () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Todo successfully edited' });
            },
            error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
            }
        ));
    }

    public addTask(): void {
        this.todoForm.value.completed = false;
        this.todoForm.value.id = this.taskListLength + 1;
        this.allTasks.unshift(this.todoForm.value);
        this.subscription.add(this.todoService.addTodo(this.todoForm.value).subscribe(
            () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Todo successfully added' });
            },
            error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
            }
        ));
    }

    public showDeleteConfirmation(): void {
        this.showModal = true;
    }

    public deleteTask(): void {
        this.subscription.add(this.todoService.removeTodo(this.selectedTask.id).subscribe(
            () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Todo successfully deleted' });
            },
            error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
            }
        ));
    }
}
