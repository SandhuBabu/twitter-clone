import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigationMenu } from './NavMenu'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';

const Nav = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const auth = useSelector(store => store.auth)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
   
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg style={{ width: '3em' }} version="1.1" id="svg5" svg="http://www.w3.org/2000/svg"
                        x="0px" y="0px" viewBox="0 0 1668.56 1221.19">
                        <g id="layer1" transform="translate(52.390088,-25.058597)">
                            <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
                        </g>
                    </svg>
                </div>
                <div className='space-y-6'>
                    {
                        navigationMenu.map((item, key) => (
                            <div
                                className='cursor-pointer flex space-x-3 items-center'
                                key={key}
                                onClick={() => navigate(item.path)}
                            >
                                {item.icon}
                                <p className='text-xl'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='py-7'>
                    <Button sx={{
                        width: "100%",
                        borderRadius: '29px',
                        py: '15px',
                        // bgcolor: '#02daff'
                    }}
                        variant='contained'
                    >Tweet</Button>
                </div>
            </div>
            <div className='flex items-center pb-3 gap-5'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt='username' src='https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg' />
                </div>
                <div>
                    <p>{auth?.user?.fullName}</p>
                    <span className='opacity-70'>@{auth?.user?.fullName.toLowerCase().replace(' ', '_')}</span>
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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>
        </div>
    )
}

export default Nav