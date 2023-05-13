import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='px-40 py-10  italic font-serif border-b-4 flex w-full justify-between'>

        <div className='text-4xl'>
            <NavLink to="/" className='flex space-x-4'>
                <div>
                    <BiMoviePlay />
                </div>
                <div>
                    TV Maze
                </div>
            </NavLink>
        </div>
        <div className=' py-[1%] rounded text-xl bg-indigo-500 w-1/10 text-white px-10'>
            <Link to='/shows'>My Shows</Link>
        </div>
        </div>
    )
}
