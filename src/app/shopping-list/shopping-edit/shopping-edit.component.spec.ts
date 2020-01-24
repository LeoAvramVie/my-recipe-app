import {TestBed} from '@angular/core/testing';
import {ShoppingEditComponent} from './shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {ShoppingListComponent} from '../shopping-list.component';
import {SharedModule} from '../../shared/shared.module';
import {Store} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

describe('Shopping-Edit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgModule,
        RouterModule.forChild([
          {path: '', component: ShoppingListComponent}])],
      declarations: [ShoppingEditComponent],
      providers: [SharedModule, Store]
    });
  });
  it('should create the component', () => {
    const fixture = TestBed.createComponent(ShoppingEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
