import { Component, OnInit }          from '@angular/core';
import { ColumnMode, SelectionType }  from '@swimlane/ngx-datatable';
import { Festivo }                    from 'src/app/entities/festivo';
import { FestivosService }            from 'src/app/services/festivos.service';

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent implements OnInit {
  
  public festivos: Festivo[]  = [];
  public _anio: number        = 1900; // Nueva propiedad para almacenar el año ingresado
  public columnas             = [
    { name: 'fecha',  prop: 'fecha' },
    { name: 'nombre', prop: 'nombre' }
  ];

  public _fecha: string       = '';
  public _esFestivo: boolean  = false;

  public fechaValida: boolean = false;
  public _fechaValida: string = '';


  public tipoSeleccion        = SelectionType;
  public modoColumna          = ColumnMode;
  constructor(
    private festivosService: FestivosService,

    ) {}

  ngOnInit():void {

    this.obtenerFestivos();
    this.esFestivo(this._fecha);
    this.esFechaValida(this._fechaValida)
  }

  obtenerFestivos() {

    if (this._anio) {


      this.festivosService.obtenerFestivos(this._anio).subscribe(
        (response: any[]) => {
          this.festivos = response;
        },
        (error) => {
          window.alert(error.message);
          console.error(error);
        }
      );
    } else {
      console.error('Ingresa un año válido.');
    }
  }
  verificarFestivo() {
    // Verifica si se ingresó una fecha antes de hacer la solicitud
    if (this._fecha) {
      this.esFestivo(this._fecha);
    } else {
      console.error('Ingresa una fecha válida.');
    }
  }

  esFestivo(fecha: string) {
    this.festivosService.esFestivo(fecha).subscribe(
      (response: boolean) => {
        this._esFestivo = response;
        return this._esFestivo
      },
      (error) => {
        window.alert(error.message);
        console.error(error);
      }
    );
  }

  verificarFechaValida() {
    // Verifica si se ingresó una fecha antes de hacer la solicitud
    if (this._fechaValida) {
      this.esFechaValida(this._fechaValida);
    } else {
      console.error('Ingresa una fecha válida.');
    }
  }

  esFechaValida(fecha: string) {
    this.festivosService.esFechaValida(fecha).subscribe(
      (response: boolean) => {
        this.fechaValida = response;
      },
      (error) => {
        window.alert(error.message);
        console.error(error);
      }
    );
  }
  public onActivate(event: any) {

  }
}
