/**
 * Created by hongjiayong on 2017/4/17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpBaseService} from "./HttpBaseService";
import {DataSet} from "../entities/DataSet";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DatasetService extends HttpBaseService{

    constructor(private http: Http,) {
        super();
    }

    public createDataset(dataset: DataSet) {
        return new Observable((observer: Observer<String>) => {
            JSON.stringify(dataset);
            this.http.post(`${Constants.ServerHost}/dataset/createDataset`, {headers: this.headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('AuthorizeService->login', err);
                        observer.next('-1');
                    });
        })
    }

}

