import React from 'react'
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReplyModal from './ReplyModal';

const TweetCard = ({twit}) => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openRetweet, setOpenRetweet] = React.useState(false);

    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose();
    }

    const handleOpenReply = () => {setOpenRetweet(true)}
    const handleCloseReply = () => {setOpenRetweet(false)}

    const handleRetweet = () => { }

    const handleLike = () => {}

    return (
        <div className=''>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatOnIcon />
                <p>You Retweet</p>
            </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate("/profile/user")}
                    src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg'
                    alt='username'
                    className='cursor-pointer'
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className='font-semibold'>Neha Sharma</span>
                            <span className='text-gray-600'>@nehsharma .2m</span>
                            <img width='25px' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png" alt="verified account" />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />

                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                <MenuItem onClick={handleDelete}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div  onClick={() => navigate('/tweet/5')} className='cursor-pointer'>
                            <p>Green line issues in OnePlus Nord CE2</p>
                            <img
                                className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                src="https://techibee.in/wp-content/uploads/2023/03/oneplus-11r-pink-line-problem.jpg"
                                alt=""
                            />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center w-[28em]'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReply} />
                                <p>43</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"}`}>
                                <RepeatOnIcon
                                    onClick={handleRetweet}
                                    className='cursor-pointer'
                                />
                                <p>54</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"}`}>
                                {
                                    true ?
                                        <FavoriteIcon
                                            onClick={handleRetweet}
                                            className='cursor-pointer'
                                        /> 
                                        :
                                        <FavoriteBorderOutlinedIcon
                                            onClick={handleLike}
                                            className='cursor-pointer'
                                        />
                                }
                                <p>54</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon
                                    className='cursor-pointer'
                                    onClick={handleOpenReply}
                                 />
                                 <p>232</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon
                                    className='cursor-pointer'
                                    onClick={handleOpenReply}
                                 />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section>
                <ReplyModal open={openRetweet} handleClose={handleCloseReply} />
            </section>
        </div>
    )
}

export default TweetCard