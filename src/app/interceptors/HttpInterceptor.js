"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/**
 * Created by huang on 17-6-15.
 */
var HttpInterceptor = (function () {
    function HttpInterceptor(router) {
        this.router = router;
        this.queue = 0;
    }
    HttpInterceptor.prototype.interceptBefore = function (request) {
        request.options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return request;
    };
    HttpInterceptor.prototype.interceptAfter = function (response) {
        switch (response.response.status) {
            case HttpStateCode.InternalServerError:
                alert('伺服器故障囉');
                break;
            case HttpStateCode.Unauthorized:
                this.router.navigate(['/login']);
                break;
        }
        return response;
    };
    HttpInterceptor = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HttpInterceptor);
    return HttpInterceptor;
}());
exports.HttpInterceptor = HttpInterceptor;
(function (HttpStateCode) {
    HttpStateCode[HttpStateCode["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStateCode[HttpStateCode["Redirect"] = 302] = "Redirect";
    HttpStateCode[HttpStateCode["BadRequest"] = 400] = "BadRequest";
    HttpStateCode[HttpStateCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStateCode[HttpStateCode["Forbidden"] = 403] = "Forbidden";
    HttpStateCode[HttpStateCode["NotFound"] = 404] = "NotFound";
    HttpStateCode[HttpStateCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStateCode[HttpStateCode["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStateCode[HttpStateCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    HttpStateCode[HttpStateCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStateCode[HttpStateCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    HttpStateCode[HttpStateCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStateCode[HttpStateCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
})(exports.HttpStateCode || (exports.HttpStateCode = {}));
var HttpStateCode = exports.HttpStateCode;
;
//# sourceMappingURL=HttpInterceptor.js.map