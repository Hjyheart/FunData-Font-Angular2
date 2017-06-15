/**
 * Created by hongjiayong on 2017/4/17.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Dataset} from "../models/Dataset";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {InterceptorService} from "ng2-interceptors";

@Injectable()
export class DatasetService {

    constructor(private http: InterceptorService,) {
    }

    // private static convertUrl(res: any) {
    //     res = res.json();
    //     for (let dataset of res.datasets) {
    //         dataset.coverUrl = Constants.ServerHost+'/'+dataset.coverUrl;
    //     }
    //     return res;
    // }

    public addExpressions(datasetId: number, expressions: string[], foreign_keys: string[]) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.ServerHost}/dataset/addExpressions`,
                `datasetId=${datasetId}&expressions=${JSON.stringify(expressions)}&foreigns=${JSON.stringify(foreign_keys)}`,
                {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('DatasetService->addExpressions', err);
                        observer.next('-1');
                    });
        });
    }

    public enterTerminal(userId: number, datasetId: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.ServerHost2}/terminal`,
                `datasetId=${datasetId}&user_id=${userId}`,
                {headers: headers}
                )
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.url)
                    },
                    err => {
                        console.log('DatasetService->enterTerminal', err);
                        observer.next('-1');
                    });
        });
    }


    public createDataset(dataset: Dataset) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
          JSON.stringify(dataset);
          this.http.post(`${Constants.ServerHost}/dataset/createDataset`,
                         `ds_name=${dataset.name}&ds_desc=${dataset.dsDescription}&format_desc=${dataset.formatDescription}&cover_url=${dataset.coverUrl}&tables=${JSON.stringify(dataset.tables)}`,
                         {headers: headers, withCredentials: true})
              .map(res => res.json())
              .subscribe((body) => {
                      observer.next(body.code)
                  },
                  err => {
                      console.log('DatasetService->createDataset', err);
                      observer.next('-1');
                  });
      });
    }

    public getUserDatasets(curPage: Number, params: string) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getMyDatasets']}?curPage=${curPage}`, {headers: headers, withCredentials: true})
                // .map(res => DatasetService.convertUrl(res))
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->getUserDatasets', err);
                        observer.next('-1');
                    });
        });
    }
    public getAllDatasets(curPage: Number, params: string) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getAllDatasets']}?curPage=${curPage}`, {headers: headers, withCredentials: true})
                // .map(res => DatasetService.convertUrl(res))
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->getAllDatasets', err);
                        observer.next('-1');
                    });
        });
    }

    public getDatasetDetail(id: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getDatasetDetail']}?datasetId=${id}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->getDatasetDetail', err);
                        observer.next('-1');
                    });
        });
    }

}

