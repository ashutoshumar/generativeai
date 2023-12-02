"use client"
import React , {useState} from  'react'
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation'
const Post = () => {
    const [desc,setDesc] = useState('')
    const notify = () => toast.error("Some Error Occured");
    const router = useRouter()
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
       
       const res = await fetch('api/blogpost/', {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(desc),
       })
      
      
      if(!res.ok)
      {
        console.log(res)
        notify()
        setDesc("")
        return
      }
      toast.success("You Posted Your Blog Successfully")
      router.push("/") 
        
      } catch (error) {
        console.log(error)
        notify()
        setDesc("")
        return
      }
    }
  return (
    <div className='[background:linear-gradient(180deg,_#222,_#131313)] w-full min-h-screen ' >
        <div className=' px-4 py-4  flex justify-center   h-screen w-full'>
        <form className='max-w-md my-10  md:w-full ' onSubmit={handleSubmit}>
           <textarea  value={desc} placeholder='Tell your story...
          
                        {      MARKDOWN SUPPORTED
                                        for Headings use
                                                 # Heading 1
                                                 ## Heading 2
                                                 ### Heading 3
                                                 for Text use
                                                 *italic*
                                                 **bold**
                                                 ***bold-italic***
                                                 [link](https://example.com)
                                                 for Images use
                                                ![m](https://i.imgur.com/v8IVDka.jpg)
                                                }'  
className='h-40  p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg '   onChange={e=>setDesc(e.target.value)}></textarea> 
           
        
        <button className='my-5 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2' type='submit'>Publish</button>
         </form>  

        </div>
        <Toaster/>
    </div>
  )
}

export default Post