import React from "react";
import '../Styles/Categories.css';
import img from '../images/imag1.jpeg';
import wig1 from '../images/wig1.jpeg';
import wig2 from '../images/wig2.jpeg';
import wig3 from '../images/wig3.jpeg';
import wig4 from '../images/wig4.jpeg';
import wig5 from '../images/wig5.jpeg';
import wig6 from '../images/wig6.jpeg';
import wig7 from '../images/wig7.jpeg';
import wig8 from '../images/wig8.jpeg';
import wig9 from '../images/wig9.jpeg';
import wi from '../images/wig10.jpeg';
import wig11 from '../images/wig11.jpeg';
import wig12 from '../images/wig12.jpeg';
import wig13 from '../images/wig13.jpeg';



const Categories = ({ addToCart }) => {
    console.log('addToCart function:', addToCart); // Add this line to debug
    const wigs = [
        { id: 1, image: wi, description: "Full Closure Kinky Straight Wig..Length-18'. Longer Lengths Available ", price: 73000 },
        { id: 2, image: wig1, description: "Full Frontal Yaki Straight Wig 100percent Human Hair.. Length-14' ", price: 50000 },
        { id: 3, image: wig2, description: "Very Amazing Silky SDD Closure Wig.. Length-12' ", price: 125000 },
        { id: 4, image: wig3, description: "Very Amazing Silky SDD Closure Wig In Burgundy.. Length-12' ", price: 130000 },
        { id: 5, image: wig4, description: "Layers Bounce DD Full Closure Wig in Burgundy.. Length-18' ", price: 165000 },
        { id: 6, image: wig5, description: "Highlighting Layers Bounce DD Full Closure Wig.. Length-18' ", price: 165000 },
        { id: 7, image: wig6, description: "Layers Bounce DD Full Closure Wig in Natural.. Length-18' ", price: 165000 },
        { id: 8, image: wig7, description: "Layers Bounce DD Full Closure Wig In Tones Colors.. Length-18' ", price: 170000 },
        { id: 9, image: wig8, description: "Layers Bounce DD Full Closure Wig in Tones Colors..Length-18' ", price: 170000 },
        { id: 10, image: wig9, description: "Natural Jc Incredibly soft curly texture..Length-20'. Longer Lengths Available ", price: 78000 },
        { id: 11, image: wig11, description: "Mexico Water Curls Wigs.. Length-24' ", price: 265000 },
        { id: 12, image: wig12, description: "Wig Lulu Very Full Frontal. Color Highlights- Can be Comb Out or Wet Looks..Length-20'. 22' Also Available.", price: 130000 },
        { id: 13, image: wig13, description: "Golden Blonde Highlights in Full Frontal. Color-Highlights- 100percent Virgin Human Hair..Length-16'.", price: 115000 },


    ];

    return (
        <div>
            <h3 className="best-seller-heading">Best Seller</h3>
            <div className="category-list">
                {wigs.map((wig) => (
                    <div key={wig.id} className="category-card">
                        <img src={wig.image} alt="Wig" className="category-image" />
                        <div className="category-details">
                            <p className="category-description">{wig.description}</p>
                            <p className="category-price">N{wig.price}</p>
                            <button className="category-button" onClick={() => addToCart(wig)}>Add to cart</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    )
};

export default Categories;
