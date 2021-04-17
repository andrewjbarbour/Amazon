import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavbarPrime.css';

export function NavbarPrime({productCount=0}){
    let [cartCount, setCartCount] = useState(productCount);

    return(
        <header id="front-page-header">
                <div id="nav-belt">
                    <Link to="/">
                    <div id="nav-logo">
                        <i name="amazon-front-page-logo" id="amazon-front-page-logo"></i>
                        <i name="amazon-prime-logo-extension" id="amazon-prime-logo-extension"></i>
                    </div>
                    </Link>
                    <div id="nav-global-location">
                        <object name="global-location-sprite" id="global-location-sprite" src="./trans.png"></object>
                        <div id="global-delivery">
                            <span id="global-delivery-name">Deliver to Andrew</span>
                            <span id="global-delivery-location">Portland 97124</span>
                        </div>
                    </div>
                    <div id="nav-search-bar">
                        <div id="nav-search-inner-box">
                            <select id="search-dropdown-description">
                                <option value="All" selected disabled hidden>All</option>
                                <option value="All Departments">All Departments</option>
                                <option value="Audible Books and Originals">Audible Books and Originals</option>
                                <option value="Alexa Skills">Alexa Skills</option>
                                <option value="Amazon Devices">Amazon Devices</option>
                                <option value="Amazon Fresh">Amazon Fresh</option>
                                <option value="Amazon Pharmacy">Amazon Pharmacy</option>
                                <option value="Amazon Warehouse">Amazon Warehouse</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Apps & Games">Apps & Games</option>
                                <option value="Arts, Crafts & Sewing">Arts, Crafts & Sewing</option>
                                <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
                                <option value="Baby">Baby</option>
                                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                <option value="Books">Books</option>
                                <option value="CDs & Vinyl">CDs & Vinyl</option>
                                <option value="Cell Phones & Accessories">Cell Phones & Accessories</option>
                                <option value="Clothing, Shoes & Jewelry">Clothing, Shoes & Jewelry</option>
                                    <option value="Women">&nbsp;&nbsp;&nbsp;Women</option>
                                    <option value="Men">&nbsp;&nbsp;&nbsp;Men</option>
                                    <option value="Girls">&nbsp;&nbsp;&nbsp;Girls</option>
                                    <option value="Boys">&nbsp;&nbsp;&nbsp;Boys</option>
                                    <option value="Baby">&nbsp;&nbsp;&nbsp;Baby</option>
                                <option value="Under $10">Under $10</option>
                                <option value="Amazon Explore">Amazon Explore</option>
                                <option value="Collectibles & Fine Art">Collectibles & Fine Art</option>
                                <option value="Computers">Computers</option>
                                <option value="Courses">Courses</option>
                                <option value="Credit and Payment Cards">Credit and Payment Cards"</option>
                                <option value="Digital Educational Resources">Digital Educational Resources</option>
                                <option value="Digital Music">Digital Music</option>
                                <option value="Garden & Outdoor">Garden & Outdoor</option>
                                <option value="Grocery & Gourmet Food">Grocery & Gourmet Food</option>
                                <option value="Handmade">Handmade</option>
                                <option value="Health, Household & Baby Care">Health, Household & Baby Care</option>
                                <option value="Home & Business Services">Home & Business Services</option>
                                <option value="Industrial & Scientific">Industrial & Scientific</option>
                                <option value="Just for Prime">Just for Prime</option>
                                <option value="Kindle Store">Kindle Store</option>
                                <option value="Luggage & Travel Gear">Luggage & Travel Gear</option>
                                <option value="Magazine Subscriptions">Magazine Subscriptions</option>
                                <option value="Movies & TV">Movies & TV</option>
                                <option value="Musical Instruments">Musical Instruments</option>
                                <option value="Office Products">Office Products</option>
                                <option value="Pet Supplies">Pet Supplies</option>
                                <option value="Premium Beauty">Premium Beauty</option>
                                <option value="Prime Video">Prime Video</option>
                                <option value="Smart Home">Smart Home</option>
                                <option value="Software">Software</option>
                                <option value="Sports & Outdoors">Sports & Outdoors</option>
                                <option value="Subscription Boxes">Subscription Boxes</option>
                                <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                                <option value="Toys & Games">Toys & Games</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Video Games">Video Games</option>
                                <option value="Whole Foods Market">Whole Foods Market</option>
                            </select>
                         
                             <input name="main-nav-search-bar" id="main-nav-search-bar" type="text"></input>
                            <Link to="/search" id="nav-search-submit-button">
                            </Link>
                        </div>
                    </div>
                    <div id="regional-language-box">
                        <object name="nav-flag-flyout" id="nav-flag-flyout" src="./trans.png"></object>
                        <object name="nav-flag-flyout-dropdown-icon" id="nav-flag-flyout-dropdown-icon" src="./trans.png"></object>
                    </div>
                    <Link to="/signin" id="signin-link" class="react-router-link">
                    <div id="user-account-nav">
                        <span id="user-greeting"> Hello, Andrew</span>
                        <span id="user-accounts-and-lists">Accounts & Lists            
                            <object name="user-account-nav-dropdown-icon" id="user-account-nav-dropdown-icon" src="./trans.png"></object>
                        </span>                    
                    </div>
                    </Link>
                    <div id="returns-and-orders-nav">
                        <span id="front-page-returns-nav">Returns</span>
                        <span id="front-page-orders-nav">& Orders</span>
                    </div>
                    <Link to="/place-order" class="react-router-link">
                    <div id="nav-cart">
                        <span id="nav-cart-count">{productCount}</span>
                        <object id="nav-cart-sprite" name="nav-cart-sprite" alt="nav-cart-sprite" src="trans.png">
                            <span id="nav-cart-sprite-text">Cart</span>     
                        </object>
                    </div>
                    </Link>
                </div>
                <div id="nav-belt-lower">
                    <div id="sidebar-nav">
                        <object id="sidebar-icon" name="sidebar-icon" alt="sidebar-icon" src="trans.png"></object>
                        <span id="sidebar-description">All</span>
                    </div>
                    <span id="your-amazon-nav">Andrew's Amazon.com</span>
                    <span id="customer-service-nav">Customer Service</span>
                    <span id="subscribe-and-save-nav">Subscribe & Save</span>
                    <span id="prime-video-nav">Prime Video</span>
                    <span id="prime-nav">Prime</span>
                    <span id="buy-again-nav">Buy Again</span>
                    <span id="best-sellers-nav">Best Sellers</span>
                    <span id="browsing-history-nav">Browsing History</span>
                    <span id="todays-deals-nav">Today's Deals</span>
                    <span id="fresh-nav">Fresh</span>
                    <span id="whole-foods-nav">Whole Foods</span>
                    <span id="watch-coming-to-america-nav">Watch Coming To America</span>
                </div>
            </header>
    )
}

export default NavbarPrime;