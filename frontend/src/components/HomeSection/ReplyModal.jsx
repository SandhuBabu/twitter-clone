import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik'
import { object, string, } from 'yup'


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
    border: 'none',
    outline: 'none',
    borderRadius: '15px'
};

const validationSchema = object({
    content: string().required("Tweet text required.")
})

function ReplyModal({handleClose, open}) {

    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false)
    const [selectedImg, setSelectedImg] = React.useState(null);
    
    const handleSubmit = values => {
        console.log("@values" + values);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema
    })

    

    const handleSelectImage = (e) => {
        setUploadingImage(true)
        const imgUrl = e.target.files[0]
        formik.setFieldValue("image", imgUrl)
        setSelectedImg(imgUrl)
        setUploadingImage(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar
                            onClick={() => navigate("/profile/user")}
                            src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg'
                            alt='username'
                            className='cursor-pointer'
                        />
                        <div onClick={() => navigate('/tweet/5')} className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className="flex cursor-pointer items-center space-x-2">
                                    <span className='font-semibold'>Neha Sharma</span>
                                    <span className='text-gray-600'>@nehsharma .2m</span>
                                    <img width='25px' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png" alt="verified account" />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div className='cursor-pointer'>
                                    <p>Green line issues in OnePlus Nord CE2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <section className='pb-10 mt-5'>
                            <div className='flex space-x-5'>
                                <Avatar src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg' alt='username' />
                                <div className='w-full'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div>
                                            <input
                                                type="text"
                                                name='content'
                                                placeholder="What's happening"
                                                className='border-none outline-transparent text-xl bg-transparent'
                                                {...formik.getFieldProps("content")}
                                            />
                                            {formik.errors.content && formik.touched.content && (<span className='text-red-500'>{formik.errors.content}</span>)}
                                        </div>

                                        <div className='flex justify-between items-center mt-5'>
                                            <div className='flex items-center space-x-5'>
                                                <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                    <ImageIcon className='text-[#1d9bf0]' />
                                                    <input type="file" name="imageFile" className='hidden' onChange={handleSelectImage} id="" />
                                                </label>
                                                <FmdGoodIcon className='text-[#1d9bf0]' />
                                                <TagFacesIcon className='text-[#1d9bf0]' />
                                            </div>
                                            <div>
                                                <Button
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: '20px',
                                                        paddingY: '8px',
                                                        paddingX: "20px"
                                                    }}
                                                    variant='contained'
                                                    type='submit'

                                                >Retweet</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                </Box>
            </Modal>
        </>
    );
}

export default ReplyModal