import React from 'react';
import healthy from '../img/healthyMeal.png';
import meal from '../img/mealPlan.jpg';
import veg from '../img/onlyVegs.png';
import '../Component/Carousel.css'


export default function Carousel(props) {
  return (
    <div className='carous'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={veg} className="d-block w-100" alt="..." height='450vh' />
            <div className="carousel-caption  d-md-block" >
              <h5>Only Vegetarian </h5>
              <p>Get 100% Vegetarian recipes.</p>
              <button className='btn btn-sm btn-success' onClick={props.vegOnly} style={{ boxShadow: '2px 2px 5px black' }}>Get Recipes</button>
            </div>

          </div>
          <div className="carousel-item ">
            <img src={healthy} className="d-block w-100" alt="..."  />
            <div className="carousel-caption  d-md-block">
              <h5>EAT HEALTHY AND STAY HEALTHY</h5>
              <p>Get Healthy Food Recipes with ingredients include meat, fish, eggs, vegetables, some oils.</p>
              {/* <button className='btn btn-sm btn-success' onClick={props.healthy} style={{ boxShadow: '2px 2px 5px black' }}>Get Recipes</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={meal} className="d-block w-100" alt="..." height='450vh' />
            <div className="carousel-caption  d-md-block">
              <h5>Plan Your 3 Time Meal</h5>
              <p>Start your Meal prep With our Meal Plan</p>
              {/* <button className='btn btn-sm btn-success' onClick={props.mealPlan} style={{ boxShadow: '2px 2px 5px black' }}>Get Recipes</button> */}
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
