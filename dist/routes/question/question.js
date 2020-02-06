"use strict";
/*export class Question {
    public questionAction(): void {
        var app = express.Router();
        app.get('/', (req: Request, res: Response) => {
            res.json({
                success: true,
                question: "Not ready"
            });
        });
    }
}*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send("This is the '/' route in ep_app");
});

module.exports = app;
*/
const express_1 = __importDefault(require("express"));
class Question {
    constructor() {
        this.app = express_1.default();
    }
}
exports.default = new Question().app;
//# sourceMappingURL=question.js.map