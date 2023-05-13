import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const Result=createContext()

export const ResultContext=({children})=>{
    const [movie,setMovie]=useState([])
    const [loading,setLoading]=useState(false)
    const getResult=  ()=>{
        setLoading(true)
        try{
             axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((response)=>{
                console.log(response.data)
                setMovie(response.data)
                setLoading(false)
            })
        }catch(error){
            console.log(error)
        }
    }
    return (
        <Result.Provider value={{loading,movie,setMovie,getResult}}>{children}</Result.Provider>
    )
    
}

export const useResult=()=>{
    return (
        useContext(Result)
    )
}