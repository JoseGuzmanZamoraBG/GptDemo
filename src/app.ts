import express from 'express';
import * as gptApi from './gptApi'

const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
    var conversation = await gptApi.chatWithGpt(req.body.conversation);
    res.status(200).send({conversation});
});

app.listen(port, () => {
  return console.log(`GPT Demo is listening at http://localhost:${port}`);
});