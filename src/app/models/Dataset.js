"use strict";
/**
 * Created by huang on 17-4-18.
 */
var Dataset = (function () {
    function Dataset() {
    }
    Object.defineProperty(Dataset.prototype, "coverUrl", {
        get: function () {
            // console.log(Constants.ServerHost);
            // return `${Constants.ServerHost}/${this._coverUrl}`;
            return '...';
        },
        set: function (value) {
            this._coverUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    return Dataset;
}());
exports.Dataset = Dataset;
//# sourceMappingURL=Dataset.js.map