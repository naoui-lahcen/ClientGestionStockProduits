import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URLS} from  '../config/api.url.config';
import { Observable } from 'rxjs';
import {Produit} from  '../shared/produit';

@Injectable()
export class ProduitService{

    constructor(private http: HttpClient){

    }
    getProduits(): Observable<any>{
        return this.http.get(API_URLS.PRODUIT_URLS);

    }

    addProduit(produit: Produit): Observable<any>{
        return this.http.post(API_URLS.PRODUIT_URLS,produit);

    }

    updateProduit(produit: Produit): Observable<any>{
        return this.http.put(API_URLS.PRODUIT_URLS,produit);

    }
    deleteProduit(id: number): Observable<any>{debugger;
        return this.http.delete(API_URLS.PRODUIT_URLS + '/${id}');

    }
}