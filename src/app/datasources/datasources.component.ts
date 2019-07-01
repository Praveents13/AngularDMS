import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasources',
  templateUrl: './datasources.component.html',
  styleUrls: ['./datasources.component.css']
})
export class DatasourcesComponent implements OnInit {

  datasources:any={};

  constructor() { }

  ngOnInit() {
    this.loadDataSources();
  }

  loadDataSources():void {
    this.datasources['elements']=[{'name':'git','creator':'Robert','createdDate':Date.now()},
                                  {'name':'ptc','creator':'Stanley','createdDate':Date.now()},
                                  {'name':'oslc','creator':'Praveen','createdDate':Date.now()}]
  }
}
