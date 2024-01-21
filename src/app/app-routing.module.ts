import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BishopInChessboardComponent } from './components/bishop-in-chessboard/bishop-in-chessboard.component';

const routes: Routes = [{
  path: '',
  component: BishopInChessboardComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
