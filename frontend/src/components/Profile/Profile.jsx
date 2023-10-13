import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TweetCard from '../HomeSection/TweetCard'

const Profile = () => {

    const [value, setValue] = useState("1")
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleBack = () => {
        navigate(-1)
    }

    const handleOpenProfileModal = () => {

    }

    const handleFollowUser = () => {

    }

    return (
        <div>
            <section className='z-50 bg-white flex items-center sticky top-0 bg-opacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-95 ml-5'>Neha Sharma</h1>
            </section>

            <section>
                <img
                    src="https://2.bp.blogspot.com/-mIBnH7Yu8t8/T44dEX94J2I/AAAAAAAAEXE/Vzn-4Obtjis/s1600/Love+Facebook+Covers.png"
                    className='w-[100%] h-[15rem] object-cover rounded-md'
                    alt="image"
                />
            </section>

            <section>
                <div className='flex justify-between items-start mt-5 h-[15rem] px-6'>
                    <Avatar
                        src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg'
                        alt='image'
                        className='transform -translate-y-24'
                        sx={{
                            width: "10rem",
                            height: "10rem",
                            border: '4px solid #fff'
                        }}
                    />

                    {
                        true ?
                            <Button
                                className='rounded-full'
                                variant='contained'
                                sx={{ borderRadius: "20px" }}
                                onClick={handleOpenProfileModal}
                            >
                                Edit Profile
                            </Button>
                            :
                            <Button
                                className='rounded-full'
                                variant='contained'
                                sx={{ borderRadius: "20px" }}
                                onClick={handleFollowUser}
                            >
                                {true ? 'Follow' : 'Unfollow'}
                            </Button>
                    }

                </div>

                <div>
                    <div className='flex items-center -mt-40'>
                        <h1 className="font-bold text-lg">Neha Sharma</h1>
                        {
                            true &&
                            <img width='25px'
                                src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                                className='ml-2 w-5 h-5'
                                alt="verified account"
                            />
                        }
                    </div>
                    <h1 className='text-gray-500'>@nehasharma</h1>
                </div>

                <div className='mt-2 space-y-3'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum optio harum asperiores non amet? Dolore.</p>

                    <div className='py-1 flex space-x-5'>
                        <div className="flex items-center text-gray-500">
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <LocationOnIcon />
                            <p className='ml-2'>India</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Jun 2022</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="flex-items-center space-x-1 font-semiblod">
                            <span>590</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                        <div className="flex-items-center space-x-1 font-semiblod">
                            <span>120</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                    </div>
                </div>

            </section>

            <section className='mt-3'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,2,3,4,5].map((key) => <TweetCard key={key} />)}
                        </TabPanel>
                        <TabPanel value="2">Replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
        </div>
    )
}

export default Profile