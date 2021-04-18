import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';
import Footer from './Footer';
import NavbarPrime from './NavbarPrime';
import fireTVStick from './fire-tv-stick-hero-banner.jpg';
import amazonFresh from './amazon-fresh-hero.jpg';
import amazonMusic from './amazon-music-hero.jpg';
import alexaWeather from './alexa-weather-hero.jpg';
import profileIcon from './profile-icon.jpeg';
import frontPageAd from './front-page-ad-2.jpeg';
import recentOrderImage from './recent-order-image.jpg';
import specialsImage from './card-1-1-image.jpg';
import deal from './deal-of-the-day.jpg';
import alexaSprite from './alexa-image.png';
import fpVideoPlayer from './fp-video-player-image.jpg';
import primeWardrobe1 from './prime-wardrobe-1.jpg';
import primeWardrobe2 from './prime-wardrobe-2.jpg';
import primeWardrobe3 from './prime-wardrobe-3.jpg';
import primeWardrobe4 from './prime-wardrobe-4.jpg';
import amazonHandmade from './amazon-handmade.jpg';
import relatedItems1 from './related-items-1.jpg';
import relatedItems2 from './related-items-2.jpg';
import relatedItems3 from './related-items-3.jpg';
import relatedItems4 from './related-items-4.jpg';
import relatedItems5 from './related-items-5.jpg';
import relatedItems6 from './related-items-6.jpg';
import relatedItems7 from './related-items-7.jpg';
import relatedItems8 from './related-items-8.jpg';
import relatedItems9 from './related-items-9.jpg';
import relatedItems10 from './related-items-10.jpg';
import relatedItems11 from './related-items-11.jpg';
import relatedItems12 from './related-items-12.jpg';
import relatedItems13 from './related-items-13.jpg';
import relatedItems14 from './related-items-14.jpg';
import relatedItems15 from './related-items-15.jpg';
import relatedItems16 from './related-items-16.jpg';
import relatedItems17 from './related-items-17.jpg';
import relatedItems18 from './related-items-18.jpg';
import reviewPurchaseImg from './review-purchase-img.jpg';
import candyBestsellers from './shop-candy-best-sellers.jpg';
import overstock from './discount-overstock-items.jpg';
import createoasis1 from './create-an-oasis-1.jpg';
import createoasis2 from './create-an-oasis-2.jpg';
import createoasis3 from './create-an-oasis-3.jpg';
import createoasis4 from './create-an-oasis-4.jpg';
import inspiredItems1 from './inspired-browsing-1.jpg';
import inspiredItems2 from './inspired-browsing-2.jpg';
import inspiredItems3 from './inspired-browsing-3.jpg';
import inspiredItems4 from './inspired-browsing-4.jpg';
import inspiredItems5 from './inspired-browsing-5.jpg';
import inspiredItems6 from './inspired-browsing-6.jpg';
import inspiredItems7 from './inspired-browsing-7.jpg';
import inspiredItems8 from './inspired-browsing-8.jpg';
import inspiredItems9 from './inspired-browsing-9.jpg';
import inspiredItems10 from './inspired-browsing-10.jpg';
import inspiredItems11 from './inspired-browsing-11.jpg';
import inspiredItems12 from './inspired-browsing-12.jpg';
import inspiredItems13 from './inspired-browsing-13.jpg';
import inspiredItems14 from './inspired-browsing-14.jpg';
import inspiredItems15 from './inspired-browsing-15.jpg';
import inspiredItems16 from './inspired-browsing-16.jpg';
import books1 from './books-you-may-like-1.jpg';
import books2 from './books-you-may-like-2.jpg';
import books3 from './books-you-may-like-3.jpg';
import books4 from './books-you-may-like-4.jpg';
import books5 from './books-you-may-like-5.jpg';
import books6 from './books-you-may-like-6.jpg';
import books7 from './books-you-may-like-7.jpg';
import books8 from './books-you-may-like-8.jpg';
import books9 from './books-you-may-like-9.jpg';
import books10 from './books-you-may-like-10.jpg';
import books11 from './books-you-may-like-11.jpg';
import books12 from './books-you-may-like-12.jpg';
import books13 from './books-you-may-like-13.jpg';
import books14 from './books-you-may-like-14.jpg';
import books15 from './books-you-may-like-15.jpg';
import books16 from './books-you-may-like-16.jpg';
import books17 from './books-you-may-like-17.jpg';
import books18 from './books-you-may-like-18.jpg';
import popularBrands1 from './popular-brands-1.jpg';
import popularBrands2 from './popular-brands-2.jpg';
import popularBrands3 from './popular-brands-3.jpg';
import popularBrands4 from './popular-brands-4.jpg';
import popularBrands5 from './popular-brands-5.jpg';
import popularBrands6 from './popular-brands-6.jpg';
import popularBrands7 from './popular-brands-7.jpg';
import popularBrands8 from './popular-brands-8.jpg';
import popularBrands9 from './popular-brands-9.jpg';
import popularBrands10 from './popular-brands-10.jpg';
import popularBrands11 from './popular-brands-11.jpg';
import popularBrands12 from './popular-brands-12.jpg';
import amazonMusicMerch from './amazon-music-merch-shop.jpg';
import warmUpOutside from './warm-up-outside.jpg';
import mensShoes1 from './mens-shoes-1.jpg';
import mensShoes2 from './mens-shoes-2.jpg';
import mensShoes3 from './mens-shoes-3.jpg';
import mensShoes4 from './mens-shoes-4.jpg';
import treasureTruck from './treasure-truck.jpg';
import homeOffice1 from './home-office-1.jpg';
import homeOffice2 from './home-office-2.jpg';
import homeOffice3 from './home-office-3.jpg';
import homeOffice4 from './home-office-4.jpg';
import personalCare1 from './personal-care-1.jpg';
import personalCare2 from './personal-care-2.jpg';
import personalCare3 from './personal-care-3.jpg';
import personalCare4 from './personal-care-4.jpg';
import personalCare5 from './personal-care-5.jpg';
import personalCare6 from './personal-care-6.jpg';
import personalCare7 from './personal-care-7.jpg';
import personalCare8 from './personal-care-8.jpg';
import personalCare9 from './personal-care-9.jpg';
import personalCare10 from './personal-care-10.jpg';
import personalCare11 from './personal-care-11.jpg';
import personalCare12 from './personal-care-12.jpg';
import personalCare13 from './personal-care-13.jpg';
import personalCare14 from './personal-care-14.jpg';
import personalCare15 from './personal-care-15.jpg';
import personalCare16 from './personal-care-16.jpg';
import personalCare17 from './personal-care-17.jpg';
import personalCare18 from './personal-care-18.jpg';
import springForward1 from './spring-forward-1.jpg';
import springForward2 from './spring-forward-2.jpg';
import springForward3 from './spring-forward-3.jpg';
import springForward4 from './spring-forward-4.jpg';
import dealsFourStar from './deals-four-star.jpg';
import easterBrunch from './easter-brunch.jpg';
import mostLoved1 from './most-loved-1.jpg';
import mostLoved2 from './most-loved-2.jpg';
import mostLoved3 from './most-loved-3.jpg';
import mostLoved4 from './most-loved-4.jpg';
import recommendedDeals1 from './recommended-deals-1.jpg';
import recommendedDeals2 from './recommended-deals-2.jpg';
import recommendedDeals3 from './recommended-deals-3.jpg';
import recommendedDeals4 from './recommended-deals-4.jpg';
import recommendedDeals5 from './recommended-deals-5.jpg';
import recommendedDeals6 from './recommended-deals-6.jpg';
import recommendedDeals7 from './recommended-deals-7.jpg';
import recommendedDeals8 from './recommended-deals-8.jpg';
import recommendedDeals9 from './recommended-deals-9.jpg';
import recommendedDeals10 from './recommended-deals-10.jpg';
import recommendedDeals11 from './recommended-deals-11.jpg';
import recommendedDeals12 from './recommended-deals-12.jpg';
import recommendedDeals13 from './recommended-deals-13.jpg';
import recommendedDeals14 from './recommended-deals-14.jpg';
import facemasks1 from './face-masks-1.jpg';
import facemasks2 from './face-masks-2.jpg';
import facemasks3 from './face-masks-3.jpg';
import facemasks4 from './face-masks-4.jpg';
import videoExperience1 from './video-experience-1.jpg';
import videoExperience2 from './video-experience-2.jpg';
import videoExperience3 from './video-experience-3.jpg';
import videoExperience4 from './video-experience-4.jpg';
import premiumCosmetics from './premium-cosmetics.jpg';
import trendDecor from './trend-decor.jpg';
import videoGames1 from './video-games-1.jpg';
import videoGames2 from './video-games-2.jpg';
import videoGames3 from './video-games-3.jpg';
import videoGames4 from './video-games-4.jpg';
import videoGames5 from './video-games-5.jpg';
import videoGames6 from './video-games-6.jpg';
import videoGames7 from './video-games-7.jpg';
import videoGames8 from './video-games-8.jpg';
import videoGames9 from './video-games-9.jpg';
import videoGames10 from './video-games-10.jpg';
import videoGames11 from './video-games-11.jpg';
import videoGames12 from './video-games-12.jpg';
import videoGames13 from './video-games-13.jpg';
import videoGames14 from './video-games-14.jpg';
import moreBooks1 from './more-books-1.jpg';
import moreBooks2 from './more-books-2.jpg';
import moreBooks3 from './more-books-3.jpg';
import moreBooks4 from './more-books-4.jpg';
import moreBooks5 from './more-books-5.jpg';
import moreBooks6 from './more-books-6.jpg';
import moreBooks7 from './more-books-7.jpg';
import moreBooks8 from './more-books-8.jpg';
import moreBooks9 from './more-books-9.jpg';
import moreBooks10 from './more-books-10.jpg';
import moreBooks11 from './more-books-11.jpg';
import moreBooks12 from './more-books-12.jpg';
import moreBooks13 from './more-books-13.jpg';
import moreBooks14 from './more-books-14.jpg';
import moreBooks15 from './more-books-15.jpg';
import moreBooks16 from './more-books-16.jpg';
import moreBooks17 from './more-books-17.jpg';
import moreBooks18 from './more-books-18.jpg';

