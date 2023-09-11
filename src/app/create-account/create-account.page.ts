import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  name: string = '';
  email: string = '';
  password: string = '';

  
  accounts: { name: string, email: string, password: string }[] = [];

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  registerAccount() {
    
    const newAccount = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    
    this.storage.get('accounts').then((accounts: any[]) => {
      if (accounts) {
        
        accounts.push(newAccount);
      } else {
        
        accounts = [newAccount];
      }

      
      this.storage.set('accounts', accounts);

      
      this.navCtrl.navigateForward('/login');
    });
  }
}
