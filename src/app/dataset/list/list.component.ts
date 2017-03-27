/**
 * Created by hongjiayong on 2017/3/22.
 */
import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dataset-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css', '../../main.css']
})

export class DatasetListComponent implements OnInit{

  private hrWidth: string;

  // 每页10个
  public totalItems: number = 100;
  public currentPage: number = 1;

  ngOnInit(): void {
    this.hrWidth = '0px';
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  @HostListener('window:scroll') transition(){
    if (scrollY > 400){
      this.hrWidth = '200px';
    }
  }
}