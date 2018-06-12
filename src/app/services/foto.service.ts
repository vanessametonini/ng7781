import { HttpClient } from "@angular/common/http";
import { Foto } from "../foto/foto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { METHODS } from "http";

const url = 'http://localhost:3000/v1/fotos/'

@Injectable()
export class FotoService {

        constructor(private conexaoApi: HttpClient){}

        listar(): Observable<Foto[]> {
            return this.conexaoApi.get<Foto[]>(url)
        }

        cadastrar(foto: Foto): Observable<Object>{
            return this.conexaoApi.post(url,foto)
        }

        deletar(foto: Foto): Observable<Object>{
            return this.conexaoApi.delete(url+foto._id)
        }
        
        obterFoto(fotoId: string): Observable<Foto>{
            return this.conexaoApi.get<Foto>(url+fotoId)
        }
        
        atualizar(foto: Foto): Observable<Object>{
            return this.conexaoApi.put(url+foto._id, foto)
        }

}