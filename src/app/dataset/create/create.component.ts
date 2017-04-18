/**
 * Created by hongjiayong on 2017/4/12.
 */
import {Component, OnInit, trigger, state, style, transition, animate, ViewChild, ElementRef} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentPageService} from "../../services/CurrentPageService";

@Component({
  moduleId: module.id,
  selector: 'dataset-create',
  templateUrl: 'create.component.html',
  styleUrls: ['../../main.css', 'create.component.css']
})

export class DatasetCreateComponent implements OnInit{

  datasetName: string;
  datasetDes: string;
  formatDes: string;
  attrFlag: boolean;

  keys = new Array();
  private keyName:string;
  private keyType:number;

  private loaderClass:string;

  constructor(
    private currentPage: CurrentPageService
  ){}

  ngOnInit(): void {
    this.datasetName = '';
    this.datasetDes = '';
    this.formatDes = '';
    this.attrFlag = false;
    this.keys = new Array();
    this.keyName = '';
    this.keyType = 0;
    this.loaderClass = 'loader loader-default';

    this.currentPage.currentPage = 'dataset';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.keys);
    this.loaderClass = 'loader loader-default is-active';
  }

  addKey(){
    let type:string;
    if (this.keyType === 1){
      type = 'String';
    }else if (this.keyType === 2){
      type = 'Integer';
    }else if (this.keyType === 3){
      type = 'Double';
    }else if (this.keyType === 4){
      type = 'Char';
    }else{
      type = '';
    }
    this.keys.push({
      'key_name': this.keyName,
      'key_type': type,
      'key_limited': []
    });
    this.keyName = '';
    this.keyType = 0;
    console.log(this.keys);
    // this.keyModal.nativeElement;
  }
}