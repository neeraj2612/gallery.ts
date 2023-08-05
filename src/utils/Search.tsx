import React from 'react'
import{useState,useEffect} from'react'
import {useParams} from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import {BsSearch} from 'react-icons/bs'

interface Image {
    id: number;
    photographer: string;
    src: {
      large: string;
      original: string;
    };
  }
  
function Search() {
    const[searchImages,setSearchImages] = useState<Image[]>([])
    const[page,setPage]= useState<number>(1)
    const auth = '563492ad6f917000010000011b34d84b304940c1be9d2c23d74cf2e6';
    let params = useParams<{search:string}>();
    useEffect(()=>{
            if(params.search)
            {getSearchImages(params.search,page);}
        },[params.search,page])
    const getSearchImages = async (query:string ,page:number) => {
        const url = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=${page}`;
        ;
        const response = await fetch(url,{
          headers:{
              Authorization:auth
          }
        }
          );
        const data = await response.json();
        setSearchImages(data.photos);   

      };

  return (
    <div className="flex justify-center items-center flex-col mt-20">
  <SearchBar/>
    <div className='mt-20'>
    <div className="flex flex-wrap justify-center m-5 mx-20"> 
      {searchImages.map((image) => (
        <div key={image.id} className="w-1/3 p-4">
          <img src={image.src.large} alt={image.photographer} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div className="text-center mt-2">
            <p className='text-sm'>{image.photographer}</p>
            <button className='m-5'>
              <a href={image.src.original} target="_blank" rel="noopener noreferrer" className='border-2 p-1 text-xs bg-teal-400 rounded-l'>
                Download
              </a>
            </button>
          </div>
        </div>
      ))}
    </div></div><div className='flex justify-center items-center mb-5'>
      
      <button onClick={()=>{setPage(page+1)}} className="bg-teal-400 flex justify-center items-center mt-8  h-10 w-96 shadow-lg p-1 rounded-md text-lg font-semibold">
       Load More<BsSearch className="h-6 w-6 ml-2" />
      </button>
    </div></div>
  )
}

export default Search
