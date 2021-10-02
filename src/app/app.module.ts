import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'lista-produtos',
        component: ListaProdutosComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListaProdutosComponent,
    TopBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
