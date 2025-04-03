import { Component } from '@angular/core';
import { ShoppingItemService } from '../services/shopping-item.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    public shoppingList: ShoppingItemService,
    private alertController: AlertController
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
