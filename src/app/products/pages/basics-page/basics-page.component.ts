import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLowerCase: string = 'sergio';
  public nameUpperCase: string = 'SERGIO';
  public nameTitleCase: string = 'Sergio Guijarro';
  public customDate: Date = new Date();

}
