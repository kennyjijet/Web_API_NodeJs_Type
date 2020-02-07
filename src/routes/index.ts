import express from 'express';
import QuestionRouter from './question';

const api = express.Router();
api.use('/question', new QuestionRouter().questionApi());


export default api;