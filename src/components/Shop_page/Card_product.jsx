import React from 'react'
import "../../styles/Card_product.css"
import { shop_product } from '../../constants/data'
import DoneIcon from '@mui/icons-material/Done';

function Card_product() {
    return (
        <>
            <section className='card_container'>
                {
                    shop_product.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='card_shop_wrapper'>
                                    {
                                        index === 0 ? <div className='selected'>
                                            <DoneIcon fontSize='small' style={{ color: "white" }} />
                                        </div>
                                            : <div className='select'>
                                            </div>
                                    }
                                    <div className='shop_card_container'>
                                        <div className="product_img">
                                        <img src={item.image} alt="product" />
                                        </div>
                                        <p>{item.title}</p>
                                        <button>${item.price}</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
            <div className='load_more'>
                <button >Load More</button>
            </div>

        </>
    )
}

export default Card_product