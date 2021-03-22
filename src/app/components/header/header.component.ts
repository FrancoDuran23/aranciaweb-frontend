import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  returnUrl!: string;
  perfil?: string;
  user: any;
  message?: string;
  usuarioLog: Array<Usuario>;
  constructor( private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService,
    private _toastr: ToastrService) {
      this.usuarioLog = new Array<Usuario>();
      this.loginService.refreshPage();
   }

  ngOnInit(): void {
 
  }

}