import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <div className='intro'>
                <h1> Welcome! <br></br>
                Find your Merch </h1>
                {/* <h1>Find your Merch</h1> */}
                <p> 
                    We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
                </p>
            </div>
            <div className='media'>
                <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="hero" className="hero-img"/>

            </div>



        </div>
    </div>
  )
}

export default Hero