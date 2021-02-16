import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { IProducte } from "../interfaces/iproducte";
import { DadesProductesService } from "../service/dades-productes.service";

@Component({
  selector: "app-prueba-form",
  templateUrl: "./prueba-form.component.html",
  styleUrls: ["./prueba-form.component.css"],
})
export class PruebaFormComponent implements OnInit {
  profileForm = this.fb.group({
    nom: ["", Validators.required],
    descripcio: [""],
    valoracio:["2"],
    imatge: ["asdsadasd.jpg"],
    categoria:["7"]
   /* categoria: this.fb.group({
      id:["7"],
      nom: [""],
    }),*/
  });

  constructor(
    private fb: FormBuilder,
    private producteService: DadesProductesService
  ) {
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  updateProfile() {
    this.profileForm.patchValue({
      nom: "Cazadora",
      descripcio: ":D",
      categoria:7,
        
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
    const producto:IProducte=this.profileForm.value;
    console.table(producto.nom)

    this.producteService.post(producto).subscribe((x: any) => {
      alert(x);
    });
    (error: { message: string }) => {
      alert("Error: " + error.message); // podriem treure l'error a html
    };
  }
}
