import React from 'react';
import {CardData} from '../CardData/CardData';


const ProductSection = () => {
    console.log(CardData);
    return ( 
        <div className="products-section">
            <div className="container">
                <div className="card-group">
                    {CardData.map(({productName,image,originalPrice,discountedPrice,isAvailable,description},index) => (
                        <div className="card" key={index}>
                            <img src={image} className="card-img-top" alt={image} />
                            <div className="card-body">
                                <h5 className="card-title">{productName}</h5>
                                
                                <p className="card-price"><span className="card-org">${originalPrice} USD</span>&nbsp;<span>$ {discountedPrice} USD </span></p>                               
                                <p className="card-text">{description}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
        
     );
}
 
export default ProductSection;