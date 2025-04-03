import { Component } from '@angular/core';
import { ShoppingItemService } from '../services/shopping-item.service';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    public shoppingList: ShoppingItemService,
    private alertController: AlertController,
    private menuCoontroller: MenuController
  ) {}

  async removeItem(item: string){
    const alert =  await this.alertController.create({
      header: 'Confirmación',
      message: 'Estás seguro de borrar el item?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingList.removeItem(item);
            this.menuCoontroller.close();
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss()
          }
        }
      ]
    });

    await alert.present();
  }

  onRenderItems($event){
    const item = this.shoppingList.items.splice($event.detail.from, 1)[0];

    this.shoppingList.items.splice($event.detail.to, 0, item);

    $event.detail.complete();

    //console.log(this.shoppingList.items);
    
  }
  async removeAll(){
    const alert =  await this.alertController.create({
      header: 'Confirmación',
      message: 'Estás seguro de borrar todos los items?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingList.removeAllItem();
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss()
          }
        }
      ]
    });

    await alert.present();
  }
}
