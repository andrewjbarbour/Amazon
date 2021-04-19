import { React, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Product.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer';
import lookInside from './look-inside.png';
import productMain from './product-2-main-image.jpg';
import productSmall1 from './product-2-small-1.jpg';
import productSmall2 from './product-2-small-2.jpg';
import securedSsl from './secured-ssl.png';
import locationPin from './location-pin.png';

export function Product({location}){
    let [cartCount, setCartCount] = useState(location.state.productCount);
    
    const [dropDownToggle, setDropDownToggle] = useState(0);
    let [toggleDropdown2, setToggleDropdown2] = useState("Read more");

    const openTooltip = () => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "inline-block";
      }
    
      const closeTooltip = () => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "none";
      }

      const rotateDropdownSelector = () => {
        const dropdownSelectorIcon = document.getElementById('dropdown-selector-icon');
        if(dropDownToggle===0){
            dropdownSelectorIcon.style.transform = "translateY(469px) rotate(270deg)";
            setDropDownToggle(1);
        }
        else{       
            dropdownSelectorIcon.style.transform = "translateY(0px) rotate(90deg)";
            setDropDownToggle(0);
        }
      }

      const toggleDropdownContent = () => {
        const expandedDropdown = document.getElementsByClassName("expanded-product-description-dropdown");
        if(toggleDropdown2 === "Read more"){
            setToggleDropdown2("Read less")
            for(let i=0; i<expandedDropdown.length; i++){
                expandedDropdown[i].style.display = ("block");
            }
        }
        else{
            setToggleDropdown2("Read more");
            for(let i=0; i<expandedDropdown.length; i++){
                expandedDropdown[i].style.display = ("none");
            }
        }
    }

    const getShippingDay = () => {
        let shippingDate = new Date();
        shippingDate.setDate(shippingDate.getDate()+4);
        const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[shippingDate.getDay()]}, ${months[shippingDate.getMonth()]} ${shippingDate.getDate()}`;
    }

    const [newItems, setnewItems] = useState(1);


    const addCartItems = (event) => {
        setnewItems(parseInt(event.target.value));
    }


    const addToCart = () => {
        setCartCount(prevCartCount => parseInt(prevCartCount) + newItems);
    }

    return(
        <div class="Product">
            <NavbarPrime productCount = {cartCount}/>
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
                    <div class="product-version-wrapper">
                        <div id="kindle-edition-button" class="product-version-button">
                            <span id="kindle-edition-text" class="product-edition-text">Kindle</span>
                            <span id="kindle-edition-price" class="product-edition-price">$24.99</span>
                        </div>
                        <div id="paperback-edition-button" class="product-version-button">
                            <span id="paperback-edition-text" class="product-edition-text">Paperback</span>
                            <span id="paperback-edition-price" class="product-edition-price">$24.99</span>
                            <i id="prime-version-button-logo"></i>
                        </div>
                        
                    </div>
                    <div class="product-version-subcard-wrapper">
                        <div class="product-version-subcard">
                                <a class="product-version-subcard-header">Read with Our <span id="free-app-bold">Free App</span></a>
                        </div>
                        <div class="product-version-subcard">
                                <a class="product-version-subcard-header">2 Used <span class="from-text">from</span> $32.98</a>
                                <a class="product-version-subcard-header">3 New <span  class="from-text">from</span> $24.99</a>
                        </div>
                    </div>
                    <div class="main-product-wrapper">
                        <div class="main-product-description">
                        The system design interview is considered to be the most complex and most difficult technical job 
                        interview by many. This book provides a step-by-step framework on how to tackle a system design
                        question. It includes many real-world examples to illustrate the systematic approach with detailed
                        steps that you can follow.

                        <span class="main-product-description-subheader">What’s inside?</span>
                        <span class="main-product-description-subheader-text">- An insider’s take on what interviewers really look for and why.</span>
                        
                        <div class="read-more-wrap-collapsible">
                            <i id="dropdown-selector-icon"></i>   
                            <input id="read-more-collapsible" class="toggle" type="checkbox" onClick={rotateDropdownSelector} />
                            <div id="read-more-collapsible-top-content" class="expanded-product-description-dropdown">
                                - A 4-step framework for solving any system design interview question.
                                <br/>- 16 real system design interview questions with detailed solutions.
                                <br/>- 188 diagrams to visually explain how different systems work.
                            </div>
                            <ul id="read-more-collapsible-list" class="expanded-product-description-dropdown">
                                <li id="read-more-collapsible-list-header">Table Of Contents</li>
                                <li>Chapter 1: Scale From Zero To Millions Of Users</li>
                                <li>Chapter 2: Back-of-the-envelope Estimation</li>
                                <li>Chapter 3: A Framework For System Design Interviews</li>
                                <li>Chapter 4: Design A Rate Limiter</li>
                                <li>Chapter 5: Design Consistent Hashing</li>
                                <li>Chapter 6: Design A Key-value Store</li>
                                <li>Chapter 7: Design A Unique Id Generator In Distributed Systems</li>
                                <li>Chapter 8: Design A Url Shortener</li>
                                <li>Chapter 9: Design A Web Crawler</li>
                                <li>Chapter 10: Design A Notification System</li>
                                <li>Chapter 11: Design A News Feed System</li>
                                <li>Chapter 12: Design A Chat System</li>
                                <li>Chapter 13: Design A Search Autocomplete System</li>
                                <li>Chapter 14: Design Youtube</li>
                                <li>Chapter 15: Design Google Drive</li>
                                <li>Chapter 16: The Learning Continues</li>
                            </ul>
                            <label for="read-more-collapsible" class="lbl-toggle" id="read-more-collapsible-label" onClick={toggleDropdownContent}>{toggleDropdown2}</label>
                            <div class="read-more-collapsible-content">
                            </div>
                        </div>
                        </div>
                        <span id="report-incorrect-product-info">
                            <i id="report-incorrect-product-info-icon"></i>
                            Report incorrect product information.
                        </span>
                        <hr class="top-product-UI-bottom-divider"></hr>
                    </div>
                    <div id="product-details-bar">
                        
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
                            <div id="buy-box-row-6">
                                FREE Delivery by <span id="buy-box-delivery-date">{getShippingDay()}</span> for Prime members
                            </div>
                            <div id="buy-box-row-7">
                                Details
                            </div>
                            <div id="buy-box-row-8">
                                Available to ship in 1-2 <br/> days.
                            </div>
                            <div id="buy-box-row-9">
                                As an alternative, the <span id="kindle-ebook-upsell-link">Kindle eBook</span> is available now and can be read on any device with the free Kindle app.
                            </div>
                            <div id="buy-box-row-10">
                            <select id="cart-item-quantity-selector" onChange={addCartItems}>
                                <option value="1" selected disabled hidden>Qty: 1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>                              
                            </select>
                            </div>
                            <div id="buy-box-row-11">
                                <input value="Add to Cart" name="place-order-button" id="place-order-button" type="submit" onClick={() => {addToCart()}} />
                            </div>
                            <div id="buy-box-row-12">
                                <Link to={{
                                    pathname:"/place-order",
                                    state: {productCount: parseInt(cartCount) + parseInt(newItems)}}} >
                                <input value="Buy Now" name="buy-now-button" id="buy-now-button" type="submit"/>
                                </Link>
                            </div>
                            <div id="buy-box-row-13">
                                <div id="secured-ssl-wrapper">
                                    <img id="buy-box-secured-ssl-icon" src={securedSsl}></img>
                                    <span id="buy-box-secure-transaction-link">Secure transaction</span>
                                </div>
                            </div>
                            <div id="buy-box-row-14">
                                <span id="buy-box-ships-from">Ships from </span>
                                <span class="buy-box-amazon-subheader">Amazon.com</span>    
                            </div>
                            <div id="buy-box-row-15">
                                <span id="buy-box-sold-by">Sold by </span> 
                                <span class="buy-box-amazon-subheader">Amazon.com</span>   
                            </div>
                            <div id="buy-box-row-16">
                                <input id="gift-receipt-checkbox" type="checkbox"></input>
                                <label id="gift-receipt-checkbox-label" for="gift-receipt-checkbox">Add a gift receipt for easy </label>
                                <span id="gift-receipt-returns">returns</span>
                            </div>
                            <hr class="buy-box-bottom-divider"></hr>
                            <div id="buy-box-row-17">
                                <img id="location-pin" name="location-pin" alt="location-pin" src={locationPin}></img>
                                <span id="buy-box-delivery-address">Deliver to Andrew - Hillsboro 97124</span>
                            </div>
                            <hr class="buy-box-bottom-divider"></hr>
                            <div id="buy-box-row-17">
                                <input value="Add to List" name="add-to-wishlist-button" id="add-to-wishlist-button" type="submit">
                                </input>
                                <i id="add-to-wishlist-dropdown-icon"></i>
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