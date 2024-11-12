import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {

  titulo = 'Categorías';
  categorias = [
    {
      id: 1,
      titulo:'Cartas',
      nombre: 'Naipes variados',
      descripcion: 'Diferentes tipos de juegos en donde se usan cartas',
      imagen: 'juego12.jpg',
      link: 'cartas' },
    {
      id: 2,
      titulo:'Familiares',
      nombre: 'Para la familia',
      descripcion: 'Juegos para jugar en familia.',
      imagen: 'juego1.webp',
      link: 'familiares' },
    {
      id: 3,
      titulo:'Niños',
      nombre: 'Pequeños',
      descripcion: 'Accesorios y juegos para los niños más pequeños de la familia.s',
      imagen: 'juego6.webp',
      link: 'ninos' },
    {
      id: 4,
      titulo:'Interactivos',
      nombre: 'Juegos con interacción',
      descripcion: 'Juegos con interacción entre los jugadores',
      imagen: 'juego4.webp',
      link: 'interactivos'
    },
  ];
  constructor(private router: Router) {}

  goDetalle(categoria:string): void {
    console.log('Hola '+categoria);
    this.router.navigate(['detalle', {categoria: categoria}]);
  }


}
