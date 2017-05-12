"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hongjiayong on 2017/4/30.
 */
var core_1 = require('@angular/core');
var PageableBaseClass_1 = require("../../../baseclasses/PageableBaseClass");
var PullRequestService_1 = require("../../../services/PullRequestService");
var PullComponent = (function (_super) {
    __extends(PullComponent, _super);
    function PullComponent(pullRequestService) {
        _super.call(this, pullRequestService.getAllPullRequests, 'pullrequests', pullRequestService);
        this.pullRequestService = pullRequestService;
    }
    Object.defineProperty(PullComponent.prototype, "pullRequests", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    PullComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.selectId = -1;
        this.tagValue = 0;
        this.newTag = '';
        this.newTagFlag = false;
    };
    // TODO: 选中某个 pull request
    PullComponent.prototype.chosePullRequest = function (id) {
        this.selectId = id;
    };
    // TODO: 拒绝这个数据集
    PullComponent.prototype.reject = function () {
    };
    // TODO: 同意合并这个数据集，需要提供一个tag
    PullComponent.prototype.agree = function (tag) {
    };
    PullComponent.prototype.showNewTag = function () {
        this.newTagFlag = true;
    };
    PullComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-info-dataset-pull',
            templateUrl: 'info.dataset.pull.component.html',
            styleUrls: ['../../../main.css', 'info.dataset.pull.component.css'],
            providers: [PullRequestService_1.PullRequestService]
        }), 
        __metadata('design:paramtypes', [PullRequestService_1.PullRequestService])
    ], PullComponent);
    return PullComponent;
}(PageableBaseClass_1.PageableBaseClass));
exports.PullComponent = PullComponent;
//# sourceMappingURL=info.dataset.pull.component.js.map