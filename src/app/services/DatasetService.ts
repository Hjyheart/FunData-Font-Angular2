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

@Injectable()
export class DatasetService {

    constructor(private http: Http,) {
    }

    public createDataset(dataset: Dataset) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
          JSON.stringify(dataset);
          this.http.post(`${Constants.ServerHost}/dataset/createDataset`,`ds_name=${dataset.name}&ds_desc=${dataset.dsDescription}&format_desc=${dataset.formatDescription}&columns=${JSON.stringify(dataset.columns)}` , {headers: headers, withCredentials: true})
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

    public getUserDataset(curPage: Number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.ServerHost}/dataset/getMyDataset?curPage=${curPage}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->createDataset', err);
                        observer.next('-1');
                    });
        });
    }

}

