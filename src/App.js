import React, { useEffect, useState } from 'react'

export default function App() {
const [images, setimages] = useState([])

  useEffect(()=>{
    
    async function  fetchData(){
    let url = 'https://jsonplaceholder.typicode.com/photos';
    try {
      let res = await fetch(url);
      let data = await res.json()
      console.log(data);
      setimages(data)
    } catch (err) {
      console.log('Error');
  
  }
    }
    fetchData()
    
  },[])

  return (
    <div>
{images.map((image)=>{
  const{url,id}=image
  return(
    <>
    <img src={url} alt="log" />
    <p>id={id}</p>
    </>
  )
})}

    </div>
  )
}


