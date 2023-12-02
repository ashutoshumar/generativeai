"use client"
import React ,{FC,useState,useEffect} from 'react'
interface IProps {
    blog:string
  }
  import ReactMarkdown from 'react-markdown';
  import { FcSpeaker } from "react-icons/fc";
const BlogComponenet:FC<IProps> = ({blog}) => {
  const [speak,setSpeak] = useState(false)
  const handleSoundClick = ()=>{
    if(!speak)
    {
      const utterance = new SpeechSynthesisUtterance(blog);
      speechSynthesis.speak(utterance);
      setSpeak(true)
    }
    else{
      speechSynthesis.cancel()
      setSpeak(false)
    }
    
  }
  useEffect(() => {
   
    const cancle = ()=>{
      speechSynthesis.cancel()
    }
    window.addEventListener('beforeunload', cancle);
    
    
    
  }, [])
  return (
    <div className='flex  justify-center py-20'>
        <div className=" [background:black] max-w-md  ">
          <div className="  mx-10 px-10 pt-10 flex w-full justify-end ">
      <button onClick={()=>{handleSoundClick()}}  className="mx-5 max-sm:px-4  ">
        <FcSpeaker/>
      </button>
      </div>
      <div className="my-4 mx-15  px-20 py-5 pb-10 max-sm:mx-5 max-sm:my-0 max-sm:px-5 max-sm:py-5 text-white font-serif text-left flex flex-col justify-center md:text-base  sm:text-base" 
      >
       
          <ReactMarkdown>{blog}</ReactMarkdown>
         </div>
         </div>
      
    </div>
  )
}

export default BlogComponenet