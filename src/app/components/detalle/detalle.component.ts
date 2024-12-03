import { Component, OnInit } from '@angular/core';
import { formatDate, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [ CommonModule , ReactiveFormsModule, HttpClientModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
  providers: [InventarioService, HttpClient]
})

export class DetalleComponent implements OnInit {

  categoriaSel: any;
  categoria: any;
  producto_list: any = {};
  producto :any;

  miFormulario!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private inventarioService: InventarioService
  ) {}

  ngOnInit(): void {

    this.getInventario();

    console.log(this.producto_list.ninos);

    console.log('Categoria '+this.router.snapshot.paramMap.get('categoria'));

  }

  getInventario() {
    this.inventarioService.getJsonData().subscribe(
      valor => {
        console.log("JSON recuperado "+JSON.stringify(valor));
        this.producto_list = valor.inventario;


        this.categoriaSel = this.router.snapshot.paramMap.get('categoria');
        if (this.router.snapshot.paramMap.get('categoria') == 'cartas') {
          this.producto = this.producto_list.cartas; //this.producto_list['cartas'];
        } else if (this.router.snapshot.paramMap.get('categoria') == 'familiares') {
          this.producto = this.producto_list.familiares; //this.producto_list['familiares'];
        } else if (this.router.snapshot.paramMap.get('categoria') == 'ninos') {
          this.producto = this.producto_list.ninos; // this.producto_list['ninos'];
        } else if (this.router.snapshot.paramMap.get('categoria') == 'interactivos') {
          this.producto = this.producto_list.interactivos; // this.producto_list['interactivos'];
        }

      },
      error => {
        console.log("Se ha producido un error\nApi Recover error: "+error.message+" / "+error.status);
      },
      () => { console.log('Ending!'); } 
    );
  }


}
