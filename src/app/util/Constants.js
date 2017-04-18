/**
 * Created by huang on 17-3-9.
 */
"use strict";
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ServerHost", {
        get: function () { return 'http://localhost:8080'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "Restricts", {
        //public static get ServerHost(): string { return 'http://192.168.1.18:3000';};
        get: function () {
            return {
                'Integer': ['平均值', '方差'],
                'String': ['最大值', '最小值'] };
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map