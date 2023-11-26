import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './SkilPerrsion.module.css'
import ChartPersion from '../ChartPersion'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
};



const SkilPerrsion = () => {
  return (
    <div className={style.skiller}>
        <div className={style.text}>
          <h2>
            Top Weekend
            <spna className={style.spanger}>Kratos</spna>
          </h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className={style.shop}>
          <h2>
            Price: 30$
          </h2>
          <a href="" className={style.shop__link}>
            <div className={style.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 2H3.74      001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#393939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#393939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#393939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 8H21" stroke="#393939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            Add to cart
          </a>
        </div>
       <div className={style.avatar}>
        <img src="https://s3-alpha-sig.figma.com/img/23cf/9ee1/aeda7dabf5896ea7f5c2272bf74a6adb?Expires=1701648000&Signature=fwLZ0dcCduGeFLp5Bm5U2yyYeUsH5UXtke1CWfupI8zZ2XaVyS5Duc4GfvzC4nOxbficpcd3Bju3CH8rNH0Bz09gkgFAiygDiNlZozJNOgpkgW2vfB1db5s3GOdXl~FOjpYTtTGq6iik02e1DxEMH21STsWOLJaxFhVVlm84Pm41xvXrMIe-3vtBr2EgzCpqPAJ0Fb3De~LFQ262uGHxgrHhrtim-C81NHLjdl8QDEJl1gmg0iNHgfTFAy~tQWpK4YQ~fERLqb5IEtS7KvOQIZNCISah-Cn7fZQxJJ-QbxWOn1OwTWeeebeNNbcfju8h~363FIJhwqDJXgkRb2UWRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
       </div>
       <div className={style.corusel}>
        <Slider {...settings}>
            <ChartPersion/>
            <ChartPersion/>
            <ChartPersion/>
        </Slider>
       </div>
    </div>
  )
}

export default SkilPerrsion