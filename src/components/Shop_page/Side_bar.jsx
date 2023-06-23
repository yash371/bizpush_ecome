import React from 'react'
import "../../styles/side_bar.css"
import ExploreIcon from '@mui/icons-material/Explore';
import StarIcon from '@mui/icons-material/Star';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import MovingIcon from '@mui/icons-material/Moving';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Side_bar() {
    return (
        <>
            {/* Shop Side_bar start */}
            <div className='side_menu_container_wrapper'>
                <div className='side_menu_container'>
                    <div className='side_menu'><ExploreIcon /></div>
                    <div className='side_menu'><StarIcon /></div>
                    <div className='notification_container'>
                        <div className='red'></div>
                        <div className='bell'>
                            <MapsUgcIcon />
                        </div>
                    </div>
                    <div className='side_menu'><MovingIcon /></div>
                    <div className='side_menu'><PublicIcon /></div>
                    <div className='side_menu'><ApartmentIcon /></div>
                </div>
                <div>
                    <div className='side_menu'>
                        <AddCircleIcon />
                    </div>
                    <div className='side_menu_user'>
                        <img src="/assets/Avatar_1.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user'>
                        <img src="/assets/Avatar_2.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user'>
                        <img src="/assets/Avatar_3.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user'>
                        <img src="/assets/Avatar_4.png" alt="avatar" />
                    </div>
                </div>
            </div>
            {/* Shop Side_bar end */}
        </>
    )
}

export default Side_bar