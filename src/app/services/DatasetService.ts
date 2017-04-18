/**
 * Created by hongjiayong on 2017/4/17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpBaseService} from "./HttpBaseService";
import {DataSet} from "../models/DataSet";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class DatasetService extends HttpBaseService{

    constructor(private http: Http,) {
        super();
    }

    public createDataset(dataset: DataSet) {
      if (!this.headers.has('authorization')){
        this.headers.append('authorization', Cookie.get('authorization'));

      }
      return new Observable((observer: Observer<String>) => {
          JSON.stringify(dataset);
          this.http.post(`${Constants.ServerHost}/dataset/createDataset`,`ds_name=${dataset.name}&ds_desc=${dataset.ds_des}&format_desc=${dataset.format_des}&columns=${JSON.stringify(dataset.columns)}` , {headers: this.headers, withCredentials: true})
              .map(res => res.json())
              .subscribe((body) => {
                      observer.next(body.code)
                  },
                  err => {
                      console.log('DatasetService->createDataset', err);
                      observer.next('-1');
                  });
      })
    }

}

