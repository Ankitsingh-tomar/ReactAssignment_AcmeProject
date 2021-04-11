import React from 'react';
import {CardData} from '../CardData/CardData'


let Background = "https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg";
const ShopContents = () => {
    return ( <>
        <div className="page-title-section"><div className="container"><h1 className="page-title">Shop Our Products</h1></div></div>
        <div className="content-section featured-section">
            <div className="container">
                <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: `url(${Background})`}}  className="featured-wrapper w-inline-block">
                                <div className="pill-2 badge primary featured">Featured Item</div>
                                <div className="feature-text-wrapper">
                                    <h3 className="featured-item-name">White Tent</h3>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="featured-price">$&nbsp;200.00&nbsp;USD</div>
                                </div>
                                <div className="featured-gradient-overlay"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        </>
     );
}
 
export default ShopContents;