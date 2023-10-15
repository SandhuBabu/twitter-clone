import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border: 'none',
  borderRadius: '10px',
  outline: 'none'
};

function SubsciptionModal({open, handleClose}) {
  const [plan, setPlan] = React.useState("Annually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex items-center space-x-3'>
            <IconButton onClick={handleClose}>
              <CloseIcon aria-label='delete' />
            </IconButton>
            <p className='text-sm'>Edit Profile</p>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 bg-blue-50 rounded-md flex items-center justify-between shadow-lg">
                <h1 className='text-xl'>
                  Blue subscribers with a verified phone number
                  will get a blue checkmark once approved.
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                  alt=""
                  className='w-24 h-24'
                />
              </div>

              <div className='border-gray-700 flex justify-between border rounded-full px-5 py-3'>
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${plan === 'Annually' ? "text-black" : "text-gray-400"} cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className='text-green-400'> Save 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${plan === 'Monthly' ? "text-black" : "text-gray-400"} cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              <div className='space-y-3'>
                {
                  [1, 2, 3, 4].map(k => (
                    <div key={k} className="flex items-center space-x-5">
                      <FiberManualRecordIcon sx={{
                        width: '7px',
                        height: '7px'
                      }} />
                      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>
                  ))
                }
              </div>

              <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                <span className='line-through italic'>₹ 6, 800.00/year</span>
                <span className='px-5'>₹ 7, 800.00/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SubsciptionModal