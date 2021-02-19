import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { IProducte } from "../interfaces/iproducte";
import { DadesProductesService } from "../service/dades-productes.service";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { ICategoria } from "../interfaces/icategoria";

@Component({
  selector: "app-prueba-form",
  templateUrl: "./prueba-form.component.html",
  styleUrls: ["./prueba-form.component.css"],
})
export class PruebaFormComponent implements OnInit {
  profileForm:any;
  categories :ICategoria[]=[];
  errorMessage: string = '';
  
  constructor(
    private fb: FormBuilder,
    private producteService: DadesProductesService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    this.producteService.getCategories().subscribe(
      (categories: Array<ICategoria>) => {
        this.categories = categories;
      },
      (error) => {
        this.errorMessage = error.message; // treurem l'error a html
        
      }
    );
    this.profileForm = this.fb.group({
      nom: ["", Validators.required],
      descripcio: ["", Validators.required],
      valoracio:["", Validators.required],
      profile: ["", Validators.required],
      categoria:["", Validators.required]
    });
  }
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('profile').setValue(file);
    }
  }
  updateProfile() {
    this.profileForm.patchValue({
      nom: "Cazadora",
      descripcio: ":D",
      categoria:7,
        
    });
  }

  /*onSubmit() {
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
  }*/
  onSubmit() {
    console.log('intento submit')
    const formData = new FormData();
    formData.append('nom', this.profileForm.get('nom').value);
    formData.append('descripcio', this.profileForm.get('descripcio').value);
    formData.append('valoracio', this.profileForm.get('valoracio').value);
    formData.append('categoria', this.profileForm.get('categoria').value);
    formData.append('imatge', this.profileForm.get('profile').value);

    this.httpClient.post<any>(`http://localhost/M14/M14_Ac3/public/index.php/api/producte`, formData).subscribe(
      (res) => this.router.navigateByUrl('/list'),
      (err) => console.log(err)
    );

  }
}
