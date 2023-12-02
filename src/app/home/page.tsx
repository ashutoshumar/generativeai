"use client"
import type { NextPage } from "next";
import {useState,useEffect} from "react"
import { FcSpeaker } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa";
import Search from "@/component/Search";
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import HomeComponent from "@/component/HomeComponent";
const Home: NextPage = () => {
  const [value,setValue] = useState('')
  const [search,setSearch]=useState(false)
  const [story,setStory] = useState('')
  const [loading,setLoading] = useState(false)
  const [speak,setSpeak] = useState(false)
  const notify = () => toast.error("Some Error Occured");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setValue(e.target.value);
 };
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
 const handleEnterKey = async(e: React.KeyboardEvent<HTMLDivElement>) => {
   if (e.key === 'Enter') {
    try {
      setSearch(true)
     setLoading(true)
     speechSynthesis.cancel()
     const res = await fetch('api/palmapi/', {
      method: 'POST',
      headers: {
          
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
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
      setLoading(false)
      setValue('')     
      setStory(data.message)
      
    } catch (error) {
      console.log(error)
      notify()
      setStory("Some Error Occured")
      setLoading(false)
      return
    }
     
      
    
   }
 };
 useEffect(() => {
  
  const cancle = ()=>{
    speechSynthesis.cancel()
  }
  window.addEventListener('beforeunload', cancle);
 

  
  
}, [])
  return (
   
    <div className="[background:linear-gradient(180deg,_#222,_#131313)] w-full min-h-screen ">
    {
      !search?( 
      <div className="mx-auto px-4 py-4  flex flex-col flex-wrap  items-center justify-center  h-screen" >
          <div className="max-w-md relative flex items-center md:w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mb-4">
          <div className="grid place-items-center h-full w-12 text-gray-300">
           <IoSearch/>
          </div>
          <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          placeholder="Search something.." /> 
          </div>
          <HomeComponent/>
         
       </div>):(
        <div>
          <div className="py-10 flex flex-row  justify-between " >
          <button onClick={()=>{setSearch(false)}}   className="mx-20 max-sm:mx-5 ">
          <FaArrowLeft/>
         </button>        
           <div className="max-w-md relative flex items-center md:w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mb-4">
           <div className="grid place-items-center h-full w-12 text-gray-300">
            <IoSearch/>
           </div>
          <input
           className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
           type="text"
           value={value}
           onChange={handleInputChange}
           onKeyDown={handleEnterKey}
           placeholder="Search something.." /> 
           </div>       
        <button onClick={()=>handleSoundClick()} className="mx-20 max-sm:mx-6 ">
          <FcSpeaker/>
        </button>    
        </div>
        {
          loading?(<div className="[background:linear-gradient(180deg,_#222,_#131313)] w-full relative"> <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
        </div></div>):(<Search story={story} />)
        }
        
        </div>
       )
    }
       
       <Toaster/>
      </div>
      
    
  );
};

export default Home;