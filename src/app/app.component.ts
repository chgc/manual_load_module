import {
  Component,
  SystemJsNgModuleLoader,
  NgModuleFactory,
  Injector,
  ViewContainerRef,
  ViewChild
} from '@angular/core';

const modules = {
  lazy1: './lazy1/lazy1.module#Lazy1Module',
  lazy2: './lazy2/lazy2.module#Lazy2Module'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = '';
  constructor(private moduleLoader: SystemJsNgModuleLoader, private inj: Injector) {}
  OtherModuleComponent = undefined;
  myModule: NgModuleFactory<any>;

  go(moduleName) {
    const path: string = modules[moduleName];
    this.moduleLoader.load(path).then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      this.myModule = moduleFactory;
      this.OtherModuleComponent = entryComponent;
    });
  }
}
