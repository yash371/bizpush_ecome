import React from 'react'
import "../../styles/header.css"
import { Link } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';

function Header() {
    return (
        <>
            {/* header start */}
            <div className='header_container'>
                <div className='inner_header_container'>
                    <h1>PURCHASE YOUR</h1>
                    <h1><span id='heading'>SHOES</span> NOW.</h1>
                    <p className='dommy_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit</p>
                    <p className='dommy_text'> turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
                    {/* <button id='shop_now_btn'>Shop Now</button> */}

                    <div className='mainbox'>
                        <div className="box">
                            <Link to='/shop'><button id='shop_now_btn'>Shop Now</button></Link>
                        </div>
                        <div className="box">
                            <img className='arrow' src="/assets/mask_group.png" alt="" />
                        </div>
                        <div className="box">
                            <div className='review'>
                                <p style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                    <span id='number_rating'>4.3</span>
                                    <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                    <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                    <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                    <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                    <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                </p>
                                <span id='review'>(11.6K Total Review)</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='mainbox02'>
                        <div className="box02">
                            <img src="/assets/Home_screen.png" alt="" />
                        </div>
                        <div className="box02">
                            <div className='offer'>
                                <p id='msg01'>GET UP TO 30% OFF</p>
                                <p id='msg02'>You can get 30% off this product if you are buying now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
        </>
    )
}

export default Header