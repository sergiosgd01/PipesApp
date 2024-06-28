import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public orderBy?: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  }, {
    name: 'Batman',
    canFly: false,
    color: Color.black
  }, {
    name: 'Robin',
    canFly: false,
    color: Color.green
  }];

  public isOpperCase: boolean = false;

  toggleOpperCase(): void {
    this.isOpperCase = !this.isOpperCase;
  }

  changeOrder(orderBy: keyof Hero): void {
    this.orderBy = orderBy;
  }

}
