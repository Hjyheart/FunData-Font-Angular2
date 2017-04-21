/**
 * Created by hongjiayong on 2017/3/22.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {Dataset} from "../../models/Dataset";
import {DatasetService} from "../../services/DatasetService";
import {totalmem} from "os";

@Component({
  moduleId: module.id,
  selector: 'dataset-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css', '../../main.css']
})

export class DatasetListComponent implements OnInit{

  private hrWidth: string;

  // 每页10个
  public totalItems: number = 0;
  public currentPage: number = 0;
  public datasets: Dataset[] = null;
  constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService
  ){}

  ngOnInit(): void {
    this.hrWidth = '0px';
    this.currentPageService.currentPage = 'dataset';
    this.datasetService.getUserDataset(0)
        .subscribe((res: any) => {
          this.datasets = res.datasets;
          this.totalItems = res.total;
        })
  }

  public setPage(curPage: number): void {
    this.currentPage = curPage;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.datasetService.getUserDataset(event.page-1)
        .subscribe((res: any) => {
          this.datasets = res.datasets;
          this.currentPage = event.page;
        })
  }

  @HostListener('window:scroll') transition(){
    if (scrollY > 400){
      this.hrWidth = '200px';
    }
  }
}