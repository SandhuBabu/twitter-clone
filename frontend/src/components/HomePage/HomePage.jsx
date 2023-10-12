import { Grid } from '@mui/material'
import React from 'react'
import Nav from '../Navigation/Nav'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

const HomePage = () => {
    return (
        <Grid container item xs={12} className='px-5 lg:px-36 justify-between'>

            <Grid item xs={0} lg={2.5} className='hidden lg:block relative'>
                <Nav />
            </Grid>
            
            <Grid item xs={12} lg={6} className='hidden lg:block relative'>
                <HomeSection />
            </Grid>
            
            <Grid item xs={0} lg={3} className='hidden lg:block relative'>
                <RightPart />
            </Grid>

        </Grid>
    )
}

export default HomePage