import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import {BsSearch} from 'react-icons/bs'

interface Image {
  id: number;
  photographer: string;
  src: {
    large: string;
    original: string;
  };
}

function Gallery() {
    const auth = '563492ad6f917000010000011b34d84b304940c1be9d2c23d74cf2e6';
    const [galleryImages, setGalleryImages] = useState<Image[]>([]);
    const[page, setPage]= useState<number>(1);
    
  
    useEffect(() => {
      fetchImages();

    },[page]);
  
    const fetchImages = async () => {
      const  url = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
      const response = await fetch(url,{
        headers:{
            Authorization:auth
        }
      }
        
        
        );
      const data = await response.json();
      setGalleryImages(data.photos);
      console.log(galleryImages);
        
    };

  return ( <div className="flex justify-center items-center flex-col mt-20"><SearchBar/>
  <div className='mt-20'>
  
   
   
  
    <div className="flex flex-wrap justify-center m-5 mx-20"> 
        
      {galleryImages.map((image) => (
        <div key={image.id} className="w-1/3 p-4">
          <img src={image.src.large} alt={image.photographer} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div className="text-center mt-2">
            <p className='text-sm'>{image.photographer}</p>
            <button className='m-5'>
              <a href={image.src.original} target="_blank" rel="noopener noreferrer" className='border-2 p-1 text-xs to-black'>
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

export default Gallery
