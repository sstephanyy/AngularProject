import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Funcionario } from '../models/Funcionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor( private http: HttpClient ) { }
  // se n colocar o colchete no Funcionario[], vai retorna apenas UM funcionario e queremos que retorne todos
  GetFuncionarios() : Observable<Response<Funcionario[]>> 
  {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

}
