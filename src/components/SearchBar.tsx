import {BsSearch} from 'react-icons/bs'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import{toast} from 'react-toastify'

function SearchBar() {
  const notify = () => toast("Wow so easy !");

    const [search , setSearch] = useState<string|null>(''); 
     const navigate = useNavigate(); 
    const getSearched =(e:any)=>{
        e.preventDefault();
        if(search === ''){
          navigate('/')
          alert('enter something to search')
        }
        else{
          navigate('/Search/'+ search)
          }
    }


  return (
    <div className='text-center'>
   <a href='/'> <h1 className='text-center text-5xl mt-5'>Gallery.ts</h1></a>
    <div className="flex text-center ">
      <input
        type="text"
        className="bg-teal-300 mt-8 h-10 w-96 shadow-lg p-5 rounded-l-md outline-none " onChange={(e)=>{setSearch(e.target.value)}}/>
      <button className="bg-teal-400 flex justify-center items-center mt-8  h-10 w-10 shadow-lg p-1 rounded-r-md" onClick={getSearched}>
        <BsSearch className="h-6 w-6" />
      </button>
    </div>
    
    </div>

  )
}

export default SearchBar
