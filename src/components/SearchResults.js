import React, {useState, useEffect} from 'react';
import {Link, useLocation, Redirect} from 'react-router-dom';
import './SearchResults.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer';
import searchResult01 from './search-results-0-0.jpeg';
import searchResult02 from './search-results-0-1.jpg';
import searchResult2 from './search-results-2.jpg';
import searchResult3 from './search-results-3.jpg';
import searchResult4 from './search-results-4.jpg';
import searchResult5 from './search-results-5.jpg';

export function SearchResults({location, productCount=0}){
    if(location){
        productCount = location.state.productCount;
    }
    let [checked, setChecked] = useState(false);
    let [toggleDropdown, setToggleDropdown] = useState("See All 3 Departments");
    let [toggleDropdown2, setToggleDropdown2] = useState("See more");
    let navLinkRows = [];
    for(let i = 2; i < 4; i++){
        navLinkRows.push(<li class="nav-page">
                         <a id="nav-link-button">{i}</a>
                         </li>);
    }

    const checkBox = (event) => {
        if(checked===false){
            const checkbox = document.getElementById(event.target.id);
            checkbox.style.backgroundPosition = ("-473px -41px");
            checkbox.style.filter = ("opacity(100%)");
            setChecked(true);
        }
        else{
            const checkbox = document.getElementById(event.target.id);
            checkbox.style.backgroundPosition = ("-473px -41px");
            checkbox.style.filter = ("opacity(0%)");
            setChecked(false);
        }
    }

    const resetCheckbox = (event) => {
        if(checked===false){
            const checkbox = document.getElementById(event.target.id);
            checkbox.style.backgroundPosition = ("-434px -3px");
            checkbox.style.filter = ("opacity(0%)");
        }
    }
    
    const highlightCheckbox = (event) => {
        if(checked===false){
            const checkbox = document.getElementById(event.target.id);
            checkbox.style.backgroundPosition = ("-434px -3px");
            checkbox.style.filter = ("opacity(100%)");
        }
    }

    const toggleDropdownLabel = () => {
        const expandedDropdown = document.getElementById("expanded-dropdown-item");
        if(toggleDropdown === "See All 3 Departments"){
            setToggleDropdown("See Fewer Departments")
            expandedDropdown.style.display = ("block");
        }
        else{
            setToggleDropdown("See All 3 Departments");
            expandedDropdown.style.display = ("none");
        }
    }

    const toggleDropdownLabel2 = () => {
        const expandedDropdown = document.getElementsByClassName("expanded-dropdown-item-2");
        if(toggleDropdown2 === "See more"){
            setToggleDropdown2("See Less")
            for(let i=0; i<expandedDropdown.length; i++){
                expandedDropdown[i].style.display = ("block");
            }
        }
        else{
            setToggleDropdown2("See more");
            for(let i=0; i<expandedDropdown.length; i++){
                expandedDropdown[i].style.display = ("none");
            }
        }
    }

    return(
        <div class="SearchResults">
            <NavbarPrime productCount={productCount}/>
            <section id="upper-result-bar">
                <span id="results-breadcrumb-index">1-16 of 217 results for</span>
                <span id="results-breadcrumb-search-term">"cracking the coding interview"</span>
                <select id="results-sort-by-selector">
                    <option value="Sort by: Featured" default>Sort by: Featured</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Avg. Customer Review">Avg. Customer Review</option> 
                    <option value="Newest Arrivals">Newest Arrivals</option>  
                </select>
            </section>
            <section id="SearchResults-UI">
                <section id="search-results-filter-sidebar" class="search-results-col-1">
                    <div id="search-results-content-wrapper">
                        <span class="search-results-sidebar-subheader" id="search-results-subheader-1">Amazon Prime</span>
                        <input type="checkbox" class="search-results-filter-checkbox" id="prime-filter-checkbox"></input>
                        <i id="checkbox-icon" onClick={checkBox} onMouseLeave={resetCheckbox} onMouseEnter={highlightCheckbox}></i>
                        <label for="prime-filter-checkbox" id="prime-filter-checkbox-label" name="prime-filter-checkbox-label">
                            <object id="prime-filter-image" src="trans.png"></object>
                        </label>
                        <span class="search-results-sidebar-subheader" id="search-results-subheader-2">Delivery Day</span>
                        <input type="checkbox" class="search-results-filter-checkbox" id="delivery-day-checkbox"></input>
                        <i id="checkbox-icon-2" onClick={checkBox} onMouseLeave={resetCheckbox} onMouseEnter={highlightCheckbox}></i>
                        <label for="delivery-day-checkbox" id="delivery-day-filter-checkbox-label" 
                                class="search-results-checkbox-label" name="delivery-day-checkbox-label">Get it by tomorrow
                        </label>
                        <span class="search-results-sidebar-subheader" id="search-results-subheader-2">Kindle Unlimited</span>
                        <input type="checkbox" class="search-results-filter-checkbox" id="delivery-day-checkbox"></input>
                        <i id="checkbox-icon-3" onClick={checkBox} onMouseLeave={resetCheckbox} onMouseEnter={highlightCheckbox}></i>
                        <label for="delivery-day-checkbox" id="delivery-day-filter-checkbox-label" 
                                class="search-results-checkbox-label" name="delivery-day-checkbox-label">Kindle Unlimited Eligible
                        </label>

                        <span class="search-results-sidebar-subheader" id="search-results-subheader-2">Department</span>
                        <span class="search-results-filter-option filter-option-header">Books</span>
                        <span class="search-results-filter-option">Job Hunting</span>
                        <span class="search-results-filter-option">Job Interviewing</span>
                        <span class="search-results-filter-option">Software Design, Testing & <br/>Engineering</span>
                        <span class="search-results-filter-option">Computer Science</span>
                        <span class="search-results-filter-option">Programming Algorithms</span>
                        <span class="search-results-filter-option">Computer Hacking</span>
                        <span class="search-results-filter-option">Python Programming</span>
                        <span class="search-results-filter-option filter-option-header">Kindle Store</span>
                        <span class="search-results-filter-option">Computer Programming</span>
                        <span class="search-results-filter-option" id="expanded-dropdown-item">Prime Video</span>
                        <div class="wrap-collapsible">
                            <input id="collapsible" class="toggle" type="checkbox" />
                            <label for="collapsible" class="lbl-toggle" id="collapsible-label" onClick={toggleDropdownLabel}>
                                <object name="see-all-depts-tooltip-inner-icon" id="see-all-depts-tooltip-inner-icon" src="trans.png" ></object>
                                {toggleDropdown}
                            </label>
                            <div class="collapsible-content">
                                <div id="see-all-depts-collapsible-content-inner">
                                <span class="search-results-filter-option" id="collapsible-inner-filter-option"></span>
                                </div>
                            </div>
                        </div>
                        <span class="search-results-sidebar-subheader" id="avg-customer-review-sidebar-filter">Avg. Customer Review</span>
                        <i class="star-icon-4-and-up star-icon"></i>
                        <i class="star-icon-3-and-up star-icon"></i>
                        <i class="star-icon-2-and-up star-icon"></i>
                        <i class="star-icon-1-and-up star-icon"></i>
                        <span class="search-results-sidebar-subheader" id="book-series-header">Book Series</span>
                        <div id="book-series-1-wrapper">
                            <input type="checkbox" class="search-results-filter-checkbox" id="book-series-1-checkbox"></input>
                            <i id="checkbox-icon-4" onClick={checkBox} onMouseLeave={resetCheckbox} onMouseEnter={highlightCheckbox}></i>
                            <label for="book-series-1-checkbox" id="book-series-1-filter-checkbox-label" 
                                    class="search-results-checkbox-label" name="book-series-1-checkbox-label">A Programmer's Guide to<span class="label-line-2">Computer Science</span>
                            </label>
                        </div>
                        <div id="book-series-2-wrapper">
                            <input type="checkbox" class="search-results-filter-checkbox" id="book-series-2-checkbox"></input>
                            <i id="checkbox-icon-5" onClick={checkBox} onMouseLeave={resetCheckbox} onMouseEnter={highlightCheckbox}></i>
                            <label for="book-series-2-checkbox" id="book-series-2-filter-checkbox-label" 
                                    class="search-results-checkbox-label" name="book-series-2-checkbox-label">How to Answer Interview<span class="label-line-2">Questions</span>
                            </label>
                        </div>
                        <span class="search-results-sidebar-subheader" id="new-releases-header">New Releases</span>
                        <span class="search-results-filter-option flush-filter-option">Last 30 days</span>
                        <span class="search-results-filter-option flush-filter-option">Last 90 days</span>
                        <span class="search-results-filter-option flush-filter-option">Coming Soon</span>

                        <span class="search-results-sidebar-subheader" id="book-format-header">Book Format</span>
                        <span class="search-results-filter-option flush-filter-option">Paperback</span>
                        <span class="search-results-filter-option flush-filter-option">Hardcover</span>
                        <span class="search-results-filter-option flush-filter-option">Kindle Edition</span>

                        <span class="search-results-sidebar-subheader" id="book-format-header">Author</span>
                        <span class="search-results-filter-option flush-filter-option">Gayle Laakmann McDowell</span>
                        <span class="search-results-filter-option flush-filter-option">Alex Xu</span>
                        <span class="search-results-filter-option flush-filter-option">Jackie Bavaro</span>
                        <span class="search-results-filter-option flush-filter-option">Amit Prakash</span>
                        <span class="search-results-filter-option flush-filter-option">Tsung-Hsien Lee</span>
                        <span class="search-results-filter-option flush-filter-option">Adnan Aziz</span>
                        <span class="search-results-filter-option flush-filter-option">John Sonmez</span>
                        <span class="search-results-filter-option expanded-dropdown-item-2">Alex Miller</span>
                        <span class="search-results-filter-option expanded-dropdown-item-2">Lawrence Wu</span>
                        <span class="search-results-filter-option expanded-dropdown-item-2">Robert C. Martin</span>
                        <div class="wrap-collapsible">
                            <input id="collapsible" class="toggle" type="checkbox" />
                            <label for="collapsible" class="lbl-toggle" id="collapsible-label" onClick={toggleDropdownLabel2}>
                                <object name="see-all-depts-tooltip-inner-icon" id="see-all-depts-tooltip-inner-icon" src="trans.png" ></object>
                                {toggleDropdown2}
                            </label>
                            <div class="collapsible-content">
                                <div id="see-all-depts-collapsible-content-inner">
                                <span class="search-results-filter-option" id="collapsible-inner-filter-option"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="search-results-main" class="search-results-col-2">
                       <div class="search-results-row" id="search-results-row-0">
                            <div class="row-header" id="row-0-header">
                                <img id="search-result-img-1" src={searchResult01}></img>
                                <hr id="row-0-vertical-divider"></hr>
                                <div id="bitbox-wrapper">
                                    <span id="bitbox-header">Monthly Coding Projects for Kids Ages 6-12</span>
                                    <span id="shop-bitsbox-link">Shop Bitsbox</span>
                                </div>
                            </div>
                            <div id="bitsbox-image-card">
                                <img id="search-result-img-1-1"src={searchResult02}></img>
                            </div>
                            <div id="bitsbox-subheader-wrapper">
                                <span class="bitsbox-subheader">Bitsbox - Coding Subscription Box for Kids</span>
                                <span class="bitsbox-subheader">Ages 6-12 | STEM Education</span>
                            </div>
                            <div class="star-wrapper" id="star-wrapper-row-0">
                                        <i class="star-icon-4-5"></i>
                                        <span class="review-count" id="review-count-row-0">708</span>
                            </div>
                        </div>
                        <div class="search-results-row" id="search-result-row-1">
                            <div class="row-header">
                                <div class="bestseller-flag">
                                    <span class="best-seller-text">Best Seller</span>
                                </div>
                            </div>
                            <div class="search-results-inner-wrapper">
                                <div class="search-results-inner-col-left" id="search-results-inner-col-left-row-1">
                                    <img class="search-result-img" id="search-result-img-2" src={searchResult2}></img>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-1">
                                    <span class="search-results-inner-col-header">Cracking the Coding Interview: 189 Programming Questions and Solutions</span>
                                    <span class="search-results-inner-col-id">by <span class="inner-col-id-link">Gayle Laakmann McDowell</span> <span class="inner-col-divider">|</span> Jul 1, 2015</span>
                                    <div class="star-wrapper">
                                        <i class="star-icon-4-5"></i>
                                        <span class="review-count">4,578</span>
                                    </div>
                                    <span class="search-item-specs">Paperback</span>
                                    <span class="rent-price"><span class="price-superscript">$</span><span class="price-main">19</span><span class="price-superscript">99</span> <span class="rent-price-link">to rent</span></span>
                                    <span class="rent-price">$24.00<span class="buy-price-link">to buy</span></span>
                                    <span class="prime-shipping-option-wrapper">
                                        <object id="prime-filter-image" src="trans.png"></object>
                                        <span class="search-item-shipping">FREE One-Day</span>
                                    </span>
                                    <span class="search-results-subheader">Get it <span class="search-results-subheader-strong">Tomorrow, March 27</span></span>
                                    <span class="search-results-subheader">More Buying Choices</span>
                                    <span class="search-results-price-subheader">$19.00 <span class="new-and-used-offers">(40 used & new offers)</span></span>
                                    <hr class="search-results-mini-divider"></hr>
                                    <span class="search-results-bottom-link">Spiral-bound</span>
                                </div>
                            </div>
                        </div>
                        <div class="search-results-row" id="search-result-row-2">
                            <div class="row-header">
                                    <div class="bestseller-flag">
                                        <span class="best-seller-text">Best Seller</span>
                                    </div>
                                </div>
                            <div class="search-results-inner-wrapper">
                                <div class="search-results-inner-col-left" id="search-results-inner-col-left-row-2">
                                    <Link to="/product">
                                    <img class="search-result-img" id="search-result-img-3" src={searchResult3}></img>
                                    </Link>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-2">
                                    <Link to="/product" class="react-router-link">
                                    <span class="search-results-inner-col-header">System Design Interview - An Insider's Guide</span>
                                    </Link>
                                    <span class="search-results-inner-col-id">by <span class="inner-col-id-link">Alex Xu</span> <span class="inner-col-divider">|</span> Jun 10, 2020</span>
                                    <div class="star-wrapper">
                                        <i class="star-icon-4-5"></i>
                                        <span class="review-count">490</span>
                                    </div>
                                    <span class="search-item-specs">Kindle Edition</span>
                                    <span class="rent-price" id="deal-price"><span class="price-superscript">$</span><span class="price-main">24</span><span class="price-superscript">99</span></span>
                                    <span class="search-results-price-subheader" id="original-price">$34.99</span>                            
                                    <span class="search-item-shipping" id="available-instantly">Available instantly</span>
                                </div>
                            </div>
                        </div>
                        <div class="search-results-row" id="search-result-row-3">
                            <div class="row-header">
                                    <div class="bestseller-flag">
                                        <span class="best-seller-text">Best Seller</span>
                                    </div>
                                </div>
                            <div class="search-results-inner-wrapper">
                                <div class="search-results-inner-col-left" id="search-results-inner-col-left-row-3">
                                    <img class="search-result-img" id="search-result-img-3" src={searchResult4}></img>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-3">
                                    <span class="search-results-inner-col-header">Elements of Programming Interviews in Python: The Insiders' Guide</span>
                                    <span class="search-results-inner-col-id">by <span class="inner-col-id-link">Adnan Aziz</span> , <span class="inner-col-id-link">Tsung-Hsien Lee</span>, et. al<span class="inner-col-divider">|</span> Sept 15, 2016</span>
                                    <div class="star-wrapper">
                                        <i class="star-icon-4-5"></i>
                                        <span class="review-count">434</span>
                                    </div>
                                    <span class="search-item-specs">Paperback</span>
                                    <span class="rent-price" id="deal-price"><span class="price-superscript">$</span><span class="price-main">35</span><span class="price-superscript">66</span></span>
                                    <span class="search-results-price-subheader" id="original-price">$39.95</span>                            
                                    <span class="prime-shipping-option-wrapper">
                                        <object id="prime-filter-image" src="trans.png"></object>
                                        <span class="search-item-shipping">FREE Delivery <span class = "search-item-shipping-bold">Wed, Mar 31</span></span>
                                    </span>
                                    <span class="search-results-subheader">More Buying Choices</span>
                                    <span class="search-results-price-subheader">$30.00 <span class="new-and-used-offers">(25 used & new offers)</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="search-results-row" id="search-result-row-4">
                           
                            <div class="search-results-inner-wrapper">
                                <div class="search-results-inner-col-left" id="search-results-inner-col-left-row-4">
                                    <img class="search-result-img" id="search-result-img-4" src={searchResult5}></img>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-4">
                                    <span class="search-results-inner-col-header">Elements of Programming Interviews in Java: The Insiders' Guide</span>
                                    <span class="search-results-inner-col-id">by <span class="inner-col-id-link">Adnan Aziz</span> , <span class="inner-col-id-link">Tsung-Hsien Lee</span>, et. al<span class="inner-col-divider">|</span> Sept 15, 2016</span>
                                    <div class="star-wrapper">
                                        <i class="star-icon-4-5"></i>
                                        <span class="review-count">336</span>
                                    </div>
                                    <span class="search-item-specs">Paperback</span>
                                    <span class="rent-price" id="deal-price"><span class="price-superscript">$</span><span class="price-main">37</span><span class="price-superscript">95</span></span>
                                    <span class="search-results-price-subheader" id="original-price">$39.95</span>                            
                                    <span class="prime-shipping-option-wrapper">
                                        <object id="prime-filter-image" src="trans.png"></object>
                                        <span class="search-item-shipping">FREE Delivery <span class = "search-item-shipping-bold">Sun, Apr 4</span></span>
                                    </span>
                                    <span class="search-results-subheader">More Buying Choices</span>
                                    <span class="search-results-price-subheader">$21.38 <span class="new-and-used-offers">(22 used & new offers)</span></span>
                                </div>
                            </div>
                        </div>
                        <div id="page-nav-bottom">
                            <div id="page-nav-bottom-inner-wrapper">
                                <ul id="page-nav-bottom-bar">
                                    <li class="previous-nav-arrow">←</li>
                                    <li disabled class="previous-page">Previous</li>
                                    <li class="nav-page" id="current-nav-page">
                                     <a id="nav-link-button">1</a>
                                    </li>
                                    {navLinkRows}
                                    <li class="nav-continue-page">...</li>
                                    <li class="last-nav-page">14</li>
                                    <li class="next-nav-button">
                                        <span class="next-page">Next</span>
                                        <span class="next-nav-arrow">→</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </section>
            </section>
        <Footer />
        </div>
    )
}

export default SearchResults;