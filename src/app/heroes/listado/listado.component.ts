import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string | undefined = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  borrarHeroe(): void {
    this.heroeBorrado =  this.heroes.shift();
  }

}
