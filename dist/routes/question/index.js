"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const question = express.Router();
//question.use('/question', new Question());
//const question = new Question();
var app = express_1.default();
app.get('/', function (req, res) {
    res.json({
        test: "test"
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map