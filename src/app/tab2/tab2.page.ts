import { Component } from '@angular/core';
import { ShoppingItemService } from '../services/shopping-item.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  public item: string;
  
  constructor(
    private shoppingList: ShoppingItemService,//To inject a service
    private alertController: AlertController
  ) {}
  
  addItem(){
    console.log(this.item);

    if(!this.shoppingList.existsItem(this.item)){
      this.shoppingList.addItem(this.item);
      this.item = '';
      console.log(this.shoppingList.items);
      this.alertSuccess();
    }else{
      this.alertError();
    }
  }

  async alertSuccess(){
    const alert = await this.alertController.create({
      header: "Success",
      message: '¡Item Added!',
      buttons: ['OK']
    })
    await alert.present();
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: "Error",
      message: '¡The Item already exists!',
      buttons: ['OK']
    })
    await alert.present();
  }
}
