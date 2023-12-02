import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest)=>{
      try {
        const options = {
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/jokes?limit=' + 20,
            headers: {
                'X-Api-Key': process.env.Joke_API
            }
          };
         const response  = await axios.request(options)
        //  console.log(response.data[0].joke)
         let result = []
        
         for (let i = 0; i < response.data.length; i++) {
            result[i] = response.data[i].joke;
            
         }
         return NextResponse.json({message:result},{status:200});
   
 
      } catch (error) {
        console.log(error)
        return NextResponse.json({result:error},{status:500})
      }
}
