import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';


const Tweet = () => {

    const navigate = useNavigate();
    const handleBack = () => navigate(-1)

    return (
        <>
            <section className='z-50 bg-white flex items-center sticky top-0 bg-opacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-95 ml-5'>Tweet</h1>
            </section>

            <section>
                <TweetCard />
                <Divider sx={{marginY: "2em"}} />
            </section>

            <section>
                {
                    [1,2,3,4].map(k => <TweetCard key={k} />)
                }
            </section>
        </>
    )
}

export default Tweet