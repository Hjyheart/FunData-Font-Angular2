import {Injectable} from "@angular/core";
import {InterceptedRequest, InterceptedResponse, Interceptor} from "ng2-interceptors";
import {Router} from "@angular/router";
/**
 * Created by huang on 17-6-15.
 */

@Injectable()
export class HttpInterceptor implements Interceptor {
    queue = 0;

    constructor(private router: Router) { }

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        request.options.headers.set('Content-Type','application/x-www-form-urlencoded');
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        switch (response.response.status) {
            case HttpStateCode.InternalServerError:
                alert('伺服器故障囉');
                break;
            case HttpStateCode.Unauthorized:
                this.router.navigate(['/login']);
                break;
        }
        return response;
    }
}

export enum HttpStateCode {
    MultipleChoices = 300,
    Redirect = 302,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    NotAcceptable = 406,
    RequestTimeout = 408,
    RequestUriTooLong = 414,
    UnsupportedMediaType = 415,
    RequestedRangeNotSatisfiable = 416,
    InternalServerError = 500,
    ServiceUnavailable = 503
};