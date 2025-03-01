import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
    onSearch: (query: string) => void; // Callback function to handle search
};

const Navbar = ({ onSearch }: NavbarProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query); // Pass the search query to the parent component
    };

    return (
        <header className='flex h-16 bg-slate-800 text-white py-4 sticky justify-center items-center'>
            {/* Title */}
            <span className='text-2xl'>Recepie Box</span>

            {/* Search Bar */}
            <div className='flex mx-8 justify-center w-full'>
                <input
                    type='text'
                    placeholder='Search recipes...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='px-4 py-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2'
                />
            </div>

            {/* Navigation Links */}
            <nav className='flex ml-auto gap-4 justify-center mr-20'>
                <Link to='/'>Home</Link>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;