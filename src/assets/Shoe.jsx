import React from 'react'
import './Shoe.css'

const Shoe = () => {
  return (
    <main className='shoe'>
        <div className='shoedesc'>
            <h1>YOU FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='shoebttn'>
                <button> Shop Now</button>
                <button className='secondarybttn'> Category </button>
            </div>

            <div className='shoeinfo'>
                <p> Also available on</p>
                <div className='brandicons'>
                <img src='/images/flipkart.png' alt='flipcart_logo'/>
                <img src='/images/amazon.png' alt='amazon_logo'/>
                </div>
            </div>
        </div>


        <div className='shoeimg'>
            <img src='/images/shoe_image.png' alt='shoe_logo'/>

        </div>

    </main>
  )
}

export default Shoe