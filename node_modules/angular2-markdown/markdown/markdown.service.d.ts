import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class MarkdownService {
    private http;
    private renderer;
    constructor(http: Http);
    getContent(path: string): Observable<any>;
    extractData(res: Response): string;
    handleError(error: Response | any): any;
    extendRenderer(): void;
    setMarkedOptions(): void;
    compile(data: string): string;
}
