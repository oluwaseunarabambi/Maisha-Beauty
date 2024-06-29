import React from "react";
import aisha from '../images/aisha.jpeg';
import '../Styles/Shop.css';




const Shop = ()=> {
    return (
        <div className="shop-container">
            
            <input 
                type="search" 
                placeholder="Search for product..." 
                className="search-bar" 
                aria-label="Search for product"
            />
            <div className="shop-content">
                <h2>WELCOME TO</h2>
                <h1>MIAISHA BEAUTY</h1>
                <button className="shop-button">SHOP NOW</button>  
            </div>
                <img src={aisha} alt="Wig" className="shop-image"/>
            
        </div>
    )
};

export default Shop;