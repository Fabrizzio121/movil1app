import { Component } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  recoverPassword() {
    
    if (this.email === 'correo@example.com') {
      
      this.password = 'contraseña123'; 
      this.showPassword = true;
    } else {
      
      console.log('Correo no encontrado');
    }
  }
}
