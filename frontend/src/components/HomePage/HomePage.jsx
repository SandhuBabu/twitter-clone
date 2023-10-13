import { Grid } from '@mui/material'
import React from 'react'
import Nav from '../Navigation/Nav'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'
import Tweet from '../TweetDetails/Tweet'

const HomePage = () => {
    return (
        <Grid container item xs={12} className='px-5 lg:px-36 justify-between'>

            <Grid item xs={0} lg={2.5} className='hidden lg:block relative'>
                <Nav />
            </Grid>

            <Grid item xs={12} lg={6} className='hidden lg:block relative'>

                <Routes>
                    <Route path='/' element={<HomeSection />} />
                    <Route path='/home' element={<HomeSection />} />
                    <Route path='/profile/' element={<Profile />} />
                    <Route path='/tweet/:id' element={<Tweet />} />
                </Routes>
            </Grid>

            <Grid item xs={0} lg={3} className='hidden lg:block relative'>
                <RightPart />
            </Grid>

        </Grid>
    )
}

export default HomePage