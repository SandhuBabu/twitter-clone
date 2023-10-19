import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import AuthModal from './AuthModal'

const Auth = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);


  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block h-screen bg-slate-600' item lg={7}>
          <img src="https://img.freepik.com/free-vector/social-media-icons_53876-89125.jpg?w=2000" className='w-full h-screen object-cover' alt="" />
          <div className='absolute top-[35%] left-[19%]'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </div>
        </Grid>

        <Grid item className='px-10' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} lg={5} xs={12}>
          <h1 className='font-bold text-6xl text-center mt-10'>Happening Now!</h1>
          <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>

          <div className='w-[60%]'>
            <div className='w-full'>
              <GoogleLogin style={{ width: '10em' }} />
              <p className='py-5 text-center'>OR</p>
              <Button
              onClick={handleOpenAuthModal}
                fullWidth
                variant='contained'
                size='large'
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}>Create Account</Button>

              <p className='text-sm mt-2'>
                By signing up, you agree to the terms of service and privacy policy, including cookie use.
              </p>
            </div>

            <div className='mt-10'>
              <h1 className='font-bold text-xl mb-5'>Already have account?</h1>
              <Button
                onClick={handleOpenAuthModal}
                fullWidth
                variant='outlined'
                size='large'
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}>login</Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  )
}

export default Auth