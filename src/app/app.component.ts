import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tip-calculator';
  taxRate = 0;
  tipRates: number[] = [10, 12, 15, 18, 20];
  selectedTipRate: number = this.tipRates[0]; // default rate is 10
  items: Item[] = [
    { salePrice: 0, finalPrice: 0, tip: 0, tax: 0 }
    ];
  total: Item = { salePrice: 0, finalPrice: 0, tip: 0, tax: 0 };

  calculate(item: Item) {
    item.tip = item.salePrice * this.selectedTipRate / 100;
    item.tax = item.salePrice * this.taxRate / 100;
    item.finalPrice = item.salePrice + item.tax + item.tip;
  }

  calculateAll() {
    this.total = { salePrice: 0, finalPrice: 0, tip: 0, tax: 0 };
    for (const item of this.items) {
      this.calculate(item);
      this.total.salePrice += item.salePrice;
    }
    this.calculate(this.total);
  }

  addItem() {
    this.items.push({ salePrice: 0, finalPrice: 0, tip: 0, tax: 0 });
  }

  removeItem(index) {
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.calculateAll();
  }
}

interface Item {
  salePrice: number;
  finalPrice: number;
  tip: number;
  tax: number;
}
