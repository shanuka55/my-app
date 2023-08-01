import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/banner-image-2.png";

function Home() {
  return (
    <div>
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section">
           <h1 className="primary-heading">
             Order the Best Foods From Foodie
          </h1>

          <p className="primary-text">
              We belive good food 
              offer great smile...
          </p>
        <button className="secondary-button">
          Order Now 
        </button>

        <div className="home-image-section">
           <img src={BannerImage} alt="" />
        </div>



      </div>
    </div>
  )
}

export default Home