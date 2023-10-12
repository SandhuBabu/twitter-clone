import React, { useState } from 'react'
import { object, string, } from 'yup'
import { useFormik } from 'formik'
import { Avatar, Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';


const validationSchema = object({
    content: string().required("Tweet text required.")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false)
    const [selectedImg, setSelectedImg] = useState(null);

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
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>

            <section className='pb-10 '>
                <div className='flex space-x-5'>
                    <Avatar src='	https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg' alt='username' />
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

                            {/* <div>
                                <img src="" alt="" />
                            </div> */}

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

                                    >Tweet</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                {[1,2,3,4].map(() =><TweetCard />)}
            </section>
        </div>
    )
}

export default HomeSection