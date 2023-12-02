import React ,{FC} from 'react'
import ReactMarkdown from 'react-markdown';

interface IProps {
    story:string
  }
const Search:FC<IProps> = ({story}) => {
  return (
    <div className='flex w-full justify-center '> <div className=" my-2 mx-15  px-20 py-5 max-sm:mx-5 max-sm:my-0 max-sm:px-5 max-sm:py-5 text-white font-serif text-left  md:text-base  sm:text-base" 
    >
     
        <ReactMarkdown>{story}</ReactMarkdown>
       
    </div></div>
  )
}

export default Search