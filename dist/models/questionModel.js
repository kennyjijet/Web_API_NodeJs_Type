"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuestionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});
const QuestionModel = mongoose_1.default.model('Question', QuestionSchema);
exports.QuestionModel = QuestionModel;
/*

import {Schema, Model, Document, model} from 'mongoose';

export interface IQuestion extends Document {
    name: string;
    email: string;
    password: string;
}

export interface IQuestionModel {
    createUser(user: IQuestion, callback: Function): void
}

const queSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});

queSchema.static('createQuestion', (question : IQuestion, callback: Function) => {
   
});

export type QuestionModel = Model<IQuestion> & IQuestionModel & IQuestion;

export const Question: QuestionModel = <QuestionModel>model<IQuestion>("Question", queSchema);
*/ 
//# sourceMappingURL=questionModel.js.map