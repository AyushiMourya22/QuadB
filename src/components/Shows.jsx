import React from 'react'

export const Shows = () => {
    const myBookings = JSON.parse(localStorage.getItem('myBookings'));
    console.log(myBookings)
    return (
        <div className='flex px-[2%] py-[1%] justify-center items-center'>{myBookings ? 
            <div>
                <h1 className='text-5xl text-center font-serif italic '>My Bookings</h1>
            <div className='flex   justify-start items-center'> 
                {myBookings.map((item) => (
                    <div className='flex mt-[2%] bg-indigo-50 border-2 border-indigo-950 m-[1%]'> 
                        <div className='flex justify-center items-center'>
                            <img src={item.image ? item.image.medium : "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"} alt="" />
                        </div>
                        <div className='flex px-[5%]  h-full  flex-col justify-center items-center'>
                            <div className='font-serif italic underline text-3xl p-[2%]'>{item.show}</div>
                            <div className='font-serif italic text-2xl p-[2%]'>{item.day}</div>
                            <div className='font-serif italic text-2xl p-[2%]'>{item.t1ime}</div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            : <div className='text-5xl text-center font-serif italic underline py-[10%]'> No Bookings Yet!! </div>
        }
        </div>
    )
}
