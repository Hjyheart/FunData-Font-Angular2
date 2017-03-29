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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require("./app.routing.module");
var intro_module_1 = require("./introduction/intro.module");
var login_component_1 = require("./login/login.component");
var error_componnet_1 = require("./error/error.componnet");
var register_component_1 = require("./register/register.component");
var AuthorizeService_1 = require("./services/AuthorizeService");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_markdown_1 = require('angular2-markdown');
var AuthorizeGuard_1 = require("./services/AuthorizeGuard");
var test_component_1 = require("./test/test.component");
var dataset_module_1 = require("./dataset/dataset.module");
var mooc_module_1 = require("./mooc/mooc.module");
var com_module_1 = require("./competition/com.module");
var shop_module_1 = require("./shop/shop.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                intro_module_1.IntroModule,
                dataset_module_1.DatasetModule,
                angular2_markdown_1.MarkdownModule.forRoot(),
                mooc_module_1.MoocModule,
                com_module_1.ComModule,
                shop_module_1.ShopModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                error_componnet_1.ErrorComponent,
                test_component_1.TestComponent
            ],
            providers: [
                AuthorizeService_1.AuthorizeService,
                AuthorizeGuard_1.AuthorizeGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map