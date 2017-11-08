import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from './lazy1/lazy1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lazy1Component],
  entryComponents: [Lazy1Component]
})
export class Lazy1Module {
  static entry = Lazy1Component;
}
