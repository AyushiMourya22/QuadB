import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { useResult } from './Context'

export const Home = () => {
    const {movie,setMovie,loading,getResult}=useResult()
    useEffect(()=>{
        getResult()
    },[])
  return (
    <div className='px-[8%] py-4 flex flex-col'>
        {!loading &&
        movie.map((item)=>{
            return(
                <Card key={item.show.id}  all={item} id={item.show.id} url={item.show.url} name={item.show.name} language={item.show.language} rating={item.show.rating.average} image={item.show.image} status={item.show.status} />   
                )
        })}
    </div>
  )
}
