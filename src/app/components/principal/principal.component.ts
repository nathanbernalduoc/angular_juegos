import { Component, OnInit } from '@angular/core';
import { formatDate, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { JsonService } from '../../services/categoria.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ CommonModule , ReactiveFormsModule, HttpClientModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  providers: [JsonService, HttpClient]
})

export class PrincipalComponent implements OnInit {

  resultado:string = '';
  titulo = 'Categorías';
  categoria: any[] = []; // {} objeto | [] array
  inventario: any[] = []; // {} objeto | [] array

  miFormulario!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private jsonService: JsonService,
  ) {}

  ngOnInit(): void {

    this.getCategoria();

    console.log('Categoría no recuperada '+JSON.stringify(this.categoria));

    this.miFormulario = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/[0-9]/), Validators.pattern(/[A-Z]/), Validators.minLength(6), Validators.maxLength(18)]],
      pass2: ['', Validators.required],
      nom: ['', Validators.required],
      fec: ['', Validators.required],
      dir: [''],
    });

  }


  getCategoria() {
    this.jsonService.getJsonData().subscribe(
      valor => {
        console.log("JSON recuperado "+JSON.stringify(valor));
        this.categoria = valor.categoria;
      },
      error => {
        console.log("Se ha producido un error\nApi Recover error: "+error.message+" / "+error.status);
      },
      () => { console.log('Ending!'); } 
    );
  }

  goDetalle(categoria:string): void {
    console.log('Hola '+categoria);
    this.router.navigate(['detalle', {categoria: categoria}]);
  }

  public fecha13anos: Date = new Date();

  submitForm() {

    console.log('Validando');

    if (this.miFormulario.valid) {
      
      if (this.validaEdad(this.miFormulario.get("fec")!.value)) {
        console.log('Edad inferior a 13 años.');
        alert('El nuevo usuario no puede ser menor a 13 años.');
      }
    
    } else {
      console.log('Error '+this.miFormulario.get('user')!.hasError('email'));
      console.log('Valid error '+this.miFormulario.valid);
    }

  }

  validaEdad(fecIn:string): any {

    let fecha = new Date();
    this.fecha13anos.setFullYear( fecha.getFullYear() - 13);
  
    let invalid = false;
    let fec2: Date = new Date(fecIn);

    return (fec2 > this.fecha13anos);
    
  }

}
