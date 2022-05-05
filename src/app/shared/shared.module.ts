import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './commun_components/layout/layout.component';
import { ProfilComponent } from './commun_components/profil/profil.component';
import { BasketComponent } from './commun_components/basket/basket.component';
import { AngularMaterialModule } from '../angular-material.module';
import { RouterModule } from '@angular/router';


const declarations = [LayoutComponent, ProfilComponent, BasketComponent]
@NgModule({
  declarations,
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: declarations
})
export class SharedModule { }
