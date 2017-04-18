/**
 * Created by huang on 17-4-18.
 */
"use strict";
var http_1 = require("@angular/http");
var HttpBaseService = (function () {
    function HttpBaseService() {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    return HttpBaseService;
}());
exports.HttpBaseService = HttpBaseService;
//# sourceMappingURL=HttpBaseService.js.map