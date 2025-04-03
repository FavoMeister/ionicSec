import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {

  public items: string[];
  public isEmpty: boolean;
  
  constructor() { 
    this.items = [];
    this.isEmpty = true;
    
  }

  addItem(item: string){
    this.items.push(item);
    this.isEmpty = false;
  }

  removeItem(item: string){
    let index = this.items.findIndex(it => it.toUpperCase().trim() === item.toUpperCase());
    if(index != -1){
      this.items.splice(index, 1); //delete the array position
      if(this.items.length == 0){
        this.isEmpty = true;
      }
    }
  }

  removeAllItem(){
    this.items = [];
    this.isEmpty = true;
  }

  existsItem(item: string){
    const itemFound = this.items.find(it => it.toUpperCase().trim() === item.toUpperCase()); //gives you all elements
    return itemFound;
  }
}
