import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Route, provideRoutes } from '@angular/router';

const routes: Route[] = [
  { loadChildren: 'app/lazy1/lazy1.module#Lazy1Module' },
  { loadChildren: 'app/lazy2/lazy2.module#Lazy2Module' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [provideRoutes(routes), SystemJsNgModuleLoader],
  bootstrap: [AppComponent]
})
export class AppModule {}
