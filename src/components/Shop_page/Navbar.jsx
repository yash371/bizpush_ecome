import React from 'react'
import '../../styles/navbar2.css'
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CancelIcon from '@mui/icons-material/Cancel';

function Navbar() {
    return (
        <>
            {/* Shop navbar start */}
            <div className='row'>
                <div id='menu'>
                    <div className='menu'>
                        <MenuIcon />
                    </div>
                    <p>Constructor</p>
                </div>
                <div className='menu_item'>
                    <p><b>Dashboard</b></p>
                    <p><b>About Us</b></p>
                    <p><b>News</b></p>
                    <p><b>User Policy</b></p>
                    <p><b>Contacts</b></p>
                    <b><MoreHorizIcon /></b>
                </div>
                <div className='search_container'>
                    <SearchIcon style={{ margin: "0 0 0 20" }} />
                    <input type="search" placeholder='Search Transactions and Documents' />
                </div>
                <div className='profile_container'>
                    <AccountCircleIcon className='AccountCircleIcon' style={{ color: "#C3CAD9", marginRight: "10px" }} />
                    <p>Clayton Santos</p>
                    <div className='notification_container'>
                        <div className='red'></div>
                        <div className='bell'>
                            <NotificationsIcon />
                        </div>
                    </div>
                    <div className='cancle_container'>
                        <CancelIcon />
                    </div>
                </div>
            </div>
            {/* Shop navbar end */}
        </>
    )
}

export default Navbar