import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import { Blog } from "@/model/Blog";
export const POST = async (req:NextRequest)=>{
      try {
        const data = await req.json()
        console.log(data)
        await connectToDatabase();
         const res = await Blog.create({blog:data})
         if(res){
             console.log(res)
             return NextResponse.json({message:res},{status:200});
          }
          else{
            
             return NextResponse.json({result:"Some Error Occured"},{status:500})
          }
       
       
 
      } catch (error) {
        console.log(error)
        return NextResponse.json({result:error},{status:500})
      }
}

export const GET = async (req:NextRequest)=>{
  try {
    // const url = new URL(req.url);
    // let searchParams = new URLSearchParams(url.search);
    // let start = searchParams.get('start');
    // let limit = searchParams.get('limit');
    await connectToDatabase();
     const res = await Blog.find()
     if(res){
         console.log(res)
         return NextResponse.json({message:res},{status:200});
      }
      else{
        
         return NextResponse.json({result:"Some Error Occured"},{status:500})
      }
   
   

  } catch (error) {
    console.log(error)
    return NextResponse.json({result:error},{status:500})
  }
}
