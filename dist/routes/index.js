"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_1 = __importDefault(require("./question"));
const api = express_1.default.Router();
//api.use('/question', QuestionRouter;
api.use('/question', new question_1.default().questionAction());
exports.default = api;
//# sourceMappingURL=index.js.map