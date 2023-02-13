import React, { useState,useEffect }from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // useEffect( ()=>{
    //     getGifs(category)
    //     .then( setImages)
    // },[])



    // getGifs()
    //     .then( (imgs)=> setImages(imgs)

    // )   

    return (
//         <>
//             <h3> {category} </h3>
//             <div className='card-grid'>
//                 <ol>


//                 {images.map(img => <li> {img.title}</li>)}
//                 </ol>
//                 {/* {
//                     images.map((img) =>
//                         <div className='card' key={img.id}>
//                             <img src={img.url} alt={img.title} />
//                         </div>
//                     )
//                 } */}
                
//             </div>
//         </>
        <>
        <h3> {category} </h3>
        { loading && 'Cargando...' }
        <div className='card-grid'>
                            {
                images.map((img) =>
                    <GifGridItem
                                key={img.id}
                                {...img}/>
                )
            }
            
        </div>
        </>

  )
}
