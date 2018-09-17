import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy {

  @Input('srvElement') element:{type:string, name:string, content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('on init element server');
    console.log('Text content' +this.header.nativeElement.textContent);
    console.log('Text content paragraph ' +this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('on change element server');
    console.log(changes);
  }

  ngDoCheck()
  {
    console.log('ngDoCheck');
  }
  ngAfterContentInit()
  {
    console.log('After Content Init');
    console.log('Text content paragraph ' +this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked()
  {
    console.log('After Content Checked');
  }
  ngAfterViewInit()
  {
    console.log('After View Init');
    console.log('Text content' +this.header.nativeElement.textContent);
  }

  ngAfterViewChecked()
  {
    console.log('After View Checked');
  }
  ngOnDestroy()
  {
    console.log('OnDestroy');
  }

}
