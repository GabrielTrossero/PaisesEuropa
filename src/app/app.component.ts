import { Component } from '@angular/core';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paises: any[];

  constructor(private paisesService: PaisesService) {

  }

  ngOnInit() {
    this.paisesService.getAll()
      .then(response => this.paises = response)
      .catch(error => console.log(error));
  }

}
