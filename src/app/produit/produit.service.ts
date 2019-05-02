import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URLS} from  '../config/api.url.config';
import { Observable } from 'rxjs';

@Injectable()
export class ProduitService{

    constructor(private http: HttpClient){

    }
    getProduits(): Observable<any>{
        return this.http.get(API_URLS.PRODUIT_URLS);

    }

}