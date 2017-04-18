/**
 * Created by huang on 17-3-9.
 */


import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Constants} from "../util/Constants";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Observable, Observer} from "rxjs/Rx";
import {CanActivate} from "@angular/router";
import {HttpBaseService} from "./HttpBaseService";

@Injectable()
export class AuthorizeService extends HttpBaseService implements CanActivate {

    canActivate() {
        return this.isLogin
    }

    get isLogin(): boolean {
        return Cookie.get('authorization') !== null;
    }

    constructor(private http: Http,) {
        super();
    }

    public login(email: String, pwd: String) {
        return new Observable((observer: Observer<String>) => {
            this.http.get(`${Constants.ServerHost}/authorize/login?email=${email}&pwd=${pwd}`, {headers: this.headers, withCredentials: true})
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

    public logout() {
        this.headers.append('authorization', Cookie.get('authorization'));
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.ServerHost}/authorize/logout`,'', {headers: this.headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                    if(body.code === '200') {
                        Cookie.delete('authorization');
                    }
                    observer.next(body.code);
                },
                err => {
                    console.log('AuthorizeService->logout', err);
                    observer.next('-1')
                });
        })

    }

    public register(email: String, name: String, pwd: String) {
        return new Observable((observer: Observer<String>) => {
            this.http.post(`${Constants.ServerHost}/authorize/register`, `email=${email}&name=${name}&pwd=${pwd}`, {headers: this.headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((body) => {
                        observer.next(body.code)
                    },
                    err => {
                        console.log('AuthorizeService->register', err);
                        observer.next('-1');
                    });
        })

    }
}
