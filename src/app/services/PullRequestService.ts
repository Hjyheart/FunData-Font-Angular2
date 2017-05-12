
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

    public createPullRequest(pullRequest: PullRequest) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
          this.http.post(`${Constants.ServerHost}/pullrequest/newPullRequest`,
              `datasetId=${pullRequest.datasetId}&fileUrl=${pullRequest.fileUrl}&description=${pullRequest.pullDescription}`,
              {headers: headers, withCredentials: true})
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

    public getUserPullRequests(curPage: Number, datasetId: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getAllPullRequests']}?datasetId=${datasetId}&curPage=${curPage}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('PullRequestService->getUserDatasets', err);
                        observer.next('-1');
                    });
        });
    }
    public getAllPullRequests(curPage: Number, datasetId: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.Urls['getAllPullRequests']}?datasetId=${datasetId}&curPage=${curPage}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body)
                    },
                    err => {
                        console.log('PullRequestService->getAllPullRequests', err);
                        observer.next('-1');
                    });
        });
    }
}

