import { KnightComponent } from './knight.component';
import { SquareComponent } from './square.component';
import { BoardComponent } from './board.component';
import { ContainerComponent } from './container.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from 'angular-skyhook';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    KnightComponent, SquareComponent, BoardComponent, ContainerComponent
  ],
  imports: [
    CommonModule,
    SkyhookDndModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }])
  ],
  providers: [
    GameService
  ]
})
export class Module { }
