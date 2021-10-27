import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { DirectiveComponent } from './directive/directive.component';
import { FileSizePipe } from './file-size.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    ButtonComponent,
    DirectiveComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
