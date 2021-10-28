import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  
  inputTodo: string = "";
  isSubmitted = false;

  todoForm = new FormGroup({
    todoNewItems: new FormControl('', [Validators.required, Validators.minLength(15)] )
  });

  get todoNewItems(){
    return this.todoForm.get('todoNewItems');
  };

  onSubmit(){
    this.isSubmitted = true;
    if (!this.todoNewItems?.invalid){
      const todo: Todo = {
        content: this.todoForm.value.todoNewItems,
        completed: false
      };
      this.newTodoEvent.emit(todo);
    }
  };

  handleIsSubmittedState(){
    if (this.isSubmitted == true)
      this.isSubmitted = false;
  };
}
