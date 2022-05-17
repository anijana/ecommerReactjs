import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-1">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            {/* <hr /> */}
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur explicabo reprehenderit dolorem nemo temporibus quas?
              Molestiae praesentium facilis voluptatem quas laudantium dolore
              rem ea nulla quos perspiciatis odit id, provident dignissimos?
              Iste quis id labore nulla eaque consequuntur, ullam tempora non
              molestias nostrum at voluptatum aperiam obcaecati totam, possimus
              blanditiis dolores sequi adipisci illum accusantium! Quaerat, hic
              facere. Consectetur, voluptas expedita. Distinctio nisi possimus
              consequatur reiciendis quos enim, aut aperiam ea recusandae quae!
              Voluptatibus quia atque nulla saepe pariatur voluptatem ipsam
              laboriosam deleniti? Ea atque mollitia architecto explicabo
              aperiam at nihil! Illo necessitatibus error architecto molestias
              reiciendis asperiores expedita cum!
            </p>
            
            
              <NavLink to="/contact" className="btn btn-outline-primary px-3">
                
                Contact Us
              </NavLink>
            
          </div>
          <div className="col-md-6 d-flex justify-content-center my-5 py-4 px-5">
              <img src="/assets/images/about1.webp"  alt="about Pic" height='400px' width='400px'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
