/**
 * Created by huang on 17-4-18.
 */
"use strict";
var Column = (function () {
    function Column(name, type, limits) {
        this.colName = name;
        this.colType = type;
        this.limits = limits;
    }
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=Column.js.map