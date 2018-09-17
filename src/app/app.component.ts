import {createCustomElement} from '@angular/elements';
import { Component, Injector } from '@angular/core';
import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h3{
    color: red;
}
  `]
})
export class AppComponent {
  name = 'app';
  serverElements =[{type:'server',name:'Test Server', content:'this is just a content'}];
   loadedFeature="recipe";
   content =null;

  // constructor(injector:Injector, domSanitizer:DomSanitizer)
  // {
  //   const AlertElement = createCustomElement(AlertComponent,{injector:injector});
  //   customElements.define('my-alert',AlertElement);
   
  //   // 
  //   setTimeout(()=> { 
  //     this.content =domSanitizer.bypassSecurityTrustHtml("<my-alert message='Rendered dynamically'></my-alert>");
  //     // this.content ="<p>Rendered dynamically</p>";

  //   },1000);
  // }

  onServerAdded(serverData:{serverName:string,content:string}){
    this.serverElements.push({
      type:"server",
      name: serverData.serverName,
      content: serverData.content
    })
  }

  onBluePrintAdded (bluePrintData:{bluePrintName:string, content:string})
  {
    this.serverElements.push({
      type:"blueprint",
      name:bluePrintData.bluePrintName,
      content:bluePrintData.content
    })
  }

  onChangeFirst()
  {
    this.serverElements[0].name='Changed'!;
  }
  onDestroyFirst()
  {
    this.serverElements.splice(0,1);
  }
  onNavigate(feature:string)
  {
   this.loadedFeature=feature;
  }
}
