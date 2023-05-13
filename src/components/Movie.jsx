import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const Movie = (props) => {
  const location = useLocation()
  const propsData = location.state
  console.log(propsData)

  const [book, setbook] = useState(false)

  const myBookings = JSON.parse(localStorage.getItem('myBookings'));
  
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const booking = {
      show: propsData.show.name,
      day: propsData.show.schedule.days,
      time: propsData.show.schedule.time,
      image:propsData.show.image
    }
    let newBookings;
    if (myBookings) {
      newBookings = [...myBookings, booking]
    }
    else {
      newBookings = [booking]
    }

    const json = JSON.stringify(newBookings);
    localStorage.setItem('myBookings', json);

    alert("Booking Done")
    navigate('/shows')
  }


  return (
    <div className=' py-[1%]'>

      <div className='bg-indigo-50 p-[2%] flex mx-[10%] my-[2%] font-serif italic'>
        <div className='w-1/2'>
          <div>
            <img src={propsData.show.image ? propsData.show.image.medium : "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"} className='w-[70%]' alt="" />
          </div>
        </div>
        <div className='w-1/2 flex flex-col justify-between'>
          <div className='text-5xl text-center underline' >
            {propsData.show.name}
          </div>
          <div className='text-xl pt-[5%]' dangerouslySetInnerHTML={{ __html: propsData.show.summary }}>
          </div>
          <div className='text-xl   flex flex-col justify-center item-center'>
            <div className='font-bold mt-[3%]'>
              Genre: {propsData.show.genres.map((item) => (
                (<span className='space-x-2'>{item} </span>)
              ))}
            </div>
            <div className='mt-[3%] font-bold'>
              Language: {propsData.show.language}
            </div>
            <div className='mt-[3%]'>
              Type: {propsData.show.type}
            </div>
            <div className='mt-[3%]'>
              Premiere Date: {propsData.show.premiered}
            </div>
            <div className='mb-[3%]'>
              End Date: {propsData.show.end ? propsData.show.end : propsData.show.premiered}
            </div>
            <div className='font-bold'>
              Status: {propsData.show.status}
            </div>
            <div className='mt-[3%]'>
              Rating: {propsData.show.rating.average ? propsData.show.rating.average : 8}
            </div>
            <div className='mt-[3%]'>
              URL: <a href={propsData.show.url} target='_blank' rel="noreferrer" className='text-indigo-500'>  {propsData.show.url} </a>
            </div>
            <div className='flex items-center flex-col'>
              <button className='py-[2%] mt-[3%] rounded text-xl bg-indigo-500 w-1/2 text-white px-10' onClick={() => setbook(!book)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      {book &&
      <div className='flex justify-center items-center'>

        <div className='flex flex-col font-serif italic justify-center items-center w-1/2  p-[3%] m-[4%] bg-indigo-50 '>
          <div className='text-center text-4xl'>Available Slots</div>
          <div className='text-2xl mt-[2%]'> Timings: {propsData.show.schedule.time}</div>
          <div className='text-2xl mt-[2%]'> Days: {propsData.show.schedule.days}</div>
          <button className='py-[1%] mt-[2%] rounded text-xl bg-indigo-500 w-1/10 text-white px-10' onClick={handleSubmit}>Done</button>
        </div>
      </div>
      }
    </div>
  )
}
