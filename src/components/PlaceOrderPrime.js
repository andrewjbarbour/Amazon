import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PlaceOrderPrime.css';
import amazonLockerPin from './locker-pin.png';
import visaLogo from './visa.gif';
import securedSsl from './secured-ssl.png';
import checkoutProductImage from './checkout-product-image.jpg';
import amazonGiftButton from './amazon-gift-button.png';

export function PlaceOrderPrime({location}){
    const getShippingDate = () => {
        let shippingDate = new Date();
        shippingDate.setDate(shippingDate.getDate()+1);
        const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        return `${months[shippingDate.getMonth()]} ${shippingDate.getDate()}, ${shippingDate.getFullYear()}`;
    }

    const getShippingDay = () => {
        let shippingDate = new Date();
        shippingDate.setDate(shippingDate.getDate()+1);
        const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[shippingDate.getDay()]}, ${months[shippingDate.getMonth()]} ${shippingDate.getDate()}`;
    }

    const getAmazonDayShipping = () => {
        let shippingDate = new Date();
        const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        shippingDate.setDate(shippingDate.getDate()+(days.length-1-shippingDate.getDay()));
        return `${days[shippingDate.getDay()]}, ${months[shippingDate.getMonth()]} ${shippingDate.getDate()}`;
    }

    const getNoRushShippingDay = () => {
        let shippingDate = new Date();
        shippingDate.setDate(shippingDate.getDate()+6);
        const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[shippingDate.getDay()]}, ${months[shippingDate.getMonth()]} ${shippingDate.getDate()}`;
    }

    const openTooltip = () => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "inline-block";
      }
    
    const closeTooltip = () => {
        const tooltip = document.getElementById('expanded-free-returns-tooltip');
        tooltip.style.display = "none";
      }

    const handleScroll = () => {
        const placeOrderButtonTop = document.getElementById('place-order-button-top');
        if(placeOrderButtonTop){
            if(window.scrollY > 150){
                placeOrderButtonTop.style.position = "fixed";
                placeOrderButtonTop.style.marginLeft = "68.5%";
                placeOrderButtonTop.style.marginTop = "-3%";
            }
            else{
                placeOrderButtonTop.style.position = "relative";
                placeOrderButtonTop.style.marginLeft = "8%";
                placeOrderButtonTop.style.marginTop = "15px";
            }    
        }
    }

    const selectOptions = useState([]);
    for(let i = 1; i<10; i++){
        selectOptions.push( <option value={i}>{i}</option>);
    }

    const [price, setPrice] = useState(24.99);
    const [quantity, setQuantity] = useState(location.state.productCount);

    const getPrice = () => {
        return `\$${(quantity * price).toFixed(2)}`;
    }

    const getItemCount = () => {
        if(parseInt(quantity)===1){
            return "1 item";
        }
        else{
            return `${quantity} items`;
        }
        
    }

    const handleCartChange = (event) => {
        setQuantity(event.target.value);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      }, [handleScroll])
    

    return(
        <div class="PlaceOrderPrime">
            <header id="place-order-prime-header">
                <Link to={{
                    pathname: "/",
                    state: {productCount: quantity
                }}}>
                <i src='trans.png' id="amazon-prime-logo" name="amazon-prime-logo"></i>
                </Link>
                <h1>Checkout <span class="cart-item-parenthesis">(</span><a class="cart-item-count">{getItemCount()}</a><span class="cart-item-parenthesis">)</span></h1>
                <img name="secured-ssl-icon" id="secured-ssl-icon" alt="secured-ssl-icon" src={securedSsl} ></img>
            </header>
            <form id="place-order-prime-wrapper">
            <section id="place-order-prime-left-side">
                <section id="place-order-prime-row1-left">
                    <h3 id="place-order-prime-row1-number">1</h3>
                    <h3 id="place-order-prime-shipping-address-header"><strong>Shipping address</strong></h3>
                    <h3 id="place-order-prime-shipping-address">
                        Andrew Barbour<br/>
                        248 NE 55th Ave<br/>
                        Hillsboro, OR 97124<br/>
                        <a id="place-order-prime-add-delivery-instructions">Add delivery instructions</a>
                        <img src={amazonLockerPin} name="amazon-locker-pin" id="amazon-locker-pin" alt="amazon-locker-pin"></img>
                        <span id="free-pickup">Or FREE Pickup from <a class="free-pickup-link"> Amazon@DowntownPortland </a> or at an <a class="free-pickup-link"> AmazonLocker</a></span>
                    </h3>
                    <h3 id="place-order-prime-change-shipping-address">Change</h3>
                </section>
                <hr class="place-order-divider"></hr>
                <section id="place-order-prime-row2-left">
                    <h3 id="place-order-prime-row2-number">2</h3>
                    <h3 id="place-order-prime-payment-method-header"><strong>Payment method</strong></h3>
                    <div id="place-order-prime-payment-method-details">
                        <img id="card-logo" src={visaLogo}></img>
                        <span id="card-digits"><strong>Visa</strong> &#160;ending in 4392</span>
                        <span id="place-order-confirm-billing-address">
                            <a id="confirm-billing-address-link">Billing address</a>
                            : Same as shipping address.
                        </span>
                        <div class="wrap-collapsible">
                            <input id="collapsible" class="toggle" type="checkbox" />
                            <label for="collapsible" class="lbl-toggle" id="collapsible-label">
                                <object name="add-gift-card-tooltip-inner-icon" id="add-gift-card-tooltip-inner-icon" src="trans.png"></object>
                                Add a gift card or promotion code or voucher
                            </label>
                            <div class="collapsible-content">
                                <div id="place-order-collapsible-content-inner">
                                    <input name="add-discount" id="add-discount" placeholder="Enter code"></input>
                                    <button name="add-discount-button" id="add-discount-button">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 id="place-order-prime-change-payment-method">Change</h3>
                </section>
                <hr class="place-order-divider" id="place-order-prime-bottom-divider"></hr>
                <section id="place-order-prime-row3-left">
                    <h3 id="place-order-prime-row2-number">3</h3>
                    <h3 id="place-order-prime-review-items-header"><strong>Review items and shipping</strong></h3>
                </section>
                <section id="cart-items-box-inner">
                    <div id="amazon-day-alert">
                        <object id="amazon-day-alert-image-sprite" 
                             name="amazon-day-alert-image" 
                             alt="amazon-day-alert-image" 
                             src="./trans.png"></object>
                        <h5 id="amazon-day-alert-header">
                           <strong>Select FREE Amazon Day Delivery below to have orders delivered together in fewer boxes on a single day.</strong>
                        </h5>
                    </div>
                    <div>
                        <span id="delivery-date-header">Delivery Date: {getShippingDate()}</span>
                        <span id="delivery-date-countdown">If you order in the next 11 hours and 9 minutes (<a id="countdown-details">Details</a>)
                        <span id="amazon-delivery">Items shipped from Amazon.com</span>
                        </span>
                    </div>
                    <div id="cart-items-box-inner-columns-wrapper">
                        <div id="cart-items-box-inner-col-1">
                            <img id="checkout-item-image" name="checkout-item-image" src={checkoutProductImage}></img>
                        </div>
                        <div id="cart-items-box-inner-col-2">
                            <span id="place-order-cart-item-title"><strong>System Design Interview - An insider's guide, Second Edition</strong></span>
                            <span id="place-order-data-id">by Xu, Alex</span>
                            <span id="place-order-price">$24.99</span>
                            <object id="amazon-prime-mini-logo" name="amazon-prime-logo" alt="amazon-prime-logo" src="trans.jpeg"></object>
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
                            <span id="learn-more-link">Learn more about free returns</span>
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
                            <select id="cart-item-quantity-selector" onChange={handleCartChange}>
                                <option value="1" selected disabled hidden>Qty: 1</option>
                                {selectOptions}
                                <option value="10">10+</option>
                                <option value="0">Delete</option>
                            </select>
                            <span id="place-order-sold-by">Sold by: Amazon.com Services LLC</span>
                            <button name="gift-options-button" id="gift-options-button">
                                <img name="amazon-gift-button-image" 
                                     id="amazon-gift-button-image"
                                     alt="amazon-gift-button-image" 
                                     src={amazonGiftButton}>    
                                </img>
                                <span id="gift-button-label">Add gift options</span>
                            </button>
                        </div>
                        <div id="cart-items-box-inner-col-3">
                            <fieldset id="choose-delivery-option-fieldset">
                                <legend id="choose-delivery-option-header">Choose your Prime delivery option:</legend>
                                <input id="delivery-option-1" name="delivery-option" type="radio"></input>
                                <label for="delivery-option-1" name="delivery-option-1-label" id="delivery-option-1-label">{getShippingDay()}</label>
                                <span class="delivery-option-content">FREE Prime Delivery</span>
                                <input id="delivery-option-2" name="delivery-option" type="radio"></input>
                                <label for="delivery-option-2" name="delivery-option-2-label" id="delivery-option-2-label">{getAmazonDayShipping()}</label>
                                <span class="delivery-option-content">FREE Amazon Day Delivery</span>
                                <span class="delivery-option-secondary-content">Get your orders together in fewer boxes and deliveries each Saturday. <a class="delivery-option-link">Change Delivery Day</a></span>
                                <input id="delivery-option-3" name="delivery-option" type="radio"></input>
                                <label for="delivery-option-3" name="delivery-option-3-label" id="delivery-option-3-label">{getNoRushShippingDay()}</label>
                                <span class="delivery-option-content">FREE No-Rush Shipping</span>
                                <span class="delivery-option-secondary-content">Get a $1 reward for select digital purchases. One reward per purchase. <a class="delivery-option-link">Details</a></span>
                                
                                <div id="#delivery-option-secondary-block-wrapper">
                                    <span id="delivery-option-secondary-block-header">Or choose your Prime pickup option:</span>
                                    <span id="delivery-option-secondary-block-content">Pick up at Amazon@DowntownPortland (<a class="delivery-option-link">View Location</a>)</span>
                                    <br/>
                                    <input id="delivery-option-4" name="delivery-option" type="radio"></input>
                                    <label for="delivery-option-4" name="delivery-option-4-label" id="delivery-option-4-label">{getShippingDay()}</label>
                                    <span class="delivery-option-content">FREE One-Day Delivery</span>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </section>
                <section id="place-order-button-bottom-wrapper">
                    <input value="Place your order" name="place-order-button" id="place-order-button-bottom" type="submit" />
                    <div id="order-total-bottom-wrapper">
                        <table id="order-total-table">
                            <tr>
                                <td>Order Total: &#160;$17.49</td>
                            </tr>
                        </table>
                        <span id="place-order-button-label-bottom">By placing your order, you agree to Amazon's <a class="place-order-link">privacy notice</a> and <a class="place-order-link">conditions of use</a>.</span>
                    </div>
                </section>
            </section>
            <section id="place-order-button-top">
                        <input value="Place your order" name="place-order-button" id="place-order-button" type="submit" />
                        <span id="place-order-button-label">By placing your order, you agree to Amazon's <a class="place-order-link">privacy notice</a> and <a class="place-order-link">conditions of use</a>.</span>
                        <hr class="place-order-small-divider"></hr>
                        <h3 id="order-summary-header">Order Summary</h3>
                        <table id="order-summary-table">
                            <tr>
                                <td>Items:</td>
                                <td class="order-summary-table-right-cell">{getPrice()}</td>
                            </tr>
                            <tr id="order-summary-table-row1">
                                <td>Shipping & handling:</td>
                                <td class="order-summary-table-right-cell">&#160;&#160;$0.00</td>
                                
                            </tr>
                            <tr id="order-summary-table-row2">
                                <td><hr class="place-order-extra-small-divider"></hr></td>
                            </tr>
                            <tr id="order-summary-table-row3">
                                <td>Total before tax:</td>
                                <td class="order-summary-table-right-cell">{getPrice()}</td>
                            </tr>
                            <tr>
                                <td>Estimated tax to be collected:</td>
                                <td class="order-summary-table-right-cell">&#160;&#160;$0.00</td>
                            </tr>
                        </table>
                        <hr class="place-order-small-divider"></hr>
                        <table id="order-total-table">
                            <tr>
                                <td>Order Total:</td>
                                <td id="order-total-right-cell">{getPrice()}</td>
                            </tr>
                        </table>
                        <div id="shipping-costs-box">
                            <div id="shipping-costs-wrapper">
                                <span id="place-order-shipping-costs-header"><a>How are shipping costs calculated?</a></span>
                                <span id="place-order-prime-shipping-benefits">Prime shipping benefits have been applied to your order.</span>
                            </div>
                        </div>   
            </section>
            </form>
            <section id="place-order-prime-footer">
                <div id="gradient-footer">
                </div>
                    <span id="place-order-prime-top-footer-content">Need help? Check our <a class="place-order-prime-footer-link">Help pages</a> or <a class="place-order-prime-footer-link">contact us</a></span>
                
                <span>For an item sold by Amazon.com: When you click the "Place your order" button, we'll send you an email message acknowledging 
                      receipt of your order. Your contract to purchase an item will not be complete until we send you an email notifying you that the item has been shipped.</span>
                <span><a class="place-order-prime-footer-link">Important information about sales tax you may owe in your state</a></span>
                <span>You may return new, unopened merchandise in original condition within 30 days of delivery. Exceptions and restrictions apply. See Amazon.com's <a class="place-order-prime-footer-link">Returns Policy.</a></span>     
                <span>Need to add more items to your order? Continue shopping on the <a class="place-order-prime-footer-link">Amazon.com homepage.</a></span>   
            </section>
        </div>
    )
}

export default PlaceOrderPrime;
