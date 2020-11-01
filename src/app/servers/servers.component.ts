import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; 
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestSerer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! '+this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event:any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
