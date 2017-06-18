
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {PullRequest} from "../models/PullRequest";
import {PullRequestDetail} from "../models/PullRequestDetail";
import {InterceptorService} from "ng2-interceptors";

@Injectable()
export class PullRequestService {

    constructor(private http: InterceptorService,) {
    }

    public mergePullRequest(pullRequestId: number, tag: string) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.Urls['mergePullRequest']}`,
                `pullRequestId=${pullRequestId}&tag=${tag}`,
                {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('PullRequestService->mergePullRequest', err);
                        observer.next('-1');
                    })
        });
    }

    public rejectPullRequest(pullRequestId: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.Urls['rejectPullRequest']}`,
                `pullRequestId=${pullRequestId}`,
                {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('PullRequestService->rejectPullRequest', err);
                        observer.next('-1');
                    })
        });
    }

    public createPullRequest(pullRequest: PullRequest) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
          this.http.post(`${Constants.ServerHost}/pullrequest/newPullRequest`,
              `datasetId=${pullRequest.datasetId}&fileUrl=${pullRequest.fileUrl}&description=${pullRequest.pullDescription}&tableName=${pullRequest.tableName}`,
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

    public getPullRequestDetail(pullRequestId: number) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<any>) => {
            this.http.get(`${Constants.Urls['getPullRequestDetail']}?pullRequestId=${pullRequestId}`,
                {
                    headers: headers,
                    withCredentials: true
                })
                .map(res => {
                    let detail: PullRequestDetail = res.json().detail;
                    // let columns = detail.columns;
                    // let new_limits = [];
                    // for (let i = 0; i < detail.limits.length; i++) {
                    //     let temp = {};
                    //     for(let t in detail.limits[i]) {
                    //         if (detail.limits[i].hasOwnProperty(t)) {
                    //             temp[Constants.Restricts[columns[i].colType][parseInt(t)]] = detail.limits[i][t];
                    //         }
                    //     }
                    //     new_limits.push(temp);
                    // }
                    // detail.limits = new_limits;
                    return detail;
                })
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

