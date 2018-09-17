import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
   templateUrl: './servers.component.html',
 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus='No Server created';
  serverName="ServerNameTest";
  serverCreated =false;
  servers=['TestServer1','TestServer2'];

 constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus=this.serverName +' Server was created';
    this.servers.push(this.serverName);
    this.serverCreated=true;
  }
  onUpdatedServerName(event:Event)
  {
    //console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onRemoveServer(id:number)
  {
    const position=id+1;
    this.servers.splice(position,1);
  }

}
