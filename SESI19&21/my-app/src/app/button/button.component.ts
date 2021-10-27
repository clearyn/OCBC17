import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  //Parent->Child
  @Input() message = "";

  //Child->Parent
  // 1 - tambahkan directive @Output di sini
  @Output() sendMessageEvent = new EventEmitter<string>()
  // 2 - buat event handler-nya
  sendMessage () {
    this.sendMessageEvent.emit("Hi, parent! I'm your child.")
  }
  
  //Two Way Binding
  @Input()  currentNumber!: number;
  @Output() currentNumberChange = new EventEmitter<number>();

  @Input()  items!: string[];
  @Output() itemsChange = new EventEmitter<string[]>();

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
    
    this.addNewItem(this.currentNumber);
    this.currentNumberChange.emit(this.currentNumber);
  }

  addNewItem(value: number){
    console.log(this.items);
    this.items.push(value.toString());
    this.itemsChange.emit(this.items);
  }

}
