import React, { useState, useEffect} from 'react';
import './Checkout.css';
import amazonCheckoutShippingPayment from './amazoncheckoutshippingpayment.png';

function Checkout(){

    return(
        
        <div class="Checkout">
                <img src={amazonCheckoutShippingPayment} alt="Amazon checkout shipping and payment icon"></img>
            <form id="Checkout-form" action="submission.html" method="GET">
                <h1 id="select-shipping-address">Select a shipping address</h1>
                <h2>Add a new address</h2>
                <label for="Country/Region"><strong>Country/Region</strong></label>
                <div id="country-dropdown">
                <select name="Country/Region" class="Country">
                    <option value="United States">United States</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                </select>
                </div>
                <div class="main-checkout-form">
                    <label for="name"><strong>Full name (First and Last name)</strong></label>
                    <input name="name" id="name" required/>
                    <label for="address1"><strong>Address line 1</strong></label>
                    <input name="address1" id="address1" placeholder="Street address, P.O. Box, company name" required/>
                    <label for="address2"><strong>Address line 2</strong></label>
                    <input name="address2" id="address2" placeholder="Apartment, suite, unit, building, floor" required/>
                    <label for="city"><strong>City</strong></label>
                    <input name="city" id="city" required/>
                    <label for="state"><strong>State / Province / Region</strong></label>
                    <input name="state" id="state" required/>
                    <label for="zipcode"><strong>Zip Code</strong></label>
                    <input name="zipcode" id="zipcode" required/>
                    <label for="phone-number" minlength="9" maxlength="9"><strong>Phone number </strong></label>
                    <input name="phone-number" id="phone-number" required/>
                    
                    <span>May be used to assist delivery</span>
                    <h3><strong>Add delivery instructions (optional)</strong></h3>
                    <label for="delivery-instructions"><strong>Do we need additional instructions to find this address?</strong></label>
                    <textarea name="delivery-instructions" id="delivery-instructions" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"></textarea>
                    <label for="security-instructions"><strong>Do we need a security code or call box number to access this building?</strong></label>
                    <input name="security-instructions" id="security-instructions" placeholder="1234"/>
                    <span name="weekend-delivery" id="weekend-delivery"><strong>Weekend delivery</strong></span>
                </div>
                <div class="wrap-collapsible">
                    <input id="collapsible" class="toggle" type="checkbox"/>
                    <label for="collapsible" class="lbl-toggle">I can receive packages on Saturday and Sunday</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                           
                                <p>I can receive packages on</p>
                                <div class="checkbox-wrapper">
                                    <input name="saturday" id="saturday" type="checkbox"/>
                                    <label for="saturday" id="saturday-label"><strong>Saturday</strong></label>
                                    <input name="sunday" id="sunday" type="checkbox"/>
                                    <label for="sunday" id="sunday-label"><strong>Sunday</strong></label>
                                </div>
                            
                                
                        </div>
                    </div>
                </div> 
                <div id="default-address-wrapper">
                    <input name="default-address" id="default-address" type="checkbox"/>
                    <label for="default-address" id="default-address-label"><strong>Use as my default address.</strong></label>
                </div>
                <hr></hr>
                <span class="correct-address"><strong>Make sure your address is correct</strong></span>
                <span class="correct-address">If the address contains typos or other errors, your package may be undeliverable.</span>
                <div class="correct-address-wrapper">
                    <span id="tips">
                        <a class="correct-address tips" id="tip1">Tips for entering addresses</a>
                        <a class="correct-address tips" id="divider">|</a>
                        <a class="correct-address tips" id="tip2">APO/FPO address tips</a>
                    </span>
                </div>
                <input name="add-address" id="add-address" type="submit" value="Add address" /> 
            </form>
            <div id="checkout-footer">
            <span id="gift-card">Do you have a gift card or promotional code? We’ll ask you to enter your claim code when it’s time to pay.</span>
                <div id="checkout-footer-nav-wrapper">
                    <div class="checkout-footer-nav"><a>Conditions of Use</a></div>
                    <div class="checkout-footer-nav"><a>Privacy Notice</a></div>
                    <span class="checkout-footer-nav" id="checkout-amazon-copyright">© 1996-2021, Amazon.com, Inc.</span>
                </div>
                
            </div>
        </div>
    )
};

export default Checkout;