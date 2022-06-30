import React from 'react'
import mobile from '../assets/mobile.png'
import cart from '../assets/shopping-cart.png'

const Home = () => {
  return (
      <div className='main-wrapper'>
        <div className='cart'><img src={cart} alt=""/></div>
        <h1>home components</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src={mobile} alt=""/>
            </div>
            <div className='text-wrapper item'>
               <span>I-phone</span>
               <span>Price: $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
                <button>add to cart</button>
            </div>
        </div>        
      </div>
  )
}

export default Home