import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  resultado: any;
  constructor(
    private http: HttpServiceService
  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.http.callBackend(f.value, 'setSolicitud')
      .then((result) => {
        this.resultado = `Result::::${JSON.stringify(result)}`;
      })
      .catch(err => this.resultado = `Error:::${JSON.stringify(err)}`
    );
  }

}
