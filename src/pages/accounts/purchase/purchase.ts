import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../../providers/orders/orders';
import { OrderHistoryInfoPage } from '../purchase/order-history-info/order-history-info';

/**
 * Generated class for the PurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {
  viewOrderHistoryInfoPage :any;
  orderList = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService: OrdersProvider,
  ) {
    this.viewOrderHistoryInfoPage = OrderHistoryInfoPage;
    this.orderService.getOrderHistory().subscribe(data => {
      this.orderList = data['orders'] || [];
      // console.log(JSON.stringify(data));
    }, error => {

    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasePage');
  }

}
