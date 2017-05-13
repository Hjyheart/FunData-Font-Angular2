import {Input, OnInit} from "@angular/core";
/**
 * Created by huang on 17-4-29.
 */


export class PageableBaseClass implements OnInit {
    public totalItems: number = 0;
    public currentPage: number = 0;
    @Input() id: number;
    public data: any[];
    constructor(private getDataFunc: Function,
                private dataName: string,
                private service: any,){
    }

    ngOnInit(): void {
        this.getDataFunc.bind(this.service)(0, this.id)
            .subscribe((res: any) => {
                this.data = res[this.dataName];
                this.totalItems = res.total;
            })
    }

    public setPage(curPage: number): void {
        this.currentPage = curPage;
    }

    public pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getDataFunc.bind(this.service)(event.page-1, this.id)
            .subscribe((res: any) => {
                this.data = res[this.dataName];
                this.currentPage = event.page;
            })
    }
}