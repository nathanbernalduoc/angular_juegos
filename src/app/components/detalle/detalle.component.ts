import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  categoriaSel: any;
  categoria: any =
    {
      cartas: 'Juegos de cartas',
      familiares: 'Juegos familiares',
      ninos: 'Juegos para niños',
      interactivos: 'Juegos interactivos'
    };

  producto: any = {};
  productos_list = {
    cartas:
      [
        {
          id: 1,
          titulo:'Cartas X',
          descripcion: 'Un excelente elección para probar suerte con las cartas X.',
          imagen: 'juego12.jpg',
          descuento: '(Sin descuento)',
          valor: 19900
        },
        {
          id: 2,
          titulo:'Uno',
          descripcion: 'El tan cotizado UNO ha llegado para quedarse en cada hogar.',
          imagen: 'juego11.webp',
          descuento: '(Sin descuento)',
          valor: 3900
        },
        {
          id: 3,
          titulo:'Cartas X',
          descripcion: 'Un excelente elección para probar suerte con las cartas X.',
          imagen: 'juego10.webp',
          descuento: '(Sin descuento)',
          valor: 7900
        },
      ],
    familiares:
      [
        {
          id: 1,
          titulo:'Basta',
          descripcion: 'La nueva entretención familiar ha llegado para quedarse.',
          imagen: 'juego1.webp',
          descuentidescuento: '(Sin descuento)',
          valor: 15900
        },
        {
          id: 2,
          titulo:'Geometry',
          descripcion: 'Toda la familia puede disfrutar de este excelente juego de mesa.',
          imagen: 'juego2.webp',
          descuentidescuento: '(Sin descuento)',
          valor: 8900
        },
        {
          id: 3,
          titulo:'Descúbreme',
          descripcion: 'La acción en juego de familias, descrube al villano y arréstalo.',
          imagen: 'juego5.webp',
          descuentidescuento: '(Sin descuento)',
          valor: 29900
        },
      ],
    ninos:
        [
          {
            id: 1,
            titulo:'Futbol',
            descripcion: 'Lleva la cancha de futbol a tu casa y golea a tu contrintante.',
            imagen: 'juego4.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 45000
          },
          {
            id: 2,
            titulo:'GOOL',
            descripcion: 'Conviértete en un deportista te primera.',
            imagen: 'juego3.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 15000
          },
          {
            id: 3,
            titulo:'GATO',
            descripcion: 'El tradicional gato siempre será una entretención para niños y grandes.',
            imagen: 'juego6.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 10000
          },
        ],
    interactivos:
      [
          {
            id: 1,
            titulo:'Geometry',
            descripcion: 'Toda la familia puede disfrutar de este excelente juego de mesa.',
            image: 'juego2.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 18000
          },
          {
            id: 2,
            titulo:'Ajedrez',
            descripcion: 'No hay mejor forma de trabajar tus neuronas que con un Ajedrez..',
            image: 'juego7.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 43900
          },
          {
            id: 3,
            titulo:'Futbol de Mesa',
            descripcion: 'El deporte estrella en tu mesa y en familia.',
            image: 'juego4.webp',
            descuentidescuento: '(Sin descuento)',
            valor: 7000
          },
      ]
  };

  constructor(private router: ActivatedRoute) {
    console.log('Categoria '+this.router.snapshot.paramMap.get('categoria'));
    this.categoriaSel = this.router.snapshot.paramMap.get('categoria');
    if (this.router.snapshot.paramMap.get('categoria') == 'cartas') {
      this.producto = this.productos_list['cartas'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'familiares') {
      this.producto = this.productos_list['familiares'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'ninos') {
      this.producto = this.productos_list['ninos'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'interactivos') {
      this.producto = this.productos_list['interactivos'];
    }
  }

}
