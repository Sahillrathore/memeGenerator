import React from 'react'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav
            className='px-8 py-4 bg-gray-900 text-zinc-300 shadow-md shadow-white/80 '
        >
            <div className='flex justify-between items-center'>
                <div className="logo text-2xl font-bold">
                    <h1>Sahil</h1>
                </div>

                <h1 className='text-3xl font-bold'>Meme Generator</h1>

                <div>
                    <a href="github.com/Sahillrathore" className='hover:underline'>
                        <FaGithub className='text-3xl' />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar