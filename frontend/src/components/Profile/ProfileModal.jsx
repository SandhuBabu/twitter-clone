import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik'
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    border: 'none',
    borderRadius: '15px'
};

function ProfileModal({open, handleClose}) {
    const [uploading, setUploading] = React.useState(false)

    const handleSubmit = (values) => {
        console.warn(values);
        handleClose()
     }

    const handleBgImageChange = (e) => {
        setUploading(true);
        const { name } = e.target
        const file = e.target.files[0]
        formik.setFieldValue(name, file)
    }
    
    const handleImageChange = (e) => {
        setUploading(true);
        const { name } = e.target
        const file = e.target.files[0]
        formik.setFieldValue(name, file)
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex items-center justify-between">
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon  aria-label='delete' />
                                </IconButton>
                                <p className='text-sm'>Edit Profile</p>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>

                        <div className='hide-scroll-bar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className="w-full">
                                    <div className="relative">
                                        <img
                                            src="https://2.bp.blogspot.com/-mIBnH7Yu8t8/T44dEX94J2I/AAAAAAAAEXE/Vzn-4Obtjis/s1600/Love+Facebook+Covers.png"
                                            className='w-[100%] h-[12rem] object-cover rounded-md'
                                            alt="image"
                                        />
                                        <input
                                            type="file"
                                            name='backgroundImage'
                                            onChange={handleBgImageChange}
                                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                        />
                                    </div>
                                </div>

                                <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                                    <div className="relative">
                                        <Avatar
                                            src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg'
                                            sx={{
                                                width: '10rem',
                                                height: '10rem',
                                                border: '4px solid #fff'
                                            }}
                                        />
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                        />
                                    </div>    
                                </div>
                            </React.Fragment>

                            <div className='space-y-3 mt-4'>

                                <TextField
                                    fullWidth
                                    id='fullname'
                                    name='fullName'
                                    label='Full Name'
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />

                                <TextField
                                    fullWidth
                                    id='bio'
                                    name='bio'
                                    multiline
                                    rows={4}
                                    label='Bio'
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />

                                <TextField
                                    fullWidth
                                    id='website'
                                    name='website'
                                    label='Website'
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />

                                <div className='my-3'>
                                    <p className='text-lg'>Birth date . Edit</p>
                                    <p className='text-2xl'>October 26, 1999</p>
                                </div>
                                <p className="py-3 text-lg">Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default ProfileModal;