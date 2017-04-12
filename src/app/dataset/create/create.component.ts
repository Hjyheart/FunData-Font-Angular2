/**
 * Created by hongjiayong on 2017/4/12.
 */
import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {NgForm} from "@angular/forms";

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

  ngOnInit(): void {
    this.datasetName = '';
    this.datasetDes = '';
    this.formatDes = '';
    this.attrFlag = false;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}