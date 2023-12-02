import React from 'react'
import Link from "next/link";
import { ImHappy } from "react-icons/im";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaRegFaceSurprise } from "react-icons/fa6";
const HomeComponent = () => {
  return (
    <div >
        <div className=" px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col flex-wrap md:flex-row items-center justify-center md:justify-between">        
<Link href="/story"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
   Want to Listen a story?
</Link>
<Link href="/joke"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
   Mood off! Need a Joke
</Link>
<Link href="/poem"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
   How about Poem? 
   <div className="px-2">
   <ImHappy/>
   </div>
  
</Link>
</div>
<div className=" px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col flex-wrap md:flex-row items-center justify-center ">
<Link href="/post"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
   Create Your Post
   <div className="pl-2">
  <FaRegFaceSurprise/>
   </div>
   <div className="pr-1">
  <FaRegFaceSurprise/>
   </div>
</Link>

<Link href="/blog"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
   Talk to Me!!!
   <div className="pl-2">
   <BiSolidHappyHeartEyes/>
   </div>
   <div className="">
   <BiHappyHeartEyes/>
   </div>
   <div className="">
   <BiSolidHappyHeartEyes/>
   </div>
   <div className="pr-1">
   <BiHappyHeartEyes/>
   </div>
</Link>
</div>
    </div>
  )
}

export default HomeComponent