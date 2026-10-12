import React from 'react';
import "./Card.css";
import image from "../images/image-product-desktop.jpg";
import Cart_image from "../images/icon-cart.svg";

const Card = () => {
  return (
    <div className='container'>
        <div className="first-part">
            <img src={image} alt="" />
        </div>
        <div className="second-part">
            <span className='span'>perfume</span>
            <h1>Gabrielle <br /> Essence Eau <br /> De Parfum</h1>
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

            <h2>$149.99 <span>$169.99</span></h2>
            <button>
                <img src={Cart_image} alt="" />
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Card