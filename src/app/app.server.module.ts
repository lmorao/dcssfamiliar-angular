import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './modules/app/app.module';
import { AppComponent } from './modules/app/app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { SelectArmourComponent } from './modules/select-armour/select-armour.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
  declarations: [SelectArmourComponent],
})
export class AppServerModule {}
