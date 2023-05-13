import React, { useEffect } from 'react'
import {MdLanguage} from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

    
export const Card = (props) => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <div className='flex font-serif bg-indigo-50 my-[1%] rounded border-2 border-indigo-950' data-aos="fade-up" >
      <div className="mb-[2%] row w-3/4 h-full italic  p-[3%] flex flex-col justify-center ">
        <div className='pb-[2%]'>
          <div className='text-4xl font-serif '>{props.name}</div>
          <div className='text-indigo-700'>
            <a href={props.url} rel="noreferrer" target='_blank'>{props.url}</a></div>
        </div>
        <div className='flex items-center font-bold py-[2%] space-x-10'>
          <div className='font-bold flex space-x-2'>
            <div>
              <MdLanguage size={'20px'}/> 
              </div>
              <div>

              {props.language}</div  >
              </div>
          <div > Ratings: {props.rating ? props.rating: 8}</div  >
          <div> Status: {props.status}</div  >
        </div>
        <div>
          <button className='py-[2%] rounded text-xl bg-indigo-500 w-1/4 text-white px-10'>
            <Link to={`/${props.id}`} className='flex space-x-4' state={props.all}>
            <div>

            View More
            </div>
            <div>
             <BsArrowRight size={'25px'}/>

            </div>
            </Link>
          </button>
        </div>
      </div>
      <div className="row  flex items-center">
        <img className=' object-cover' src={props.image ? props.image.medium: "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"} alt="" />

      </div>

    </div>
  )
}
