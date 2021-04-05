import {React} from 'react';
import './Footer.css';

export function Footer(){
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return(
    <footer class="Footer">
        <footer id="back-to-top-footer" onClick={scrollToTop}>
            <span id="back-to-top-text">Back to top</span>
        </footer>
        <footer id="front-page-footer-main">
            <div id="front-page-footer-main-col-1">
                <span id="fp-footer-header-row">Get to Know Us</span>
                <span>Careers</span>
                <span>Blog</span>
                <span>About Amazon</span>
                <span>Sustainability</span>
                <span>Press Center</span>
                <span>Investor Relations</span>
                <span>Amazon Devices</span>
                <span>Amazon Tours</span>
            </div>
            <div id="front-page-footer-main-col-2">
                <span id="fp-footer-header-row">Make Money With Us</span>
                <span>Sell products on<br/> Amazon</span>
                <span>Sell apps on Amazon</span>
                <span>Become an Affiliate</span>
                <span>Advertise Your Products</span>
                <span>Self-Publish With Us</span>
                <span>Host an Amazon Hub</span>
                <span>See More Make Money<br/> With Us</span>
            </div>
            <div id="front-page-footer-main-col-3">
                <span id="fp-footer-header-row">Amazon Payment Products</span>
                <span>Amazon Rewards Visa <br/> Signature Cards</span>
                <span>Amazon.com Store Card</span>
                <span>Amazon.com Business Card</span>
                <span>Amazon.com Business Line of Credit</span>
                <span>Shop with Points</span>
                <span>Credit Card Marketplace</span>
                <span>Reload Your Balance</span>
                <span>Amazon.com Currency Converter</span>
            </div>
            <div id="front-page-footer-main-col-4">
                <span id="fp-footer-header-row">Let Us Help You</span>
                <span>Amazon and COVID-19</span>
                <span>Your Account</span>
                <span>Your Orders</span>
                <span>Shipping Rates & Policies</span>
                <span>Amazon Prime</span>
                <span>Returns & <br/>Replacement</span>
                <span>Manage Your Content <br/>and Devices</span>
                <span>Amazon.com Assistant</span>
                <span>Help</span>
            </div>
        </footer>
        <footer id="amazon-logo-footer">
            <object id="fp-footer-logo" name="fp-footer-logo" alt="fp-footer-logo" src="trans.png"></object>
            <div id="logo-footer-language-link">
                <object id="logo-footer-globe-icon" name="logo-footer-globe-icon" alt="logo-footer-globe-icon" src="trans.png"></object>
                <span id="logo-footer-language-text">English</span>
                <object id="directional-nav-arrows" name="directional-nav-arrows" alt="directional-nav-arrows" src="trans.png"></object>
            </div>
            <div id="logo-footer-region-link">
                <object id="logo-footer-flag-icon" name="logo-footer-flag-icon" alt="logo-footer-flag-icon" src="trans.png"></object>
                <span id="logo-footer-flag-text">United States</span>
            </div>
        </footer>
        <footer id="extended-bottom-fp-footer">
            <div id="extended-bottom-footer-grid">
                <div id="row-1-col-1">
                    <span class="grid-header-row">Amazon Music</span>
                    <span>Stream millions</span>
                    <span>of songs</span>
                </div>
                <div id="row-1-col-2">
                    <span class="grid-header-row">Amazon <br/>Advertising</span>
                    <span>Find, attract,</span>
                    <span>and</span>
                    <span>engage</span>
                    <span>customers</span>
                </div>
                <div id="row-1-col-3">
                    <span class="grid-header-row">Amazon Drive</span>
                    <span>Cloud Storage</span>
                    <span>from Amazon</span>
                </div>
                <div id="row-1-col-4">
                    <span class="grid-header-row">6pm</span>
                    <span>Score deals</span>
                    <span>on fashion brands</span>
                </div>
                <div id="row-1-col-5">
                    <span class="grid-header-row">Abe Books</span>
                    <span>Books, art</span>
                    <span>& collectibles</span>
                </div>
                <div id="row-1-col-6">
                    <span class="grid-header-row">ACX</span>
                    <span>Audiobook</span>
                    <span>Publishing</span>
                    <span>Made</span>
                    <span>Easy</span>
                </div>
                <div id="row-1-col-7">
                    <span class="grid-header-row">Alexa</span>
                    <span>Actionable</span>
                    <span>Analytics</span>
                    <span>for the Web</span>
                </div>
                <div id="row-2-col-1">
                    <span class="grid-header-row">Sell on Amazon</span>
                    <span>Start a Selling</span>
                    <span>Account</span>
                </div>
                <div id="row-2-col-2">
                    <span class="grid-header-row">Amazon <br/>Business</span>
                    <span>Everything For</span>
                    <span>Your Business</span>
                </div>
                <div id="row-2-col-3">
                    <span class="grid-header-row">Amazon Fresh</span>
                    <span>Groceries & More</span>
                    <span>Right to Your Door</span>
                </div>
                <div id="row-2-col-4">
                    <span class="grid-header-row">AmazonGlobal</span>
                    <span>Ship Orders</span>
                    <span>Internationally</span>
                </div>
                <div id="row-2-col-5">
                    <span class="grid-header-row">Home Services</span>
                    <span>Experienced Pros</span>
                    <span>Happiness</span>
                    <span>Guarantee</span>
                </div>
                <div id="row-2-col-6">
                    <span class="grid-header-row">Amazon Ignite</span>
                    <span>Sell your original</span>
                    <span>Digital</span>
                    <span>Educational</span>
                    <span>Resources</span>
                </div>
                <div id="row-2-col-7">
                    <span class="grid-header-row">Amazon Web <br/>Services</span>
                    <span>Scalable Cloud</span>
                    <span>Computing</span>
                    <span>Services</span>
                </div>
                <div id="row-3-col-1">
                    <span class="grid-header-row">Audible</span>
                    <span>Listen to Books &</span>
                    <span>Original</span>
                    <span>Audio</span>
                    <span>Performances</span>
                </div>
                <div id="row-3-col-2">
                    <span class="grid-header-row">Book <br/>Depository</span>
                    <span>Books With</span>
                    <span>Free</span>
                    <span>Delivery</span>
                    <span>Worldwide</span>
                </div>
                <div id="row-3-col-3">
                    <span class="grid-header-row">Box Office Mojo</span>
                    <span>Find Movie</span>
                    <span>Box Office Data</span>
                </div>
                <div id="row-3-col-4">
                    <span class="grid-header-row">ComiXology</span>
                    <span>Thousands of</span>
                    <span>Digital Comics</span>
                </div>
                <div id="row-3-col-5">
                    <span class="grid-header-row">DPReview</span>
                    <span>Digital</span>
                    <span>Photography</span>
                </div>
                <div id="row-3-col-6">
                    <span class="grid-header-row">East Dane</span>
                    <span>Designer Men's</span>
                    <span>Fashion</span>
                </div>
                <div id="row-3-col-7">
                    <span class="grid-header-row">Fabric</span>
                    <span>Sewing, Quilting</span>
                    <span>& Knitting</span>
                </div>
                <div id="row-4-col-1">
                    <span class="grid-header-row">Goodreads</span>
                    <span>Book reviews</span>
                    <span>& recommendations</span>
                </div>
                <div id="row-4-col-2">
                    <span class="grid-header-row">IMDb</span>
                    <span>Movies, TV</span>
                    <span>& Celebrities</span>
                </div>
                <div id="row-4-col-3">
                    <span class="grid-header-row">IMDb Pro</span>
                    <span>Get Info Entertainment</span>
                    <span>Professionals Need</span>
                </div>
                <div id="row-4-col-4">
                    <span class="grid-header-row">Kindle Direct <br/>Publishing</span>
                    <span>Indie Digital & Print</span>
                    <span>Publishing</span>
                    <span>Made Easy</span>
                </div>
                <div id="row-4-col-5">
                    <span class="grid-header-row">Amazon Photos</span>
                    <span>Unlimited Photo</span>
                    <span>Storage</span>
                    <span>Free With Prime</span>
                </div>
                <div id="row-4-col-6">
                    <span class="grid-header-row">Prime Video <br/>Direct</span>
                    <span>Video Distribution</span>
                    <span>Made Easy</span>
                </div>
                <div id="row-4-col-7">
                    <span class="grid-header-row">Shopbop</span>
                    <span>Designer</span>
                    <span>Fashion Brands</span>
                </div>
                <div id="row-5-col-1">
                    <span class="grid-header-row">Amazon <br/>Warehouse</span>
                    <span>Great Deals on</span>
                    <span>Quality Used</span>
                    <span>Products</span>
                </div>
                <div id="row-5-col-2">
                    <span class="grid-header-row">Whole Foods <br/>Market</span>
                    <span>America's</span>
                    <span>Healthiest</span>
                    <span>Grocery Store</span>
                </div>
                <div id="row-5-col-3">
                    <span class="grid-header-row">Woot!</span>
                    <span>Deals and</span>
                    <span>Shenanigans</span>
                </div>
                <div id="row-5-col-4">
                    <span class="grid-header-row">Zappos</span>
                    <span>Shoes &</span>
                    <span>Clothing</span>
                </div>
                <div id="row-5-col-5">
                    <span class="grid-header-row">Ring</span>
                    <span>Smart Home</span>
                    <span>Security Systems</span>
                </div>
                <div id="row-5-col-6">
                    <span class="grid-header-row">eero WiFi</span>
                    <span>Stream 4K Video</span>
                    <span>in Every Room</span>
                </div>
                <div id="row-5-col-7">
                    <span class="grid-header-row">Blink</span>
                    <span>Smart Security</span>
                    <span>for Every Home</span>
                </div>
                <div id="row-6-col-1">
                    <span class="grid-header-row"></span>
                </div>
                <div id="row-6-col-2">
                    <span class="grid-header-row">Neighbors <br/>App</span>
                    <span>Real-Time</span>
                    <span>Crime</span>
                    <span>& Safety Alerts</span>
                </div>
                <div id="row-6-col-3">
                    <span class="grid-header-row">Amazon Subscription Boxes</span>
                    <span>Top subscription boxes - right</span>
                    <span>to your door</span>
                </div>
                <div id="row-6-col-4">
                    <span class="grid-header-row">PillPack</span>
                    <span>Pharmacy Simplified</span>
                </div>
                <div id="row-6-col-5">
                    <span class="grid-header-row">Amazon <br/>Renewed</span>
                    <span>Like-new</span>
                    <span>products</span>
                    <span>you can trust</span>
                </div>
                <div id="row-6-col-6">
                    <span class="grid-header-row">Amazon Second <br/>Chance</span>
                    <span>Pass it on, trade it</span>
                    <span>in,</span>
                    <span>give it a second</span>
                    <span>life</span>
                </div>
                <div id="row-6-col-7">
                    <span></span>
                </div>
            </div>
        </footer>
        <footer id="bottom-fp-footer">
            <span id="bottom-fp-footer-conditions-of-use">Conditions of Use</span>
            <span id="bottom-fp-footer-privacy-notice">Privacy Notice</span>
            <span id="bottom-fp-footer-interest-based-ads">Interest-Based Ads</span>
            <span id="bottom-fp-footer-copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
        </footer>
    </footer>
    )
}

export default Footer;