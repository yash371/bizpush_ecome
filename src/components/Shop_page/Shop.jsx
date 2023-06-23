import React from 'react'
import Navbar from './Navbar'
import '../../styles/shop.css'
import Side_bar from './Side_bar'
import Product from './Product'
import Analysis from './Analysis'


function Shop() {
    return (
        <>
            <div className='shop_container'>
                <Navbar />
                <div className='grid-container'>
                    <Side_bar />
                    <Product />
                    <Analysis />
                </div>
            </div>
        </>
    )
}

export default Shop