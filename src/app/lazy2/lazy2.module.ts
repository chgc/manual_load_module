import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2Component } from './lazy2/lazy2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lazy2Component],
  entryComponents: [Lazy2Component]
})
export class Lazy2Module {
  static entry = Lazy2Component;
}
