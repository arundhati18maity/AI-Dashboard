import * as React from 'react';
import { Search } from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserImage from '/images/user.jpeg'
import { Divider, Menu, MenuItem } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="fixed top-0 left-64 right-0 z-10 transition-all duration-300 backdrop-blur-2xl">
            <div className="flex h-[70px] items-center justify-between px-6 py-8">
                <div className="hidden md:block w-full max-w-md relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />

                    <input
                        type="text"
                        placeholder="Search models, conversations, or documentation..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-black placeholder:text-black outline-none border border-black"
                    />
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="notifications-wrap">
                        <button>
                            <NotificationsIcon />
                        </button>
                    </div>
                    <div className="account-dropdown w-8 h-8">
                        <button className="w-8 h-8 rounded-full" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <img className="rounded-full w-full h-full object-cover" src={UserImage} alt="" />
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <div className="flex items-center gap-3 px-4 py-3">
                                <img src={UserImage} className='w-10 h-10 rounded-full object-cover' alt="" />
                                <div>
                                    <p className='text-[16px] font-medium'>Jenifa William</p>
                                    <p className='text-xs'>jenifa@gmail.com</p>
                                </div>
                            </div>
                            <Divider />
                            <MenuItem className='flex items-center gap-2.5 py-2' onClick={handleClose}><CreditCardIcon fontSize='small' />Billing</MenuItem>
                            <MenuItem className='flex items-center gap-2.5 py-2' onClick={handleClose}><SettingsIcon fontSize='small' />Settings</MenuItem>
                            <Divider />
                            <MenuItem className='flex items-center gap-2.5 py-2' onClick={handleClose}><LogoutIcon fontSize='small' />Logout</MenuItem>
                        </Menu>
                    </div>
                </div>

            </div>
        </header>
    )
}
