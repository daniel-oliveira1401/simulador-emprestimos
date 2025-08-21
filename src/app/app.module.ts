import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiProdutoEmprestimoInterceptor } from './core/interceptors/api-produto-emprestimo.interceptor';

export const URL_BASE_API_PRODUTO_EMPRESTIMO = new InjectionToken('url_base_api_produto_emprestimo');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    // Usado para mockar a API
    {provide: HTTP_INTERCEPTORS, useClass: ApiProdutoEmprestimoInterceptor, multi: true},

    {provide: URL_BASE_API_PRODUTO_EMPRESTIMO, useValue: 'https://mock-api-produto-emprestimo'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
