import express from 'express';
import QuestionRouter from './question';

const api = express.Router();
//api.use('/question', QuestionRouter;
api.use('/question', new QuestionRouter().questionAction());


export default api;