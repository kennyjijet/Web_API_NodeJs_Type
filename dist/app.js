"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.express = express_1.default();
        this.routes();
    }
    routes() {
        this.express.use('/test', routes_1.default);
        this.express.use('/', (req, res) => {
            res.status(404).send({ error: `path doesn't exist` });
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map