import mongoose from 'mongoose';

interface IQuestion {
	question: string;
	answer: string;
}

const QuestionSchema = new mongoose.Schema({
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

const QuestionModel = mongoose.model('Question', QuestionSchema);

export { QuestionModel , IQuestion }



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