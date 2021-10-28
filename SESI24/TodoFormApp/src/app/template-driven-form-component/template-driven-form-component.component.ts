import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent  {
  task: Task[] = [];
  categories = ['School', 'Work', 'Hobby'];

  onSubmit(form: NgForm){
    const {name, category} = form.value;
    this.task = [...this.task, new Task(name, false, category)];
    form.reset();
  }
}
