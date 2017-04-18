/**
 * Created by hongjiayong on 2017/3/22.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";

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

  constructor(
    private currentPageService: CurrentPageService
  ){}

  ngOnInit(): void {
    this.hrWidth = '0px';

    this.currentPageService.currentPage = 'dataset';
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