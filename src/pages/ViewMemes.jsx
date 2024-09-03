import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewMemes = () => {

    const [memeData, setMemeData] = useState();
    const [memeCategory, setMemeCategory] = useState('funny');
    const [activeCat, setActiveCat] = useState('');

    useEffect(() => {
        getMeme();
        // console.log(memeCategory);
        
    }, [memeCategory])

    const getMeme = async () => {
        axios.get(`https://meme-api.com/gimme/${memeCategory}`)
            .then(res => setMemeData(res.data))
    }
    const handleCatBtn = (cat) => {
        setActiveCat(cat)
        setMemeCategory(cat)        
    }

    return (

        <div
            className='bg-gray-800 px-10 flex py-10 text-center justify-center gap-8'
        >
            <div className='flex absolute top-[4.4rem] py-5 px-2 gap-3 left-0 bg-black h-[40rem] flex-col'>
                <h4 className='text-gray-300'>Meme Categories</h4>
                {
                    ['all', 'funny', 'wholesomememes', 'dank', 'dark', 'dog'].map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-1.5 border ${cat === activeCat && 'bg-yellow-600'} border-indigo-600 uppercase rounded text-white`}
                            onClick={()=>{handleCatBtn(cat)}}
                        >
                            {cat}
                        </button>
                    ))
                }
            </div>

            <div>
                <button
                    className='px-4 py-1.5 my-4 bg-slate-400 border active:bg-slate-600 text-white'
                    onClick={getMeme}
                >Generate New</button>

                <div className="meme-card w-[35rem] bg-gray-950 border shadow">
                    <h3 className='text-gray-300 font-bold text-lg text-cente p-2'>{memeData?.title}</h3>
                    <img src={memeData?.url} alt="" className='w-full h-[30rem]' />
                </div>
            </div>

        </div>

    )
}

export default ViewMemes