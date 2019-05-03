import { Component, OnInit } from '@angular/core';
/**import {ProduitMockService} from './produit.mock.service';
 */
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];

  produitForm: FormGroup;

  operation : String = "add";

  selectedProduit : Produit;

  /**  constructor(private produitService: ProduitMockService,private fb: FormBuilder) {
 */


  constructor(private produitService: ProduitService,private fb: FormBuilder) {
    this.createForm();
    
  }

  ngOnInit() {
    this.loadProduit();
    this.initProduit();
  }

  createForm (){
    this.produitForm = this.fb.group({
      ref: ['',Validators.required],
      quantite: '',
      prixUnitaire: ''
    }); 
  }

  loadProduit(){
    this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      error => {console.log('An error was accured,')},
      () => {console.log('loadng produits was done.')}
    );
  }


  addProduit(produit: Produit){ debugger;
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduit();
      }
    );
  }

  updateProduit(){ debugger;
    this.produitService.updateProduit(this.selectedProduit)
    .subscribe(
      res => {
        this.initProduit();
        this.loadProduit();
      }
    );
  }

  deleteProduit(){ debugger;
    this.produitService.deleteProduit(this.selectedProduit.ref)
    .subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduit();
      }
    );
  }

initProduit(){
  this.selectedProduit = new Produit();
  this.createForm();
}








}
