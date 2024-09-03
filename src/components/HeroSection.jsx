import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='h-44 w-full bg-slate-800 flex justify-center items-center'>
            <Link
                className='px-4 py-2 bg-indigo-600'
                to='meme-viewer'
            >View Memes
            </Link>
            <Link
                className='px-4 py-2 bg-indigo-600 ml-4'
                to='create-meme'
            >Create Memes
            </Link>
        </div>
    )
}

export default HeroSection