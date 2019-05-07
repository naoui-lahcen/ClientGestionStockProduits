import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ClientGestionStockProduits';

  showHideSideBar: boolean = false;

  constructor(private appService: AppService ,
                     private router:Router){}

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

  ngOnInit(){
    if(!this.appService.authenticated){
      this.router.navigateByUrl('/login');
    }else {
      this.router.navigateByUrl('/home');
    }
  }
}
