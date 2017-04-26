import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observer} from "rxjs/Observer";
import {Constants} from "../util/Constants";
import {Observable} from "rxjs/Observable";
/**
 * Created by huang on 17-4-25.
 */

@Injectable()
export class DatasetService {
    constructor(private http: Http,) {
    }

    public changeName(name: string) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable((observer: Observer<string>) => {
            this.http.post(`${Constants.ServerHost}/dataer/editinfo`,`name=${name}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('AuthorizeService->register', err);
                        observer.next('-1');
                    });
        });
    }
}