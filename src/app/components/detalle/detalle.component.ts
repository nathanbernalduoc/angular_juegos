import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
  providers: [InventarioService]
})

export class DetalleComponent implements OnInit {

  categoriaSel: any;
  categoria: any;
  producto_list: any = {};
  producto :any;

  constructor(private router: ActivatedRoute, private inventarioService: InventarioService) {}

  ngOnInit(): void {

    console.log('Categoria '+this.router.snapshot.paramMap.get('categoria'));

    this.categoriaSel = this.router.snapshot.paramMap.get('categoria');
    if (this.router.snapshot.paramMap.get('categoria') == 'cartas') {
      this.producto = this.producto_list['cartas'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'familiares') {
      this.producto = this.producto_list['familiares'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'ninos') {
      this.producto = this.producto_list['ninos'];
    } else if (this.router.snapshot.paramMap.get('categoria') == 'interactivos') {
      this.producto = this.producto_list['interactivos'];
    }
  }

}
