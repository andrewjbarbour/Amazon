import {React, useState} from 'react';
import './Product.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer';
import lookInside from './look-inside.png';
import productMain from './product-2-main-image.jpg';
import productSmall1 from './product-2-small-1.jpg';
import productSmall2 from './product-2-small-2.jpg';

export function Product(){

    const openTooltip = (event) => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "inline-block";
      }
    
      const closeTooltip = (event) => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "none";
      }

    return(
        <div class="Product">
            <NavbarPrime />
            <section id="upper-product-bar">
                <a class="upper-product-bar-link" id="upper-product-bar-link-1"><span class="product-bar-link-text">Books</span></a>
                <a class="upper-product-bar-link">Advanced Search</a>
                <a class="upper-product-bar-link">New Releases</a>
                <a class="upper-product-bar-link">Best Sellers & More</a>
                <a class="upper-product-bar-link">Children's Books</a>
                <a class="upper-product-bar-link">Textbooks</a>
                <a class="upper-product-bar-link">Textbook Rentals</a>
                <a class="upper-product-bar-link">Best Book of the Month</a>
            </section>
            <section id="product-breadcrumb">
               <a> Books </a>
               <span>›</span>
               <a> Business & Money </a>
               <span>›</span>
               <a> Job Hunting & Careers </a>
            </section>
            <section id="top-product-UI">
                <section class="top-product-UI-left-col" id="main-product-image-container">
                    <img name="look-inside-img" id="look-inside-img" alt="look-inside-img" src={lookInside}></img>
                    <img name="product-2-main-image" id="product-2-main-image" alt="product-2-main-image" src={productMain}></img>
                    <div id="product-small-img-wrapper">
                        <img name="product-small-img-1" id="product-small-img-1" alt="product-small-img-1" src={productSmall1}></img>
                        <img name="product-small-img-2" id="product-small-img-2" alt="product-small-img-2" src={productSmall2}></img>
                        <span id="small-img-wrapper-modal-link">See all 2 images</span>
                      
                    </div>
                    <hr id="small-img-wrapper-bottom-divider"></hr>
                </section>
                <section class="top-product-UI-center-col">
                    <h1 id="product-title">System Design Interview – An insider's guide, Second Edition</h1>
                    <h2 id="product-subtitle">Paperback – June 12, 2020</h2>
                    <span id="byline-info">by <a id="byline-link">Alex Xu</a><span id="byline-description">(Author)</span></span>
                    <div class="star-wrapper">
                        <i class="star-icon-4-5"></i>
                        <span class="review-count">500 ratings</span>
                    </div>
                    <div class="bestseller-badge-wrapper">
                        <i class="bestseller-badge-icon">#1 Best Seller</i>
                        <a class="bestseller-badge-link">in Assembly Language Programming</a>
                    </div>
                    <hr class="top-product-UI-bottom-divider"></hr>
                    <span id="top-product-show-editions-dropdown">See all formats and editions</span>
                    <div id="kindle-edition-button">
                        
                    </div>
                </section>
                <section class="top-product-UI-right-col">
                    <div class="buy-box">
                        <div id="buy-box-inner-content-wrapper">
                            <div id="buy-box-row-1">
                                <span id="buy-box-buy-new">Buy new:</span>
                                <span id="buy-new-price">$24.99</span>
                            </div>
                            <div id="buy-box-row-2">
                                <span id="buy-box-list-price">List Price: <span id="buy-box-original-price">$39.99</span><a id="buy-box-price-details-link">Details</a></span>
                            </div>
                            <div id="buy-box-row-3">
                                <span id="buy-box-savings">Save: $15.00 (38%)</span>
                            </div>
                            <div id="buy-box-row-4">
                                <i id="buy-box-prime-icon"></i>
                                <span id="place-order-free-returns-tooltip" onClick={openTooltip}>
                                FREE Returns
                                <object name="free-returns-tooltip-icon" id="free-returns-tooltip-icon" src="trans.png"></object>
                                </span>
                                <div id="expanded-free-returns-tooltip">
                            <div id="free-returns-tooltip-header">
                            <h2 id="free-returns-tooltip-header-label"><strong>Return this item for free</strong></h2>
                                <span role="button" className="free-returns-tooltip-close"  onClick={closeTooltip}>
                                <object src="./trans.png" className="modal-close-image"> </object>
                                </span> 
                            </div>
                            <span id="free-returns-tooltip-content">Free returns are available for the shipping address you chose. You can return the item for any reason in new and unused condition: no shipping charges</span>
                            <span id="learn-more-link">Learn more about free returns.</span>
                                <div class="free-returns-collapsible-wrapper">
                                <input id="free-returns-collapsible" class="toggle" type="checkbox" />
                                <label for="free-returns-collapsible" class="lbl-toggle" id="free-returns-collapsible-label">
                                    <object name="free-returns-tooltip-inner-icon" id="free-returns-tooltip-inner-icon" src="trans.png"></object>
                                    How to return the item?
                                </label>
                                <div class="free-returns-collapsible-content">
                                    <div id="free-returns-collapsible-content-inner">
                                        <ol id="free-returns-expandable-tooltip">
                                            <li>Go to your orders and start the return</li>
                                            <li>Select the return method</li>
                                            <li>Ship it!</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )   
}

export default Product;