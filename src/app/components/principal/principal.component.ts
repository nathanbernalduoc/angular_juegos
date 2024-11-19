import { Component, Input } from '@angular/core';
import { formatDate, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ CommonModule , ReactiveFormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {

  resultado:string = '';
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

  miFormulario!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/[0-9]/), Validators.pattern(/[A-Z]/), Validators.minLength(6), Validators.maxLength(18)]],
      pass2: ['', Validators.required],
      nom: ['', Validators.required],
      fec: ['', Validators.required],
      dir: [''],
    })
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
