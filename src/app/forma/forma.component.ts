import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent  {
 @Output() newItemEvent = new EventEmitter<string>();

 addNewItem(value:string){
   this.newItemEvent.emit(value);
 }

}
