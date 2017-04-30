"use strict";
/**
 * Created by huang on 17-4-29.
 */
var PageableBaseClass = (function () {
    function PageableBaseClass(getDataFunc, dataName, service) {
        var _this = this;
        this.getDataFunc = getDataFunc;
        this.dataName = dataName;
        this.service = service;
        this.totalItems = 0;
        this.currentPage = 0;
        getDataFunc.bind(service)(0)
            .subscribe(function (res) {
            _this.data = res[_this.dataName];
            _this.totalItems = res.total;
        });
    }
    PageableBaseClass.prototype.setPage = function (curPage) {
        this.currentPage = curPage;
    };
    PageableBaseClass.prototype.pageChanged = function (event) {
        var _this = this;
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getDataFunc.bind(this.service)(event.page - 1)
            .subscribe(function (res) {
            _this.data = res[_this.dataName];
            _this.currentPage = event.page;
        });
    };
    return PageableBaseClass;
}());
exports.PageableBaseClass = PageableBaseClass;
//# sourceMappingURL=PageableBaseClass.js.map