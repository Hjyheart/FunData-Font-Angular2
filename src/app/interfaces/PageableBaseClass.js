"use strict";
/**
 * Created by huang on 17-4-29.
 */
var PageableBaseClass = (function () {
    function PageableBaseClass(getDataFunc, dataName) {
        this.getDataFunc = getDataFunc;
        this.dataName = dataName;
        this.totalItems = 0;
        this.currentPage = 0;
    }
    PageableBaseClass.prototype.setPage = function (curPage) {
        this.currentPage = curPage;
    };
    PageableBaseClass.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataFunc(0)
            .subscribe(function (res) {
            _this.data = res[_this.dataName];
            _this.totalItems = res.total;
        });
    };
    PageableBaseClass.prototype.pageChanged = function (event) {
        var _this = this;
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getDataFunc(event.page - 1)
            .subscribe(function (res) {
            _this.data = res[_this.dataName];
            _this.currentPage = event.page;
        });
    };
    return PageableBaseClass;
}());
exports.PageableBaseClass = PageableBaseClass;
//# sourceMappingURL=PageableBaseClass.js.map