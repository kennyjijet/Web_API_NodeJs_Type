"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    constructor() {
        this._registeredMethodEnding = 'Action';
        this.router = express_1.Router();
    }
    getRoutes() {
        return this.router;
    }
}
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=baseroute.js.map