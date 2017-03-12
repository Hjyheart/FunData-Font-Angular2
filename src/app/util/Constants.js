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
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map