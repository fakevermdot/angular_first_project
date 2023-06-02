import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  username = "";
  password ="";
  errorMsg = "";

  @Output() loginClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private auth:AuthService, private router: Router, private dialogRef: MatDialog){}

  ngOnInit(): void{

  }
  onLoginClick(){
    this.loginClick.emit()
  }
  login(){
    if(this.username.trim().length ===0){
      this.errorMsg = "Username is required";
    }else if (this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password)
      if(res === 200){
        this.router.navigate(['home'])
        this.dialogRef.closeAll()
      }if(res === 403){
        this.errorMsg ="Invalide Credentials";
      }
      }
    }
}
