import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey : process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export const chatWithGpt = async(prompt : any) : Promise<string> => {
    if (!configuration.apiKey){
        throw new Error('API key not set.');
    }

    // Figure this out
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: prompt,
        temperature : 1.5
    });
    prompt.push(chatCompletion.data.choices[0].message);

    return prompt;
}