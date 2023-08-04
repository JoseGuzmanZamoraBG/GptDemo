import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey : process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export const chatWithGpt = async(prompt : string) : Promise<string> => {
    if (!configuration.apiKey){
        throw new Error('API key not set.');
    }

    // Figure this out

    return '';
}