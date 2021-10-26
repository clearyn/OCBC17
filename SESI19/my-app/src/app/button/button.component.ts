import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()  currentNumber!: number;
  @Output() currentNumberChange = new EventEmitter<number>();

  onChange(event?: number){
    switch (event) {
      case 1:
        this.currentNumber++; 
        break;
      case 2:
        this.currentNumber = this.currentNumber - 1; 
        break;
      default:
        this.currentNumber = 0; 
        break;
    }
    this.currentNumberChange.emit(this.currentNumber);
  }

}
