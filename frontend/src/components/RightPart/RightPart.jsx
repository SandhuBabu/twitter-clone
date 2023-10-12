import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { Button } from '@mui/material';

const RightPart = () => {

    const handleThemeChange = () => {

    }
    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />

                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchOutlinedIcon className='text-gray-500' />
                </div>
                <Brightness4OutlinedIcon
                    onClick={handleThemeChange}
                    className='ml-3 cursor-pointer'
                />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock features</h1>

                <Button
                    variant='contained'
                    sx={{
                        padding: '10px',
                        paddingX: '20px',
                        borderRadius: '25px'
                    }}
                >
                    Get Verified
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's Happeining</h1>
                <div>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet.
                        <span className='text-gray-500 ml-2'>32k likes</span>
                    </p>
                    <p className='font-semibold my-2'>
                        Lorem, ipsum dolor.
                        <span className='text-gray-500 ml-2'>21k likes</span>
                    </p>
                    <p className='font-semibold my-2'>
                        Lorem ipsum dolor, sit amet.
                        <span className='text-gray-500 ml-2'>12k likes</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default RightPart