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
import productMain from './product-2-main-image.jpg';
import productSmall1 from './product-2-small-1.jpg';
import productSmall2 from './product-2-small-2.jpg';
import cracking from './cracking-the-coding-interview-large.jpg';
import pythonLarge from './elements-of-programming-interviews-python-large.webp';
import pythonSmall1 from './elements-of-programming-interviews-python-small-1.jpg';
import pythonSmall2 from './elements-of-programming-interviews-python-small-2.jpg';
import java from './programming-interviews-in-java-large.jpg';

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
                                    <Link to={{
                                        pathname: "/product",
                                        state: {
                                            productCount: productCount,
                                            name: "Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition",
                                            author: "Gayle Laakmann McDowell",
                                            bestseller: "Job Interviewing",
                                            images: [cracking],
                                            ratings: 4777,
                                            releaseDate: "July 15, 2015",
                                            cost1: 24.00,
                                            cost2: 24.00,
                                            usedCount: 37,
                                            usedPrice: 20.82,
                                            newCount: 8,
                                            newPrice: 24.00,
                                            listPrice: 39.95,
                                            description: `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.`,
                                            subheaderText: "Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.",
                                            subheaderText2: "",
                                            subheaderText3: "Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.",
                                            subheaderText4: "These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.",
                                            contents: ["189 programming interview questions, ranging from the basics to the trickiest algorithm problems.", "A walk-through of how to derive each solution, so that you can learn how to get there yourself.", "Hints on how to solve each of the 189 questions, just like what you would get in a real interview.",
                                            "Five proven strategies to tackle algorithm questions, so that you can solve questions you haven't seen.", "Extensive coverage of essential topics, such as big O time, data structures, and core algorithms.",
                                            "A behind the scenes look at how top companies like Google and Facebook hire developers.", "Techniques to prepare for and ace the soft side of the interview: behavioral questions.", "For interviewers and companies: details on what makes a good interview question and hiring process."]
                                        }}}>
                                        <img class="search-result-img" id="search-result-img-2" src={searchResult2}></img>
                                    </Link>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-1">
                                    <Link to={{
                                            pathname: "/product",
                                            state: {
                                                productCount: productCount,
                                                name: "Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition",
                                                author: "Gayle Laakmann McDowell",
                                                bestseller: "Job Interviewing",
                                                images: [cracking],
                                                ratings: 4777,
                                                releaseDate: "July 15, 2015",
                                                cost1: 24.00,
                                                cost2: 24.00,
                                                usedCount: 37,
                                                usedPrice: 20.82,
                                                newCount: 8,
                                                newPrice: 24.00,
                                                listPrice: 39.95,
                                                description: `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.`,
                                                subheaderText: "Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.",
                                                subheaderText2: "",
                                                subheaderText3: "Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.",
                                                subheaderText4: "These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.",
                                                contents: ["189 programming interview questions, ranging from the basics to the trickiest algorithm problems.", "A walk-through of how to derive each solution, so that you can learn how to get there yourself.", "Hints on how to solve each of the 189 questions, just like what you would get in a real interview.",
                                                "Five proven strategies to tackle algorithm questions, so that you can solve questions you haven't seen.", "Extensive coverage of essential topics, such as big O time, data structures, and core algorithms.",
                                                "A behind the scenes look at how top companies like Google and Facebook hire developers.", "Techniques to prepare for and ace the soft side of the interview: behavioral questions.", "For interviewers and companies: details on what makes a good interview question and hiring process."]
                                            }}} class="react-router-link">
                                        <span class="search-results-inner-col-header">Cracking the Coding Interview: 189 Programming Questions and Solutions</span>
                                    </Link>
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
                                <Link to={{
                                    pathname: "/product",
                                    state: {
                                        productCount: productCount,
                                        name: "System Design Interview – An insider's guide, Second Edition",
                                        author: "Alex Xu",
                                        bestseller: "Assembly Language Programming",
                                        images: [productMain, productSmall1, productSmall2],
                                        ratings: 500,
                                        releaseDate: "June 12, 2020",
                                        cost1: 24.99,
                                        cost2: 24.99,
                                        usedCount: 2,
                                        usedPrice: 32.98,
                                        newCount: 3,
                                        newPrice: 24.99,
                                        listPrice: 39.99,
                                        description: `The system design interview is considered to be the most complex and most difficult technical job 
                                        interview by many. This book provides a step-by-step framework on how to tackle a system design
                                        question. It includes many real-world examples to illustrate the systematic approach with detailed
                                        steps that you can follow.`,
                                        optionalDescription: "What's inside?",
                                        subheaderText: "- An insider’s take on what interviewers really look for and why.",
                                        subheaderText2: "- A 4-step framework for solving any system design interview question.",
                                        subheaderText3: "- 16 real system design interview questions with detailed solutions.",
                                        subheaderText4: "- 188 diagrams to visually explain how different systems work.",
                                        contents: ["Chapter 1: Scale From Zero To Millions Of Users", "Chapter 2: Back-of-the-envelope Estimation", "Chapter 3: A Framework For System Design Interviews",
                                        "Chapter 4: Design A Rate Limiter", "Chapter 5: Design Consistent Hashing", "Chapter 6: Design A Key-value Store", "Chapter 7: Design A Unique Id Generator In Distributed Systems",
                                        "Chapter 8: Design A Url Shortener", "Chapter 9: Design A Web Crawler", "Chapter 10: Design A Notification System", "Chapter 11: Design A News Feed System", "Chapter 12: Design A Chat System",
                                        "Chapter 13: Design A Search Autocomplete System", "Chapter 14: Design Youtube", "Chapter 15: Design Google Drive", "Chapter 16: The Learning Continues"]
                                    }}}>
                                    <img class="search-result-img" id="search-result-img-3" src={searchResult3}></img>
                                    </Link>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-2">
                                <Link to={{
                                    pathname: "/product",
                                    state: {
                                        productCount: productCount,
                                        name: "System Design Interview – An insider's guide, Second Edition",
                                        author: "Alex Xu",
                                        bestseller: "Assembly Language Programming",
                                        images: [productMain, productSmall1, productSmall2],
                                        ratings: 500,
                                        releaseDate: "June 12, 2020",
                                        cost1: 24.99,
                                        cost2: 24.99,
                                        usedCount: 2,
                                        usedPrice: 32.98,
                                        newCount: 3,
                                        newPrice: 24.99,
                                        listPrice: 39.99,
                                        description: `      
                                        The system design interview is considered to be the most complex and most difficult technical job 
                                        interview by many. This book provides a step-by-step framework on how to tackle a system design
                                        question. It includes many real-world examples to illustrate the systematic approach with detailed
                                        steps that you can follow.`,
                                        optionalDescription: "What's inside?",
                                        subheaderText: "- An insider’s take on what interviewers really look for and why.",
                                        subheaderText2: "- A 4-step framework for solving any system design interview question.",
                                        subheaderText3: "- 16 real system design interview questions with detailed solutions.",
                                        subheaderText4: "- 188 diagrams to visually explain how different systems work.",
                                        contents: ["Chapter 1: Scale From Zero To Millions Of Users", "Chapter 2: Back-of-the-envelope Estimation", "Chapter 3: A Framework For System Design Interviews",
                                        "Chapter 4: Design A Rate Limiter", "Chapter 5: Design Consistent Hashing", "Chapter 6: Design A Key-value Store", "Chapter 7: Design A Unique Id Generator In Distributed Systems",
                                        "Chapter 8: Design A Url Shortener", "Chapter 9: Design A Web Crawler", "Chapter 10: Design A Notification System", "Chapter 11: Design A News Feed System", "Chapter 12: Design A Chat System",
                                        "Chapter 13: Design A Search Autocomplete System", "Chapter 14: Design Youtube", "Chapter 15: Design Google Drive", "Chapter 16: The Learning Continues"]
                                    }}}class="react-router-link">
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
                                <Link to={{
                                        pathname: "/product",
                                        state: {
                                            productCount: productCount,
                                            name: "Elements of Programming Interviews in Python: The Insiders' Guide",
                                            author: "Adnan Aziz",
                                            bestseller: "Genetic Algorithms",
                                            images: [pythonLarge, pythonSmall1, pythonSmall2],
                                            ratings: 446,
                                            releaseDate: "September 15, 2016",
                                            cost1: 35.96,
                                            cost2: 35.96,
                                            usedCount: 14,
                                            usedPrice: 19.97,
                                            newCount: 13,
                                            newPrice: 35.96,
                                            listPrice: 39.95,
                                            description: `This is the Python version of our book. See the website for links to the C++ and Java version. Have you ever...`,
                                            subheaderText: "Wanted to work at an exciting futuristic company?",
                                            subheaderText2: "Struggled with an interview problem that could have been solved in 15 minutes?",
                                            subheaderText3: `If so, you need to read Elements of Programming Interviews (EPI).
                                            EPI is your comprehensive guide to interviewing for software development roles.
                                            The core of EPI is a collection of over 250 problems with detailed solutions. The problems are representative of interview questions asked at leading software companies. The problems are illustrated with 200 figures, 300 tested programs, and 150 additional variants.`,
                                            subheaderText4: `The book begins with a summary of the nontechnical aspects of interviewing, such as strategies for a great interview, common mistakes, perspectives from the other side of the table, tips on negotiating the best offer, and a guide to the best ways to use EPI. We also provide a summary of data structures, algorithms, and problem solving patterns.
                                            Coding problems are presented through a series of chapters on basic and advanced data structures, searching, sorting, algorithm design principles, and concurrency. Each chapter stars with a brief introduction, a case study, top tips, and a review of the most important library methods. This is followed by a broad and thought-provoking set of problems.`,
                                            contents: [""]
                                        }}}>
                                        <img class="search-result-img" id="search-result-img-3" src={searchResult4}></img>
                                    </Link>
                                </div>
                                <div class="search-results-inner-col-right" id="search-results-inner-col-right-row-3">
                                    <Link to={{
                                            pathname: "/product",
                                            state: {
                                                productCount: productCount,
                                                name: "Elements of Programming Interviews in Python: The Insiders' Guide",
                                                author: "Adnan Aziz",
                                                bestseller: "Genetic Algorithms",
                                                images: [pythonLarge, pythonSmall1, pythonSmall2],
                                                ratings: 446,
                                                releaseDate: "September 15, 2016",
                                                cost1: 35.96,
                                                cost2: 35.96,
                                                usedCount: 14,
                                                usedPrice: 19.97,
                                                newCount: 13,
                                                newPrice: 35.96,
                                                listPrice: 39.95,
                                                description: `This is the Python version of our book. See the website for links to the C++ and Java version. Have you ever...`,
                                                subheaderText: "Wanted to work at an exciting futuristic company?",
                                                subheaderText2: "Struggled with an interview problem that could have been solved in 15 minutes?",
                                                subheaderText3: `If so, you need to read Elements of Programming Interviews (EPI).
                                                EPI is your comprehensive guide to interviewing for software development roles.
                                                The core of EPI is a collection of over 250 problems with detailed solutions. The problems are representative of interview questions asked at leading software companies. The problems are illustrated with 200 figures, 300 tested programs, and 150 additional variants.`,
                                                subheaderText4: `The book begins with a summary of the nontechnical aspects of interviewing, such as strategies for a great interview, common mistakes, perspectives from the other side of the table, tips on negotiating the best offer, and a guide to the best ways to use EPI. We also provide a summary of data structures, algorithms, and problem solving patterns.
                                                Coding problems are presented through a series of chapters on basic and advanced data structures, searching, sorting, algorithm design principles, and concurrency. Each chapter stars with a brief introduction, a case study, top tips, and a review of the most important library methods. This is followed by a broad and thought-provoking set of problems.`,
                                                contents: [""]
                                            }}} class="react-router-link">
                                            <span class="search-results-inner-col-header">Elements of Programming Interviews in Python: The Insiders' Guide</span>
                                        </Link>
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