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
            <div className='side_menu_container_wrapper first'>
                <div className='side_menu_container'>
                    <div className='side_menu'><ExploreIcon /></div>
                    <div className='side_menu'><StarIcon /></div>
                    <div>
                        <div className='side_menu'>
                            <div className='message'></div>
                            <MapsUgcIcon />
                        </div>
                    </div>
                    <div className='side_menu'><MovingIcon /></div>
                    <div className='side_menu'><PublicIcon /></div>
                    <div className='side_menu'><ApartmentIcon /></div>
                </div>
                <div className='side_menu_container second'>
                    <div className='side_menu02 side_02'>
                        <AddCircleIcon />
                    </div>
                    <div className='side_menu_user side_02'>
                        <img src="/assets/Avatar_1.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user side_02'>
                        <img src="/assets/Avatar_2.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user side_02'>
                        <img src="/assets/Avatar_3.png" alt="avatar" />
                    </div>
                    <div className='side_menu_user side_02'>
                        <img src="/assets/Avatar_4.png" alt="avatar" />
                    </div>
                </div>
            </div>
            {/* Shop Side_bar end */}
        </>
    )
}

export default Side_bar