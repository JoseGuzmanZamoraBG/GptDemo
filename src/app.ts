import express from 'express';
import * as gptApi from './gptApi'

const app = express();
const port = 3000;

app.post('/chat', async (req, res) => {
    var result = await gptApi.chatWithGpt(req.body.text);
    res.status(200).send({result});
});

app.listen(port, () => {
  return console.log(`GPT Demo is listening at http://localhost:${port}`);
});