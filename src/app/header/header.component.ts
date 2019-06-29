import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit, OnDestroy {
  private isAuthenticates = false;
  private userSub: Subscription;


  constructor(private dataStoreageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStoreageService.storeRecipes();

  }
  onFetchData() {
    this.dataStoreageService.fetchRecipes().subscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticates = !!user;
      console.log(!user);
      console.log(!!user);
    });

  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
