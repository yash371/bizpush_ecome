import React from 'react'
import "../../styles/product.css"
import { product } from "../../constants/data"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function Product() {
    return (
        <>
            {/* Product Start */}
            <div className='product_header'>
                <h2>POPULAR PRODUCT</h2>
            </div>
            <div className='product_wrapper'>
                <div className='product_container'>
                    {
                        product.map((item, index) => {
                            return (<>
                                <div className='main_card'>
                                    <div className='card'>
                                        <div className='like'>
                                            <FavoriteBorderIcon style={{ color: "white" }} fontSize='small' />
                                        </div>
                                        <div className='image_wrapper'>
                                            <img src={item.image} alt="product" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='rating_wrapper'>
                                            <StarIcon style={{ color: "#A61473" }} fontSize='small' />
                                            <p id='review01'>{`(${item.reviews} Reviews)`}</p>
                                        </div>
                                        <div id='title'>
                                            <p>{item.title}</p>
                                        </div>
                                        <div className='price'>
                                            <p>${item.price.discount}</p>
                                            <div id='discount'>
                                                <p>{item.price.mrp}<span>-Sold Out</span></p>
                                            </div>
                                            <button id='buynow'>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
            {/* Product Start */}
        </>
    )
}

export default Product