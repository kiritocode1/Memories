import { Configuration, OpenAIApi } from "openai";





const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// keyy is needed to verify its us , config checks if the key is valid or not , if not it will throw an error ,


const openai = new OpenAIApi(configuration);
// openai is the api , we are using it to create a completion ,


export default async function gg(req, res) {


  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }
  

  const Request = req.body.request || "";


  if (Request.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid responce , thank you ",
      },
    });
    return;
  }

  try {

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(Request),
      temperature: 0.9,
      max_tokens:3000, 
    }); 
    // 200 -> ok
    // 300 -> server error 
    // 400 -> bad request by user [eg 404]
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(Result) {


  return `pretend you are a therapist , and users are trying to seek help , 
    i want you to comfort them , they are suffering from a mental illness , identify their problem , and  give them solutions so they can counter the problems , be kind and loving  , the past conversations are (read them carefully and analyse the problems , please try to have context of the conversation)
    and the 
    current convo is ${Result}, i want you to talk through all the problems , 
    in a meaningful human way , and give them solutions so they can counter the problems , be kind and loving,
    
    give a pep talk  , in a more human way , your goal is to comfort the user , 
    make it personal to you , tell them you care about them like a real person , give me a solution in 10-20 words  , not more and be more   kind   and understanding ,, 
    the response should be in a human way , not a robot way , like a chat bot , for  eg " hey , i see this is your case ... " or "okay , listen im here , i didnt know you were suffering from ... " , 

    be like a sage and do give words of comfort and  words of wisdom at the end 

    also give me a medical solution , if applicable and safe to consume . 

    based on the history and convo , i want you to tell me the problems i have or might possibly develop explicitly spell it out , eg " i think you might have ADHD " , 

    dont just suggest  to go to a therapist , i want you to give me a solution ,
    i cant really talk with another person about this`;
}
