import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  
  constructor(private dialogRef: MatDialog){}
   openDialog(){
    this.dialogRef.open(FormComponent)
  }

}
