import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebHostService } from "../web-host.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  newUserForm: FormGroup;
  respuesta: string = "";

  constructor(
    private fb: FormBuilder,
    private webHostService: WebHostService
  ) {}

  ngOnInit() {
    this.newUserForm = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }

  lanzame(form: any) {
    this.webHostService.sayHello(form.value.nombre).subscribe( obj => {
      this.respuesta = obj;
      console.log(obj);
    })
  }

}
