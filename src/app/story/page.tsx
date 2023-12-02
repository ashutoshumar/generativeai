"use client"
import {useState,useEffect} from "react"
import type { NextPage } from "next";
import ReactMarkdown from 'react-markdown';
import { FcSpeaker } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
const Story: NextPage = () => {
  
  const [story,setStory]=useState('')
  const [loading,setLoading] =  useState(true)
  const [speak,setSpeak] = useState(false)
  const notify = () => toast.error("Some Error Occured");
  const prompt = "You are a world-famous novel author and Hugo Award winner , every time you write new novel/story belonging to differents genres with unique title different from previous one. You are specialize in writing  long, descriptive sentences and brainteaser plots.  Write a captivating and imaginative novel with using proper markdown , at least 5000 words long . Be sure to include vivid descriptions, character development, and unexpected twists to keep the reader hooked from start to finish and have a proper ending of novel";
  const apiRequest = async()=>{
    try {
      const res = await fetch('api/palmapi/', {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt)
        , cache: 'no-store' 
       })
      
      
      if(!res.ok)
      {
        console.log(res)
        notify()
        setStory("Some Error Occured")
        setLoading(false)
        return
      }
  
      const data = await res.json();
      setStory(data.message)
    } catch (error) {
      console.log(error)
      notify()
      setStory("Some Error Occured")
      setLoading(false)
      return
    }
    
    
  }
  const handleClick=async ()=>{
    setLoading(true)
    speechSynthesis.cancel()
    await apiRequest()   
    setLoading(false)
  }
  const handleSoundClick = ()=>{
    if(!speak)
    {
      const utterance = new SpeechSynthesisUtterance(story);
      speechSynthesis.speak(utterance);
      setSpeak(true)
    }
    else{
      speechSynthesis.cancel()
      setSpeak(false)
    }
    
  }
  useEffect(() => {
    const getData = async () => {
      await apiRequest()
      setLoading(false)
    };
    const cancle = ()=>{
      speechSynthesis.cancel()
    }
    window.addEventListener('beforeunload', cancle);
    getData();

    
    
  }, [])
  
    
  return (
    <div>
    {
      loading?(<div className="[background:linear-gradient(180deg,_#222,_#131313)] w-full min-h-screen"> <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
    </div></div>):( <>
      <div  
        className=" [background:linear-gradient(180deg,_#222,_#131313)] w-full min-h-screen   ">
          <div className=" mt-18 mx-15 px-10 pt-10 flex w-full justify-end ">
      <button  onClick={()=>{handleSoundClick()}}  className="  mx-20 max-sm:mx-4 max-sm:mb-5 ">
        <FcSpeaker/>
      </button>
      </div>
      <div className="my-2 mx-15  px-20 py-5 max-sm:mx-5 max-sm:my-0 max-sm:px-5 max-sm:py-5 text-white font-serif text-left flex flex-col justify-center md:text-base  sm:text-base" 
      >
       
          <ReactMarkdown>{story}</ReactMarkdown>
         
      </div>
      <div className="  flex w-full justify-end max-sm:justify-center">
      <button  onClick={()=>{handleClick()}}  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50  mb-10 mx-20 max-sm:mx-4 max-sm:mb-5 ">
         Want another Story?
      </button>
      </div>
      
    </div>
      
      </>)
    }

    
      <Toaster/>
    </div>
  );
};

export default Story;