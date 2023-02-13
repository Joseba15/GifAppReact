import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// import PropTypes from 'prop-types'



function GifApp() {
  
  // const categorias = ['Honda','Kawasaki','Yamaha'];
  
  


  const [categorias, setCategorias] = useState(['Honda','Kawasaki','Yamaha']);

  // const javibu=()=>{
  //   // categories.push('Suzuki');
  //   console.log(categorias)
    
  //   setCategorias(['Suzuki', ...categorias ])
  // }

  // const borrarPriElemt=()=>{
  //   console.log(categorias)
  
  //   categorias.splice(0,1);
  //   setCategorias([ ...categorias ])
  // }

  // const borrarUltElemt=()=>{
    
  //   console.log(categorias)
  //   categorias.pop();


  //   setCategorias([ ...categorias ])
  // }  


  return (
    <>
      <h2>GifApp</h2>
      <hr />
      <AddCategory setCategorias={setCategorias}/>
      
          {
              categorias.map((category) =>
                <GifGrid
                  key={category}
                  category={category} />
              
              )
          }
      
    
    </>     
  )
}


export default GifApp
