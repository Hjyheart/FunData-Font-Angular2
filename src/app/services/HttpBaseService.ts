/**
 * Created by huang on 17-4-18.
 */

import {Headers} from "@angular/http";
export class HttpBaseService {
    protected headers:Headers = new Headers();
    constructor() {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

}