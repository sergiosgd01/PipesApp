import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = "Sergio";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient() {
    this.name  = 'Raquel';
    this.gender  ='female';
  }

  // i18n Plural
  public clients: string[] = ['Sergio', 'Raquel', 'Juan', 'Pedro', 'Luis', 'Ana', 'Maria', 'Jose', 'Carlos', 'Fernando'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Sergio',
    age: 35,
    address: 'Madrid'
  };

  // Async Pipe
  public myObservableTimer = interval(2000)
  .pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  }
  );

}
