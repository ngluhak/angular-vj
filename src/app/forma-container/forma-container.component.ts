import { Component } from '@angular/core';

@Component({
  selector: 'app-forma-container',
  templateUrl: './forma-container.component.html',
  styleUrls: ['./forma-container.component.css']
})
export class FormaContainerComponent   {

items= ['prvi','drugi','treci','cervrti'];

addItem(newItem: string){
  this.items.push(newItem);
}
}
