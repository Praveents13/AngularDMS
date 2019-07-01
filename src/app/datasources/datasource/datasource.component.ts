import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-datasource',
  templateUrl: './datasource.component.html',
  styleUrls: ['./datasource.component.css']
})
export class DatasourceComponent implements OnInit {
  
  @Input() name:String;
  @Input() createdDate:Date;
  @Input() creator:String;

  constructor() { }

  ngOnInit() {
  }

}
