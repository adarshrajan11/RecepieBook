import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = () => {
    return (
        <header className=' flex  h-16 bg-slate-800 text-white py-4 sticky justify-center'>
            <span className='text 2xl'>Recepie Box</span>
            <nav className='flex ml-auto gap-4 justify-center mr-20'>
                <Link to='/'> Home</Link>
                <a href='#'>About</a>
                <a href='#'> contact</a>
            </nav>
        </header>
    )
}

export default Navbar