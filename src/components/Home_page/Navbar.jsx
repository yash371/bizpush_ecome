import React from 'react'
import "../../styles/navbar.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
    return (
        <>
            {/* nav section start */}
            <div className='nav_container'>
                <div className='nav_inner_wrapper'>
                    <img src="/assets/logo_icon.png" alt="logo" />
                    <p>BIZPUSH</p>
                </div>
                <div className='nav_inner_wrapper'>
                    <Link to='/' className='link_tag'>Home</Link>
                    <Link to='#' className='link_tag'>Gallery</Link>
                    <Link to='/shop' className='link_tag'>Shop</Link>
                    <Link to='#' className='link_tag'>Contact</Link>
                </div>
                <div className='nav_inner_wrapper'>
                    <SearchIcon className='SearchIcon' fontSize={"medium"} />
                    <ShoppingCartOutlinedIcon className='ShoppingCartOutlinedIcon' style={{ color: "#4C4C4C" }} fontSize={"medium"} />
                    <div id='cart'>0</div>
                    <img src="/assets/avatar.png" alt="avatar" />
                </div>
            </div>
            {/* nav section end */}
        </>
    )
}

export default Navbar