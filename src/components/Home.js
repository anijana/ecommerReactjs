import React from "react";
import Product from './Product'

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/home/photo1.jpeg"
              className="d-block w-100"
              alt="pic"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/photo2.jpeg"
              className="d-block w-100"
              alt="pic"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/photo3.jpeg"
              className="d-block w-100"
              alt="pic"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/photo4.webp"
              className="d-block w-100"
              alt="pic"
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </>

  );
};

export default Home;
