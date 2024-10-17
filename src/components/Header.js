import React from 'react'

const Header = () => {
    return (
        <header className="sticky top-0 bg-dark-blue text-white py-4 px-8 shadow-md z-50">
            <nav className="flex justify-between items-center">
                <img src="/logo.png" alt="logo" className="h-12 w-auto" />
                <h1 className="text-2xl font-bold hidden md:block">Presentation | OldMutual</h1>
                <ul className="flex space-x-6">

                    <li><a href="#section3" className="hover:text-gray-300">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header