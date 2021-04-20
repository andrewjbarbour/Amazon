import { React, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Product.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer';
import lookInside from './look-inside.png';
import productMain from './product-2-main-image.jpg';
import productSmall1 from './product-2-small-1.jpg';
import productSmall2 from './product-2-small-2.jpg';
import cracking from './cracking-the-coding-interview-large.jpg';
import pythonLarge from './elements-of-programming-interviews-python-large.webp';
import pythonSmall1 from './elements-of-programming-interviews-python-small-1.jpg';
import pythonSmall2 from './elements-of-programming-interviews-python-small-1.jpg';
import java from './programming-interviews-in-java-large.jpg';
import securedSsl from './secured-ssl.png';
import locationPin from './location-pin.png';

export function Product({location}){
    window.scrollTo(0, 0);
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

    const contents = useState([]);
    if(location.state.contents!==undefined){
        for(let i = 0; i < location.state.contents.length; i++){
            contents.push(<li>{location.state.contents[i]}</li>);
        }
    }

    const getImageCount = () => {
        let imageCount = 0;
        if(location.state.images!==undefined){
          while(imageCount < location.state.images.length){
              imageCount++
          }
        return imageCount;
        }
    }

    const savingsPercent = () => {
        return (((location.state.listPrice-location.state.newPrice)/location.state.listPrice).toFixed(2)*100);
    }

    const savingsDollars = () => {
        return (location.state.listPrice - location.state.newPrice).toFixed(2);
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
                    {location.state.images[0] ? <img name="product-2-main-image" id="product-2-main-image" alt="product-2-main-image" src={location.state.images[0]}></img> : ""}
                    <div id="product-small-img-wrapper">
                    {location.state.images[1] ? <img name="product-small-img-1" id="product-small-img-1" alt="product-small-img-1" src={location.state.images[1]}></img>: ""}
                    {location.state.images[2] ? <img name="product-small-img-2" id="product-small-img-2" alt="product-small-img-2" src={location.state.images[2]}></img>: ""}
                    {getImageCount() > 1 ? <span id="small-img-wrapper-modal-link">See all {getImageCount()} images</span> : ""}
                      
                    </div>
                    <hr id="small-img-wrapper-bottom-divider"></hr>
                </section>
                <section class="top-product-UI-center-col">
                    <h1 id="product-title">{location.state.name}</h1>
                    <h2 id="product-subtitle">Paperback – {location.state.releaseDate}</h2>
                    <span id="byline-info">by <a id="byline-link">{location.state.author}</a><span id="byline-description">(Author)</span></span>
                    <div class="star-wrapper">
                        <i class="star-icon-4-5"></i>
                        <span class="review-count">{location.state.ratings} ratings</span>
                    </div>
                    <div class="bestseller-badge-wrapper">
                        <i class="bestseller-badge-icon">#1 Best Seller</i>
                        <a class="bestseller-badge-link">in {location.state.bestseller}</a>
                    </div>
                    <hr class="top-product-UI-bottom-divider"></hr>
                    <span id="top-product-show-editions-dropdown">See all formats and editions</span>
                    <div class="product-version-wrapper">
                        <div id="kindle-edition-button" class="product-version-button">
                            <span id="kindle-edition-text" class="product-edition-text">Kindle</span>
                            <span id="kindle-edition-price" class="product-edition-price">${location.state.cost1.toFixed(2)}</span>
                        </div>
                        <div id="paperback-edition-button" class="product-version-button">
                            <span id="paperback-edition-text" class="product-edition-text">Paperback</span>
                            <span id="paperback-edition-price" class="product-edition-price">${location.state.cost2.toFixed(2)}</span>
                            <i id="prime-version-button-logo"></i>
                        </div>
                        
                    </div>
                    <div class="product-version-subcard-wrapper">
                        <div class="product-version-subcard">
                                <a class="product-version-subcard-header">Read with Our <span id="free-app-bold">Free App</span></a>
                        </div>
                        <div class="product-version-subcard">
                                <a class="product-version-subcard-header">{location.state.usedCount} Used <span class="from-text">from</span> ${location.state.usedPrice.toFixed(2)}</a>
                                <a class="product-version-subcard-header">{location.state.newCount} New <span  class="from-text">from</span> ${location.state.newPrice.toFixed(2)}</a>
                        </div>
                    </div>
                    <div class="main-product-wrapper">
                        <div class="main-product-description">
                        {location.state.description}

                        {location.state.optionalDescription ? <span class="main-product-description-subheader">{location.state.optionalDescription}</span> : ""}
                        <span class="main-product-description-subheader-text">{location.state.subheaderText}</span>
                        
                        <div class="read-more-wrap-collapsible">
                            <i id="dropdown-selector-icon"></i>   
                            <input id="read-more-collapsible" class="toggle" type="checkbox" onClick={rotateDropdownSelector} />
                            <div id="read-more-collapsible-top-content" class="expanded-product-description-dropdown">
                                {location.state.subheaderText2}
                                <br/>{location.state.subheaderText3}
                                <br/>{location.state.subheaderText4}
                            </div>
                            <ul id="read-more-collapsible-list" class="expanded-product-description-dropdown">
                                <li id="read-more-collapsible-list-header">Table Of Contents</li>
                                {contents}
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
                                <span id="buy-new-price">${location.state.cost2.toFixed(2)}</span>
                            </div>
                            <div id="buy-box-row-2">
                                <span id="buy-box-list-price">List Price: <span id="buy-box-original-price">${location.state.listPrice.toFixed(2)}</span><a id="buy-box-price-details-link">Details</a></span>
                            </div>
                            <div id="buy-box-row-3">
                                <span id="buy-box-savings">Save: ${savingsDollars()} ({savingsPercent()}%)</span>
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