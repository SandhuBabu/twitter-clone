import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignInForm from './SignInForm';
import SignupForm from './SignupForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  outline: 'none'
};

export default function AuthModal({ open, handleClose }) {

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = location.pathname==="/signin"? "signup": "signin";
    navigate(path, {replace: true})
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-center font-bolf text-3xl pb-20'>
            Create Your Account
          </h1>
          {
            location.pathname === "/signup" ?
              <SignupForm />
              :
              <SignInForm />
          }

          <h1 className='text-center py-5 font-semibold text-lg text-gray-500'>
            {
              location.pathname === "/signup" ?
                "Already have an account"
                :
                "Don't have an account"
            }
          </h1>

          <Button
            variant='outlined'
            fullWidth
            onClick={handleNavigate}
            sx={{
              borderRadius: '25px',
              py: '5px'
            }}
          >
            {location.pathname==="/signup"?"signin":"signup"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
