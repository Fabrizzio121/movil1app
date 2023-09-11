import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private storage: Storage) {}

  login() {
   
    this.storage.get('accounts').then((accounts: any[]) => {
      if (accounts) {
        
        const account = accounts.find((acc) => acc.email === this.email && acc.password === this.password);

        if (account) {
         
          this.navCtrl.navigateForward('/codigo-qr');
        } else {
          
          console.log('Credenciales inválidas');
        }
      } else {
        
        console.log('No hay cuentas registradas');
      }
    });
  }

  forgotPassword() {
    
    this.navCtrl.navigateForward('/recovery-password');
  }

  createAccount() {
    
    this.navCtrl.navigateForward('/create-account');
  }
}
