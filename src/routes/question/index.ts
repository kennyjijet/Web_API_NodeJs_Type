import express from 'express';
//const question = express.Router();
//question.use('/question', new Question());
//const question = new Question();

var app = express();
app.get('/', function (req, res) {
  res.json(
    {
      test:"test"

    }
  );
});

export default app;