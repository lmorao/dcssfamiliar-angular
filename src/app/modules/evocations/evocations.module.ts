import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvocableListComponent } from './evocable-list/evocable-list.component';
import { EvocationsComponent } from './evocations.component';



@NgModule({
  declarations: [EvocableListComponent, EvocationsComponent],
  imports: [
    CommonModule
  ]
})
export class EvocationsModule { }
