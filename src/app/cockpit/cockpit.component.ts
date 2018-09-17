import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName='';
  newServerContent='';
 @Output()  serverCreated = new EventEmitter<{serverName:string,content:string}>();
 @Output('bpCreated')  bluePrintCreated = new EventEmitter<{bluePrintName:string, content:string}>();
 @ViewChild('serverContentInput') serverContentInput :ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInputElement:HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInputElement.value,
      content:this.serverContentInput.nativeElement.value});
  }

  // onAddBluePrint(){
  //  this.bluePrintCreated.emit({
  //    bluePrintName:this.newServerName, 
  //    content: this.newServerContent});
  // }

  onAddBluePrint(nameInputElement:HTMLInputElement){
    this.bluePrintCreated.emit({
      bluePrintName:nameInputElement.value, 
      content: this.serverContentInput.nativeElement.value});
   }
 

}
