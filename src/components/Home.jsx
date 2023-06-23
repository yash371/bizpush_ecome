import React from 'react'
import '../styles/home.css'
import Header from './Header';
import Navbar from './Navbar';
import Product from './Product';


function Home() {
    return (
        <>
            <div className='container'>
                <Navbar />
                <Header />
                <Product />
            </div>
        </>
    )
}

export default Home