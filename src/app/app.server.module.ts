import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { ServerModule} from "@angular/platform-server"
import {ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader"
import { AppComponent } from './app.component';

@NgModule({
    declarations: [],
    imports: [ 
    AppModule,
    ServerModule, 
    ModuleMapLoaderModule
    
 ],
    exports: [],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppServerModule {}