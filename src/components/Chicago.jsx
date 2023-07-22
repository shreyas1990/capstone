import React from 'react'
import CustomersSay from './CustomersSay'

const Chicago = () => {
  return (
    <>
    <div className="restaurant-desc-parent">
            <div className="restaurant-desc">
                <p className="title desc-title">Little Lemon</p>
                <p className="subtitle desc-subtitle">Chicago</p>
                <p className="desc-text desc">We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist</p>
            </div>
            <img className="desc-img" src={"/restaurant.png"} alt="restaurant image"/>
    </div>
    <div>
        <CustomersSay />
    </div>
    </>
  )
}

export default Chicago