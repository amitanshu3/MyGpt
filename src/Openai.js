/*const {Configuration,OpenAiApi}=require('openai');
const configuration =new Configuration({apikey:"sK-oK1Lfc5Lp8d4J12TpQCnT3BlbkFJcYloBRPEKFUuLvl3ac"})
const openai=new OpenAiApi(configuration);
export async function senMsgtoOpenai(message){
    const  res=await openai.createCompletion({
      model:'text-davinci-003',
      prompt:message,
      temperature:0.7,
      max_tokens:256,
      top_p:1,
      frequency_penalty:0,
      presense_penalty:0
    })
    return res.data.choices[0].text;
}
*/
/*const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: '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' });

export async function sendMsgToOpenAI(message) {
    const res = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}*/
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: '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' , dangerouslyAllowBrowser: true});


export async function sendMsgToOpenAI(message) {
    
        const res = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        console.log('OpenAI Response:', res); // Log the entire response

       
            return res.choices[0].text;
        

}
