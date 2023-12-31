import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/model/MenuItem';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [];



  ngOnInit(){
    this.userService.getMenuItems().subscribe((menuItems: MenuItem[]) => {
      this.menuItems = menuItems;
    })
  }

  constructor(private userService:UserService){

  }


}
 

