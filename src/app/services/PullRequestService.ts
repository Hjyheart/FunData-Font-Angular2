
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Dataset} from "../models/Dataset";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {PullRequest} from "../models/PullRequest";

@Injectable()
export class PullRequestService {

    constructor(private http: Http,) {
    }

    private static convertUrl(res: any) {
        res = res.json();
        for (let dataset of res.datasets) {
            dataset.coverUrl = Constants.ServerHost+'/'+dataset.coverUrl;
        }
        return res;
    }

    public createPullRequest(pullRequest: PullRequest) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
          this.http.post(`${Constants.ServerHost}/pullrequest/newPullRequest`,`datasetId=${pullRequest.datasetId}&fileUrl=${pullRequest.fileUrl}&description=${pullRequest.pullDescription}`, {headers: headers, withCredentials: true})
              .map(res => res.json())
              .subscribe((body) => {
                      observer.next(body.code)
                  },
                  err => {
                      console.log('PullRequestService->createPullRequest', err);
                      observer.next('-1');
                  });
      });
    }

    public getUserPullRequests(curPage: Number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getMyDatasets']}?curPage=${curPage}`, {headers: headers, withCredentials: true})
                .map(res => PullRequestService.convertUrl(res))
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->getUserDatasets', err);
                        observer.next('-1');
                    });
        });
    }
    public getAllPullRequests(curPage: Number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getAllDatasets']}?curPage=${curPage}`, {headers: headers, withCredentials: true})
                .map(res => PullRequestService.convertUrl(res))
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('DatasetService->getAllDatasets', err);
                        observer.next('-1');
                    });
        });
    }
}

