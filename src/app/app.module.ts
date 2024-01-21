import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BishopInChessboardComponent } from './components/bishop-in-chessboard/bishop-in-chessboard.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, BishopInChessboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
