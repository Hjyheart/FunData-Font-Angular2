/**
 * Created by hongjiayong on 2017/3/10.
 */
import { Component, OnInit } from '@angular/core';
// import { SweetAlertService } from 'ng-sweetalert2-slc';

@Component({
  moduleId: module.id,
  selector: 'my-test',
  templateUrl: 'test.component.html'
  // providers: [SweetAlertService]
})

export class TestComponent {
  // constructor(private _swal2: SweetAlertService){
  //   this._swal2.success({ title: 'This is a alert' });
  // }
  public textData = `## Markdown content data`;
}