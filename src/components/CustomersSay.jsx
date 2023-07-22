import React from 'react'

const CustomersSay = () => {
  return (
    <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <br/>
        <p className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src={"/man.jpg"} alt="reviewer image"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>The gtreek salad is the best!</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={"/woman.jpg"} alt="reviewer image"/>
                <div className="name-rating">
                    <p className="reviewer-name">Jane Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>I love their bruschetta</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={"/kid.jpg"} alt="reviewer image" height={"170px"}/>
                <div className="name-rating">
                    <p className="reviewer-name">Baby Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>I like fries !</p>
                </div>
            </div>
        </p>
      </div>
  )
}

export default CustomersSay