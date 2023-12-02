import { NextRequest, NextResponse } from "next/server";
const { TextServiceClient } =  require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
export const POST = async (req:NextRequest)=>{
         const data = await req.json()
      try {
         const MODEL_NAME = "models/text-bison-001";
         const API_KEY = process.env.PaLM_API;
          
        const client = new TextServiceClient({
        authClient: new GoogleAuth().fromAPIKey(API_KEY),
        });

        const promptt = data
        const stopSequences:any= [];

       const result = await client
        .generateText({
         // required, which model to use to generate the result
           model: MODEL_NAME,
         // optional, 0.0 always uses the highest-probability result
           temperature: 0.6,
         // optional, how many candidate results to generate
           candidateCount: 1,
         // optional, number of most probable tokens to consider for generation
           topK: 40,
        // optional, for nucleus sampling decoding strategy
           topP: 0.95,
        // optional, maximum number of output tokens to generate
          //   maxOutputTokens: 1024,
        // optional, sequences at which to stop model generation
          stopSequences: stopSequences,
        // optional, safety settings
        safetySettings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_TOXICITY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_VIOLENCE","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_SEXUAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_MEDICAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_DANGEROUS","threshold":"BLOCK_MEDIUM_AND_ABOVE"}],
         prompt: {
         text: promptt,
         },
       })
        // console.log("result") 
        //  console.log(JSON.stringify(result[0].candidates[0].output, null, 1));
        
          return NextResponse.json({message:result[0].candidates[0].output},{status:200});
   
 
      } catch (error) {
        console.log(error)
        return NextResponse.json({result:error},{status:500})
      }
}
