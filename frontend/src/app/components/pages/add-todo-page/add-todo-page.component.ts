import { Component } from '@angular/core';
import { AddTodoFormComponent } from "../../shared/add-todo-form/add-todo-form.component";

@Component({
    selector: 'app-add-todo-page',
    standalone: true,
    templateUrl: './add-todo-page.component.html',
    styleUrl: './add-todo-page.component.css',
    imports: [AddTodoFormComponent]
})
export class AddTodoPageComponent {

}
