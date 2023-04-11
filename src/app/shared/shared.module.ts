import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [

    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
