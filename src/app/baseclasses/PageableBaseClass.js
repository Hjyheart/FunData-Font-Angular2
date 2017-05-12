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
        getDataFunc.bind(service)(0, this.param)
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
        this.getDataFunc.bind(this.service)(event.page - 1, this.param)
            .subscribe(function (res) {
            _this.data = res[_this.dataName];
            _this.currentPage = event.page;
        });
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', Number)
    ], PageableBaseClass.prototype, "param", void 0);
    PageableBaseClass = __decorate([
        core_1.Component, 
        __metadata('design:paramtypes', [Function, String, Object])
    ], PageableBaseClass);
    return PageableBaseClass;
}());
exports.PageableBaseClass = PageableBaseClass;
//# sourceMappingURL=PageableBaseClass.js.map