export function FrontPage({location}){
    const [carouselSlides] = useState([fireTVStick, amazonFresh, amazonMusic, alexaWeather]);
    const [seeMoreSlides] = useState([relatedItems1, relatedItems2, relatedItems3, relatedItems4, 
        relatedItems5, relatedItems6, relatedItems7, relatedItems8, relatedItems9, relatedItems10, 
        relatedItems11, relatedItems12, relatedItems13, relatedItems14, relatedItems15, relatedItems16, 
        relatedItems17, relatedItems18]);  
    const [inspiredSlides] = useState([inspiredItems1, inspiredItems2, inspiredItems3, inspiredItems4, 
        inspiredItems5, inspiredItems6, inspiredItems7, inspiredItems8, inspiredItems9, inspiredItems10, 
        inspiredItems11, inspiredItems12, inspiredItems13, inspiredItems14, inspiredItems15, inspiredItems16]);
    const [bookSlides] = useState([books1, books2, books3, books4, books5, books6, books7, books8,
        books9, books10, books11, books12, books13, books14, books15, books16, books17, books18]);
    const [popularBrandsSlides] = useState([popularBrands1, popularBrands2, popularBrands3, popularBrands4, popularBrands5, 
        popularBrands6, popularBrands7, popularBrands8, popularBrands9, popularBrands10, popularBrands11, popularBrands12])
    const [personalCareSlides] = useState([personalCare1, personalCare2, personalCare3, personalCare4, personalCare5, personalCare6,
        personalCare7, personalCare8, personalCare9, personalCare10, personalCare11, personalCare12, personalCare13, personalCare14,
        personalCare15, personalCare16, personalCare17, personalCare18]);
    const [recommendedDealsSlides] = useState([recommendedDeals1, recommendedDeals2, recommendedDeals3, recommendedDeals4, recommendedDeals5,
        recommendedDeals6, recommendedDeals7, recommendedDeals8, recommendedDeals9, recommendedDeals10, recommendedDeals11, recommendedDeals12, 
        recommendedDeals13, recommendedDeals14]);
    const [videoGamesSlides] = useState([videoGames1, videoGames2, videoGames3, videoGames4, videoGames5, videoGames6,
        videoGames7, videoGames8, videoGames9, videoGames10, videoGames11, videoGames12, videoGames13, videoGames14])
    const [moreBooksSlides] = useState([moreBooks1, moreBooks2, moreBooks3, moreBooks4, moreBooks5, moreBooks6,
        moreBooks7, moreBooks8, moreBooks9, moreBooks10, moreBooks11, moreBooks12, moreBooks13, moreBooks14, moreBooks15,
        moreBooks16, moreBooks17, moreBooks18]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentRelSlide, setCurrentRelSlide] = useState([0]);
    const [currentInspiredSlide, setCurrentInspiredSlide] = useState([0]);
    const [currentBookSlide, setCurrentBookSlide] = useState([0]);
    const [currentPopularBrandsSlide, setCurrentPopularBrandsSlide] = useState([0]);
    const [currentPersonalCareSlide, setCurrentPersonalCareSlide] = useState([0]);
    const [currentRecommendedDealsSlide, setCurrentRecommendedDealsSlide] = useState([0]);
    const [currentVideoGamesSlide, setCurrentVideoGamesSlide] = useState([0]);
    const [currentMoreBooksSlide, setCurrentMoreBooksSlide] = useState([0]);

    const prevSlide = () =>{
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
            }
        else{
            setCurrentSlide(3);
        }
    }

    const nextSlide = () =>{
        if(currentSlide===3){
            setCurrentSlide(0);
        }
        else{
            setCurrentSlide(currentSlide+1);
        }
    }

    useEffect(() => {
        const slideChangeInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideChangeInterval);
    }, [currentSlide]);

    const nextRelSlide = () =>{
        if(currentRelSlide===0){
            setCurrentRelSlide(1);
            }
        else{
            setCurrentRelSlide(0);
        }
    }

    const nextInspiredSlide = () =>{
        if(currentInspiredSlide===0){
            setCurrentInspiredSlide(1);
            }
        else{
            setCurrentInspiredSlide(0);
        }
    }

    const nextBookSlide = () =>{
        if(currentBookSlide===0){
            setCurrentBookSlide(1);
        }
        else{
            setCurrentBookSlide(0);
        }
    }

    const nextPopularBrandsSlide = () =>{
        const popularBrandsImg6 = document.getElementById("popular-brands-img-6");
        if(currentPopularBrandsSlide===0){
            setCurrentPopularBrandsSlide(1);
            popularBrandsImg6.style.marginTop = "50px";
        }
        else{
            setCurrentPopularBrandsSlide(0);
            popularBrandsImg6.style.marginTop = "100px";
        }
    }

    const nextPersonalCareSlide = () =>{
        if(currentPersonalCareSlide===0){
            setCurrentPersonalCareSlide(1);
        }
        else{
            setCurrentPersonalCareSlide(0);
        }
    }

    const nextRecommendedDealsSlide = () =>{
        if(currentRecommendedDealsSlide===0){
            setCurrentRecommendedDealsSlide(1);
        }
        else{
            setCurrentRecommendedDealsSlide(0);
        }
    }

    const nextVideoGamesSlide = () =>{
        if(currentVideoGamesSlide===0){
            setCurrentVideoGamesSlide(1);
        }
        else{
            setCurrentVideoGamesSlide(0);
        }
    }

    const nextMoreBooksSlide = () =>{
        if(currentMoreBooksSlide===0){
            setCurrentMoreBooksSlide(1);
        }
        else{
            setCurrentMoreBooksSlide(0);
        }
    }


    return(
        <div class="FrontPage">
            <NavbarPrime productCount={location.state.productCount}/>
            <section id="front-page-carousel">
                <i id="left-hero-carousel-arrow" name="left-hero-carousel-arrow" alt="left-hero-carousel-arrow"  onClick={prevSlide}></i>
                <img id="current-carousel-image" name="current-carousel-image" alt={currentSlide} src={carouselSlides[currentSlide]}></img>
                <i id="right-hero-carousel-arrow" name="right-hero-carousel-arrow" alt="right-hero-carousel-arrow" onClick={nextSlide}></i>
            </section>
            <section id="cardUI">

                <section id="cardUI-row1">
                    <div id="row-1-card-1">
                        <img id="fp-profile-icon" name="fp-profile-icon" alt="fp-profile-icon" src={profileIcon}></img>
                        <div id="fp-card-user-greeting">
                            <h2 class="fp-card-header" id="user-greeting-header">Hi, Andrew</h2>
                            <span id="customer-since">Customer since 2012</span>
                            <div id="card-1-1-ui-body">
                                <span id="recent-order-text">Your recent order</span>
                                <img id="recent-order-image" name="recent-order-image" alt="recent-order-image" src={recentOrderImage} ></img>
                                <a id="see-your-orders-link">See your orders</a>
                            </div>
                        </div>
                    </div>
                    <div id="row-1-card-2">
                        <div id="card-1-2-ui-body">
                            <h2 class="fp-card-header" id="specials-header">Spring picks just for you</h2>
                            <img id="card-1-2-image" name="card-1-1-image" alt="card-1-1-image" src={specialsImage}></img>
                            <a id="try-personal-shopper-link">Try personal shopper</a>
                        </div>
                    </div>
                    <div id="row-1-card-3">
                        <div id="card-1-3-ui-body">
                            <h2 class="fp-card-header" id="deal-of-the-day-header">Deal of the Day</h2>
                            <img class="fp-deal" name="fp-deal" alt="fp-deal" src={deal}></img>
                            <span class="fp-deal-caption"><span class="price-superscript">$</span>19<span class="price-superscript">99</span> - $199<span class="price-superscript">99</span></span>
                            <span class="fp-deal-description">HyperX Headsets, Keyboards, and Mice</span>
                            <a id="see-all-deals-link">See all deals</a>
                        </div>
                    </div>
                    <div id="row-1-card-4">
                        <div id="card-1-4-ui-body">
                            <h2 class="fp-card-header" id="alexa-header">"Alexa, set the temperature to 72 degrees."</h2>
                            <img id="alexa-sprite" name="alexa-sprite" alt="alexa-sprite" src={alexaSprite}></img>
                            <a id="shop-ecobee-link">Shop ecobee with Alexa</a>
                        </div>
                    </div>
                    <img id="front-page-ad" name="front-page-ad" alt="front-page-ad" src={frontPageAd}></img>
                </section>
                <section id="card-UI-row2">
                    <div id="row-2-card-1">
                        <object id="fp-video-player-background" alt="trans.png"></object>
                        <img id="fp-video-player" name="fp-video-player" alt="fp-video-player" src={fpVideoPlayer}></img>
                        <span id="video-player-overlay-header">Video: Recommended for you</span>
                        <span class="video-player-overlay-subheader">Alias Season 1</span>
                        <span class="video-player-overlay-subheader" id="start-watching-subheader">Start Watching</span>
                    </div>
                    <div id="row-2-card-2">
                        <h2 class="fp-card-header" id="card-2-2-header">Try Prime Wardrobe</h2>
                        <div id="prime-wardrobe-img-container">
                            <img id="prime-wardrobe-img-1" class="prime-wardrobe-img" name="prime-wardrobe-1" alt="prime-wardrobe-image-1" src={primeWardrobe1}></img>
                           
                            <img id="prime-wardrobe-img-2" class="prime-wardrobe-img" name="prime-wardrobe-2" alt="prime-wardrobe-image-2" src={primeWardrobe2}></img>
                            <span class="fp-image-label" id="fp-image-label-1">Women</span>
                            <span class="fp-image-label" id="fp-image-label-2">Men</span>
                            <img id="prime-wardrobe-img-3" class="prime-wardrobe-img" name="prime-wardrobe-3" alt="prime-wardrobe-image-3" src={primeWardrobe3}></img>
                            
                            <img id="prime-wardrobe-img-4" class="prime-wardrobe-img" name="prime-wardrobe-4" alt="prime-wardrobe-image-4" src={primeWardrobe4}></img>
                            <span class="fp-image-label" id="fp-image-label-3">Girls</span>
                            <span class="fp-image-label" id="fp-image-label-4">Boys</span>
                        </div>
                            <a id="prime-wardrobe-link" class="fp-card-link">Try before you buy</a>
                    </div>
                    <div id="row-2-card-3">
                        <h2 class="fp-card-header" id="card-2-3-header">Support local makers</h2>
                        <img id="amazon-handmade-img" name="amazon-handmage-img" alt="Support Local Makers" src={amazonHandmade}></img>
                        <a id="amazon-handmade-link" class="fp-card-link">See more on Handmade</a>
                    </div>
                </section>
                <section id="card-UI-row3" class="full-row-card">
                    <div id="row-3-card">
                        <h2 class="fp-card-header" id="row-3-card-header">Related to items you've viewed</h2>
                        <a class="fp-card-link" id="row-3-card-header-link">See more</a>
                        <div id="related-items-carousel">
                            <div id="left-rel-item-carousel-button" class="rel-item-carousel-button" onClick={nextRelSlide}>
                                <i id="left-rel-item-carousel-arrow" name="left-rel-item-carousel-arrow" alt="left-rel-item-carousel-arrow" ></i>
                            </div>
                            <img id="related-item-1-img" name="related-item-1-img" alt="related-item-1-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[0] : seeMoreSlides[9]}></img>
                            <img id="related-item-2-img" name="related-item-2-img" alt="related-item-2-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[1] : seeMoreSlides[10]}></img>
                            <img id="related-item-3-img" name="related-item-3-img" alt="related-item-3-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[2] : seeMoreSlides[11]}></img>
                            <img id="related-item-4-img" name="related-item-4-img" alt="related-item-4-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[3] : seeMoreSlides[12]}></img>
                            <img id="related-item-5-img" name="related-item-5-img" alt="related-item-5-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[4] : seeMoreSlides[13]}></img>
                            <img id="related-item-6-img" name="related-item-6-img" alt="related-item-6-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[5] : seeMoreSlides[14]}></img>
                            <img id="related-item-7-img" name="related-item-7-img" alt="related-item-7-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[6] : seeMoreSlides[15]}></img>
                            <img id="related-item-8-img" name="related-item-8-img" alt="related-item-8-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[7] : seeMoreSlides[16]}></img>
                            <img id="related-item-9-img" name="related-item-9-img" alt="related-item-9-img" class="related-item-img" src={currentRelSlide === 0 ? seeMoreSlides[8] : seeMoreSlides[17]}></img>
                            <div id="right-rel-item-carousel-button" class="rel-item-carousel-button" onClick={nextRelSlide}>
                                <i id="right-rel-item-carousel-arrow" name="right-rel-item-carousel-arrow" alt="right-rel-item-carousel-arrow"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="card-UI-row4" class="full-row-card"> 
                    <div id="row-4-card">
                        <h2 class="fp-card-header" id="row-4-card-header">Inspired by your shopping trends</h2>
                        <div id="inspired-items-carousel" class="fade-in-carousel">
                                <div class="fade-in-carousel-button-wrapper">
                                    <div id="left-inspired-item-carousel-button" class="inspired-item-carousel-button" onClick={nextInspiredSlide}>
                                        <i id="left-inspired-item-carousel-arrow" name="left-inspired-item-carousel-arrow" alt="left-inspired-item-carousel-arrow" ></i>
                                    </div>
                                </div>
                                <img id="inspired-item-1-img" name="inspired-item1-img" alt="inspired-item1-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[0] : inspiredSlides[8]}></img>
                                <img id="inspired-item-2-img" name="inspired-item2-img" alt="inspired-item2-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[1] : inspiredSlides[9]}></img>
                                <img id="inspired-item-3-img" name="inspired-item-3-img" alt="inspired-item3-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[2] : inspiredSlides[10]}></img>
                                <img id="inspired-item-4-img" name="inspired-item-4-img" alt="inspired-item4-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[3] : inspiredSlides[11]}></img>
                                <img id="inspired-item-5-img" name="inspired-item-5-img" alt="inspired-item5-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[4] : inspiredSlides[12]}></img>
                                <img id="inspired-item-6-img" name="inspired-item-6-img" alt="inspired-item6-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[5] : inspiredSlides[13]}></img>
                                <img id="inspired-item-7-img" name="inspired-item-7-img" alt="inspired-item7-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[6] : inspiredSlides[14]}></img>
                                <img id="inspired-item-8-img" name="inspired-item-8-img" alt="inspired-item8-img" class="inspired-item-img" src={currentInspiredSlide === 0 ? inspiredSlides[7] : inspiredSlides[15]}></img>
                                <div class="fade-in-carousel-button-wrapper">
                                    <div id="right-inspired-item-carousel-button" class="inspired-item-carousel-button" onClick={nextInspiredSlide}>
                                        <i id="right-inspired-item-carousel-arrow" name="right-inspired-item-carousel-arrow" alt="right-inspired-item-carousel-arrow"></i>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <section id="card-UI-row5" class="four-row-card"> 
                    <div id="row-5-card-1">
                       <h2 class="fp-card-header" id="row-5-card-1-header">Review your purchase</h2>
                       <img id="review-your-purchase-img" name="review-your-purchase-img" src={reviewPurchaseImg}></img>
                       <div id="star-rating-icon-wrapper">
                        <object id="star-rating-icon" name="star-rating-icon" alt="star-rating-icon" src="./trans.png"></object>
                        <object id="star-rating-icon" name="star-rating-icon" alt="star-rating-icon" src="./trans.png"></object>
                        <object id="star-rating-icon" name="star-rating-icon" alt="star-rating-icon" src="./trans.png"></object>
                        <object id="star-rating-icon" name="star-rating-icon" alt="star-rating-icon" src="./trans.png"></object>
                        <object id="star-rating-icon" name="star-rating-icon" alt="star-rating-icon" src="./trans.png"></object>
                       </div>
                       <a id="review-products-link" class="fp-card-link">See more products to review</a>
                    </div>
                    <div id="row-5-card-2">
                        <h2 class="fp-card-header" id="row-5-card-2-header">Create an oasis</h2>
                        <div id="create-oasis-img-container" class="four-image-card-container">
                            <img id="create-oasis-img-1" class="create-oasis-img" name="create-oasis-img-1" alt="create-oasis-img-1" src={createoasis1}></img>                   
                            <img id="create-oasis-img-2" class="create-oasis-img" name="create-oasis-img-2" alt="create-oasis-img-2" src={createoasis2}></img>
                            <img id="create-oasis-img-3" class="create-oasis-img" name="create-oasis-img-3" alt="create-oasis-img-3" src={createoasis3}></img>
                            <img id="create-oasis-img-4" class="create-oasis-img" name="create-oasis-img-4" alt="create-oasis-img-4" src={createoasis4}></img>
                        </div>
                            <a id="create-oasis-link" class="fp-card-link">Shop now</a>
                    </div>
                    <div id="row-5-card-3">
                        <h2 class="fp-card-header" id="row-5-card-3-header">Shop candy best sellers</h2>
                        <img id="candy-best-sellers-img" name="candy-best-sellers-img" alt="candy-best-sellers-img" src={candyBestsellers}></img>
                        <a id="candy-best-sellers-link" class="fp-card-link">See more</a>
                    </div>                  
                    <div id="row-5-card-4">
                        <h2 class="fp-card-header" id="row-5-card-4-header">Discounted overstock items</h2>
                        <img id="overstock-items-img" name="overstock-items-img" alt="overstock-items-img" src={overstock}></img>
                        <a id="shop-outlet-link" class="fp-card-link">Shop Outlet</a>
                    </div>
                </section>
                <section id="card-UI-row6" class="full-row-card">
                    <h2 class="fp-card-header" id="row-6-card-header">Books you may like</h2>
                    <div id="books-you-may-like-carousel" class="fade-in-carousel">
                                <div class="fade-in-carousel-button-wrapper">
                                    <div class="left-fade-in-carousel-button fade-in-carousel-button" id="left-book-carousel-button" onClick={nextBookSlide}>
                                        <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                                    </div>
                                </div>
                                <img id="book-carousel-img-1" name="book-carousel-img-1" alt="book-carousel-img-1" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[0] : bookSlides[9]}></img>
                                <img id="book-carousel-img-2" name="book-carousel-img-2" alt="book-carousel-img-2" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[1] : bookSlides[10]}></img>
                                <img id="book-carousel-img-3" name="book-carousel-img-3" alt="book-carousel-img-3" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[2] : bookSlides[11]}></img>
                                <img id="book-carousel-img-4" name="book-carousel-img-4" alt="book-carousel-img-4" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[3] : bookSlides[12]}></img>
                                <img id="book-carousel-img-5" name="book-carousel-img-5" alt="book-carousel-img-5" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[4] : bookSlides[13]}></img>
                                <img id="book-carousel-img-6" name="book-carousel-img-6" alt="book-carousel-img-6" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[5] : bookSlides[14]}></img>
                                <img id="book-carousel-img-7" name="book-carousel-img-7" alt="book-carousel-img-7" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[6] : bookSlides[15]}></img>
                                <img id="book-carousel-img-8" name="book-carousel-img-8" alt="book-carousel-img-8" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[7] : bookSlides[16]}></img>
                                <img id="book-carousel-img-9" name="book-carousel-img-9" alt="book-carousel-img-9" class="carousel-item-img book-carousel-img" src={currentBookSlide === 0 ? bookSlides[8] : bookSlides[17]}></img>
                                <div class="fade-in-carousel-button-wrapper">
                                    <div class="right-fade-in-carousel-button fade-in-carousel-button" id="right-book-carousel-button" onClick={nextBookSlide}>
                                        <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                                    </div>
                                </div>
                    </div>
                </section>
                <section id="card-UI-row7" class="full-row-card">
                    <h2 class="fp-card-header" id="row-7-card-header">Popular in brands you may like</h2>
                    <div id="popular-brands-carousel" class="fade-in-carousel">
                                <div class="fade-in-carousel-button-wrapper">
                                    <div class="left-fade-in-carousel-button fade-in-carousel-button" id="left-popular-brands-carousel-button" onClick={nextPopularBrandsSlide}>
                                        <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                                    </div>
                                </div>
                                <img id="popular-brands-img-1" name="popular-brands-img-1" alt="popular-brands-img-1" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[0] : popularBrandsSlides[6]}></img>
                                <img id="popular-brands-img-2" name="popular-brands-img-2" alt="popular-brands-img-2" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[1] : popularBrandsSlides[7]}></img>
                                <img id="popular-brands-img-3" name="popular-brands-img-3" alt="popular-brands-img-3" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[2] : popularBrandsSlides[8]}></img>
                                <img id="popular-brands-img-4" name="popular-brands-img-4" alt="popular-brands-img-4" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[3] : popularBrandsSlides[9]}></img>
                                <img id="popular-brands-img-5" name="popular-brands-img-5" alt="popular-brands-img-5" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[4] : popularBrandsSlides[10]}></img>
                                <img id="popular-brands-img-6" name="popular-brands-img-6" alt="popular-brands-img-6" class="popular-brands-img" src={currentPopularBrandsSlide === 0 ? popularBrandsSlides[5] : popularBrandsSlides[11]}></img>
                                <div class="fade-in-carousel-button-wrapper">
                                    <div class="right-fade-in-carousel-button fade-in-carousel-button" id="right-popular-brands-carousel-button" onClick={nextPopularBrandsSlide}>
                                        <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                                    </div>
                                </div>
                    </div>
                </section>
                <section id="card-UI-row8" class="full-row-card">
                    <img id="row8-banner-img" class="full-row-banner" src={amazonMusicMerch}></img>
                </section>
                <section id="card-UI-row9" class="four-row-card">
                    <div id="row-9-card-1">
                      <h2 class="fp-card-header" id="row-9-card-1-header">Your home office hub</h2>
                      <div class="labeled-four-img-container">
                            <img id="home-office-img-1" class="labeled-four-img" name="home-office-1" alt="home-office-image-1" src={homeOffice1}></img>
                           
                            <img id="home-office-img-2" class="labeled-four-img" name="home-office-2" alt="home-office-image-2" src={homeOffice2}></img>
                            <span class="four-image-label" id="home-office-label-1">Set up</span>
                            <span class="four-image-label" id="home-office-label-2">Conferencing</span>
                            <img id="home-office-img-3" class="labeled-four-img" name="home-office-3" alt="home-office-image-3" src={homeOffice3}></img>
                            
                            <img id="home-office-img-4" class="labeled-four-img" name="home-office-4" alt="home-office-image-4" src={homeOffice4}></img>
                            <span class="four-image-label" id="home-office-label-3">Organization</span>
                            <span class="four-image-label" id="home-office-label-4">Learn at home</span>
                        </div>
                            <a id="row-9-card-1-link" class="fp-card-link">Shop now</a>
                    </div>
                    <div id="row-9-card-2">
                        <h2 class="fp-card-header" id="row-9-card-2-header">Warm up outside</h2>
                        <img id="row-9-card-2-img" name="row-9-card-2-img" alt="row-9-card-2-img" src={warmUpOutside}></img>
                        <a id="row-9-card-2-link" class="fp-card-link">Shop fire pits & patio heaters</a>
                    </div>
                    <div id="row-9-card-3">
                        <h2 class="fp-card-header" id="row-9-card-3-header">Men's shoe edit</h2>
                        <div class="labeled-four-img-container">
                            <img id="mens-shoes-img-1" class="labeled-four-img" name="prime-wardrobe-1" alt="prime-wardrobe-image-1" src={mensShoes1}></img> 
                            <img id="mens-shoes-img-2" class="labeled-four-img" name="prime-wardrobe-2" alt="prime-wardrobe-image-2" src={mensShoes2}></img>
                            <span class="four-image-label" id="fp-image-label-1">Athletic sneakers</span>
                            <span class="four-image-label" id="fp-image-label-2">Retro sneakers</span>
                            <img id="mens-shoes-img-3" class="labeled-four-img" name="prime-wardrobe-3" alt="prime-wardrobe-image-3" src={mensShoes3}></img>    
                            <img id="mens-shoes-img-4" class="labeled-four-img" name="prime-wardrobe-4" alt="prime-wardrobe-image-4" src={mensShoes4}></img>
                            <span class="four-image-label" id="mens-shoes-image-label-3">Slip-ons</span>
                            <span class="four-image-label" id="mens-shoes-image-label-4">Sandals</span>
                        </div>
                            <a id="row-9-card-3-link" class="fp-card-link">Refresh your closet</a>
                    </div>                    
                    <div id="row-9-card-4">
                        <h2 class="fp-card-header" id="row-9-card-4-header">What's today's treasure?</h2>
                        <img id="row-9-card-4-img" name="row-9-card-4-img" alt="row-9-card-4-img" src={treasureTruck}></img>
                        <a id="row-9-card-4-link" class="fp-card-link">Discover Treasure Truck</a>
                    </div>
                </section>
                <section id="card-UI-row-10" class="full-row-card">
                     <h2 class="fp-card-header" id="row-7-card-header">Recommendations for you in Beauty & Personal Care</h2>
                    <div id="personal-care-carousel" class="fade-in-carousel">
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="left-fade-in-carousel-button fade-in-carousel-button" id="left-personal-care-carousel-button" onClick={nextPersonalCareSlide}>
                                <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                            </div>
                        </div>
                        <img id="personal-care-img-1" name="personal-care-img-1" alt="personal-care-img-1" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[0] : personalCareSlides[9]}></img>
                        <img id="personal-care-img-2" name="personal-care-img-2" alt="personal-care-img-2" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[1] : personalCareSlides[10]}></img>
                        <img id="personal-care-img-3" name="personal-care-img-3" alt="personal-care-img-3" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[2] : personalCareSlides[11]}></img>
                        <img id="personal-care-img-4" name="personal-care-img-4" alt="personal-care-img-4" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[3] : personalCareSlides[12]}></img>
                        <img id="personal-care-img-5" name="personal-care-img-5" alt="personal-care-img-5" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[4] : personalCareSlides[13]}></img>
                        <img id="personal-care-img-6" name="personal-care-img-6" alt="personal-care-img-6" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[5] : personalCareSlides[14]}></img>
                        <img id="personal-care-img-6" name="personal-care-img-6" alt="personal-care-img-6" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[6] : personalCareSlides[15]}></img>
                        <img id="personal-care-img-6" name="personal-care-img-6" alt="personal-care-img-6" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[7] : personalCareSlides[16]}></img>
                        <img id="personal-care-img-6" name="personal-care-img-6" alt="personal-care-img-6" class="personal-care-img" src={currentPersonalCareSlide === 0 ? personalCareSlides[8] : personalCareSlides[17]}></img>
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="right-fade-in-carousel-button fade-in-carousel-button" id="right-personal-care-carousel-button" onClick={nextPersonalCareSlide}>
                                <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="card-UI-row-11" class="four-row-card">
                <div id="row-11-card-1">
                      <h2 class="fp-card-header" id="row-11-card-1-header">Spring forward, for less</h2>
                      <div class="labeled-four-img-container">
                            <img id="spring-forward-img-1" class="labeled-four-img" name="spring-forward-1" alt="spring-forward-image-1" src={springForward1}></img>
                           
                            <img id="spring-forward-img-2" class="labeled-four-img" name="spring-forward-2" alt="spring-forward-image-2" src={springForward2}></img>
                            <span class="four-image-label" id="spring-forward-label-1">Kitchen</span>
                            <span class="four-image-label" id="spring-forward-label-2">Amazon Launchpad</span>
                            <img id="spring-forward-img-3" class="labeled-four-img" name="spring-forward-3" alt="spring-forward-image-3" src={springForward3}></img>
                            
                            <img id="spring-forward-img-4" class="labeled-four-img" name="spring-forward-4" alt="spring-forward-image-4" src={springForward4}></img>
                            <span class="four-image-label" id="spring-forward-label-3">Spring Fashion</span>
                            <span class="four-image-label" id="spring-forward-label-4">Cleaning & Organization</span>
                        </div>
                            <a id="row-11-card-1-link" class="fp-card-link">Shop spring into summer</a>
                    </div>
                    <div id="row-11-card-2">
                        <h2 class="fp-card-header" id="row-11-card-2-header">Deals 4 stars and up</h2>
                        <img id="row-11-card-2-img" name="row-11-card-2-img" alt="row-9-card-2-img" src={dealsFourStar}></img>
                        <span class="fp-deal-caption" id="four-star-deal-caption"><span class="price-superscript">$</span>12<span class="price-superscript">74</span> - $25<span class="price-superscript">99</span></span>
                            <span class="fp-deal-description" id="four-star-deal-description">CGK Unlimited 21 Inch Fitted Sheets</span>
                        <a id="row-11-card-2-link" class="fp-card-link">See all deals</a>
                    </div>
                    <div id="row-11-card-3">
                        <h2 class="fp-card-header" id="row-11-card-3-header">Customers' Most-Loved</h2>
                        <div class="labeled-four-img-container">
                            <img id="most-loved-img-1" class="labeled-four-img" name="most-loved-image-1" alt="most-loved-image-1" src={mostLoved1}></img> 
                            <img id="most-loved-img-2" class="labeled-four-img" name="most-loved-image-2" alt="most-loved-image-2" src={mostLoved2}></img>
                            <span class="four-image-label" id="most-loved-image-label-1">Men's</span>
                            <span class="four-image-label" id="most-loved-image-label-2">Women's</span>
                            <img id="most-loved-img-3" class="labeled-four-img" name="most-loved-image-3" alt="most-loved-image-3" src={mostLoved3}></img>    
                            <img id="most-loved-img-4" class="labeled-four-img" name="most-loved-image-4" alt="most-loved-image-4" src={mostLoved4}></img>
                            <span class="four-image-label" id="most-loved-image-label-3">Beauty</span>
                            <span class="four-image-label" id="most-loved-image-label-4">Home</span>
                        </div>
                            <a id="row-11-card-3-link" class="fp-card-link">See more</a>
                    </div>                    
                    <div id="row-11-card-4">
                        <h2 class="fp-card-header" id="row-11-card-4-header">Hop into Easter brunch</h2>
                        <img id="row-11-card-4-img" name="row-11-card-4-img" alt="row-11-card-4-img" src={easterBrunch}></img>
                        <a id="row-11-card-4-link" class="fp-card-link">Shop Fresh groceries</a>
                    </div>
                </section>
                <section id="card-UI-row-12" class="full-row-card">
                    <h2 class="fp-card-header" id="row-12-card-header">Recommended deals for you</h2>
                    <div id="recommended-deals-carousel" class="fade-in-carousel">
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="left-fade-in-carousel-button fade-in-carousel-button" id="left-recommended-deals-carousel-button" onClick={nextRecommendedDealsSlide}>
                                <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                            </div>
                        </div>
                        <img id="recommended-deals-img-1" name="recommended-deals-img-1" alt="recommended-deals-img-1" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[0] : recommendedDealsSlides[7]}></img>
                        <img id="recommended-deals-img-2" name="recommended-deals-img-2" alt="recommended-deals-img-2" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[1] : recommendedDealsSlides[8]}></img>
                        <img id="recommended-deals-img-3" name="recommended-deals-img-3" alt="recommended-deals-img-3" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[2] : recommendedDealsSlides[9]}></img>
                        <img id="recommended-deals-img-4" name="recommended-deals-img-4" alt="recommended-deals-img-4" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[3] : recommendedDealsSlides[10]}></img>
                        <img id="recommended-deals-img-5" name="recommended-deals-img-5" alt="recommended-deals-img-5" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[4] : recommendedDealsSlides[11]}></img>
                        <img id="recommended-deals-img-6" name="recommended-deals-img-6" alt="recommended-deals-img-6" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[5] : recommendedDealsSlides[12]}></img>
                        <img id="recommended-deals-img-6" name="recommended-deals-img-6" alt="recommended-deals-img-6" class="recommended-deals-img" src={currentRecommendedDealsSlide === 0 ? recommendedDealsSlides[6] : recommendedDealsSlides[13]}></img>
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="right-fade-in-carousel-button fade-in-carousel-button" id="right-recommended-deals-carousel-button" onClick={nextRecommendedDealsSlide}>
                                <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="card-UI-row-13">
                    <div id="row-13-card-1">
                        <h2 class="fp-card-header" id="row-13-card-1-header">Facemasks for $9.99</h2>
                        <div class="labeled-four-img-container">
                            <img id="facemasks-img-1" class="labeled-four-img" name="facemasks-1" alt="facemasks-image-1" src={facemasks1}></img>
                            <img id="facemasks-img-2" class="labeled-four-img" name="facemasks-2" alt="facemasks-image-2" src={facemasks2}></img>
                            <img id="facemasks-img-3" class="labeled-four-img" name="facemasks-3" alt="facemasks-image-3" src={facemasks3}></img>
                            <img id="facemasks-img-4" class="labeled-four-img" name="facemasks-4" alt="facemasks-image-4" src={facemasks4}></img>
                        </div>
                            <a id="row-13-card-1-link" class="fp-card-link">Shop adult & child packs</a>
                    </div>
                    <div id="row-13-card-2">
                    <h2 class="fp-card-header" id="row-11-card-3-header">Explore a video experience</h2>
                        <div class="labeled-four-img-container">
                            <img id="video-experience-img-1" class="labeled-four-img" name="video-experience-image-1" alt="video-experience-image-1" src={videoExperience1}></img> 
                            <img id="video-experience-img-2" class="labeled-four-img" name="video-experience-image-2" alt="video-experience-image-2" src={videoExperience2}></img>
                            <span class="four-image-label" id="video-experience-image-label-1">Toys</span>
                            <span class="four-image-label" id="video-experience-image-label-2">Tech & Gadgets</span>
                            <img id="video-experience-img-3" class="labeled-four-img" name="video-experience-image-3" alt="video-experience-image-3" src={videoExperience3}></img>    
                            <img id="video-experience-img-4" class="labeled-four-img" name="video-experience-image-4" alt="video-experience-image-4" src={videoExperience4}></img>
                            <span class="four-image-label" id="video-experience-image-label-3">Fitness & Outdoors</span>
                            <span class="four-image-label" id="video-experience-image-label-4">Home & Garden</span>
                        </div>
                            <a id="row-13-card-2-link" class="fp-card-link">Watch & shop more videos</a>
                    </div>
                    <div id="row-13-card-3">
                        <h2 class="fp-card-header" id="row-13-card-3-header">Premium cosmetics</h2>
                        <img id="row-13-card-3-img" name="row-13-card-3-img" alt="row-13-card-3-img" src={premiumCosmetics}></img>
                        <a id="row-13-card-3-link" class="fp-card-link">See more</a>
                    </div>                    
                    <div id="row-13-card-4">
                        <h2 class="fp-card-header" id="row-13-card-4-header">On trend décor in natural materials</h2>
                        <img id="row-13-card-4-img" name="row-13-card-4-img" alt="row-13-card-4-img" src={trendDecor}></img>
                        <a id="row-13-card-4-link" class="fp-card-link">Explore more</a>
                    </div>
                </section>
            </section>
            <section id="card-UI-row-14" class="full-row-card">
                <h2 class="fp-card-header" id="row-14-card-header">Most wished for in Video Games</h2>
                    <div id="video-games-carousel" class="fade-in-carousel">
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="left-fade-in-carousel-button fade-in-carousel-button" id="left-video-games-carousel-button" onClick={nextVideoGamesSlide}>
                                <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                            </div>
                        </div>
                    <img id="video-games-img-1" name="video-games-img-1" alt="video-games-img-1" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[0] : videoGamesSlides[7]}></img>
                    <img id="video-games-img-2" name="video-games-img-2" alt="video-games-img-2" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[1] : videoGamesSlides[8]}></img>
                    <img id="video-games-img-3" name="video-games-img-3" alt="video-games-img-3" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[2] : videoGamesSlides[9]}></img>
                    <img id="video-games-img-4" name="video-games-img-4" alt="video-games-img-4" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[3] : videoGamesSlides[10]}></img>
                    <img id="video-games-img-5" name="video-games-img-5" alt="video-games-img-5" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[4] : videoGamesSlides[11]}></img>
                    <img id="video-games-img-6" name="video-games-img-6" alt="video-games-img-6" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[5] : videoGamesSlides[12]}></img>
                    <img id="video-games-img-6" name="video-games-img-6" alt="video-games-img-6" class="video-games-img" src={currentVideoGamesSlide === 0 ? videoGamesSlides[6] : videoGamesSlides[13]}></img>
                    <div class="fade-in-carousel-button-wrapper" id="video-games-button-wrapper">
                        <div class="right-fade-in-carousel-button fade-in-carousel-button" id="right-video-games-carousel-button" onClick={nextVideoGamesSlide}>
                            <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section id="card-UI-row-15" class="full-row-card">
            <h2 class="fp-card-header" id="row-15-card-header">Books you may like</h2>
                    <div id="more-books-carousel" class="fade-in-carousel">
                        <div class="fade-in-carousel-button-wrapper">
                            <div class="left-fade-in-carousel-button fade-in-carousel-button" id="more-books-carousel-button" onClick={nextMoreBooksSlide}>
                                <i class="left-fade-in-carousel-arrow" name="left-fade-in-carousel-arrow" alt="left-fade-in-carousel-arrow" ></i>
                            </div>
                        </div>
                    <img id="more-books-img-1" name="more-books-img-1" alt="more-books-img-1" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[0] : moreBooksSlides[9]}></img>
                    <img id="more-books-img-2" name="more-books-img-2" alt="more-books-img-2" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[1] : moreBooksSlides[10]}></img>
                    <img id="more-books-img-3" name="more-books-img-3" alt="more-books-img-3" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[2] : moreBooksSlides[11]}></img>
                    <img id="more-books-img-4" name="more-books-img-4" alt="more-books-img-4" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[3] : moreBooksSlides[12]}></img>
                    <img id="more-books-img-5" name="more-books-img-5" alt="more-books-img-5" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[4] : moreBooksSlides[13]}></img>
                    <img id="more-books-img-6" name="more-books-img-6" alt="more-books-img-6" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[5] : moreBooksSlides[14]}></img>
                    <img id="more-books-img-6" name="more-books-img-6" alt="more-books-img-6" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[6] : moreBooksSlides[15]}></img>
                    <img id="more-books-img-6" name="more-books-img-6" alt="more-books-img-6" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[7] : moreBooksSlides[16]}></img>
                    <img id="more-books-img-6" name="more-books-img-6" alt="more-books-img-6" class="more-books-img" src={currentMoreBooksSlide === 0 ? moreBooksSlides[8] : moreBooksSlides[17]}></img>
                    <div class="fade-in-carousel-button-wrapper">
                        <div class="right-fade-in-carousel-button fade-in-carousel-button" id="more-books-deals-carousel-button" onClick={nextMoreBooksSlide}>
                            <i class="right-fade-in-carousel-arrow" name="right-fade-in-carousel-arrow" alt="right-fade-in-carousel-arrow"></i>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default FrontPage;