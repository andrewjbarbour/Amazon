import React, { useRef } from 'react';
import AddPaymentModal from './AddPaymentModal.js';
import './Payment.css';
import amazonCheckoutShippingPayment from './amazoncheckoutshippingpayment.png';
import paycode from './paycode.png';
import amazonGiftCard from './amazon-gift-card.png';
import amazonStoreCard from './amazon-store-card.gif';
import personalCheckingAccount from './personal-checking-accounts.png';

function Payment() {
    const modal = useRef(null);

    return (
        <div class="Payment">
            <img src={amazonCheckoutShippingPayment} alt="Amazon checkout shipping and payment icon" id="checkout-header-image"></img>
            <form class="payment-wrapper">
                <h1>Select a payment method</h1>
                <section id="payment-method-hero-top">
                    <div id="payment-method-hero-inner-wrapper">
                    <object src="./trans.png" className="info-image"> </object>
                        <span id="payment-hero-text">Enter how you'd like to pay below, and we'll save it as an option.</span>
                    </div>
                </section>
                <section id="payment-method-continue-top">
                    <input value="Continue" name="payment-method-continue" id="payment-method-continue" type="submit" />
                    <label for="payment-method-continue" id="payment-continue-label">You can review this order before it's final.</label>
                </section>
                <h2>Add a Payment Method</h2>
                <hr class="payment-divider"></hr>
                <section id="payment-method-row1">
                    <div id="payment-method-row1-left">
                        <h3 id="payment-method-row1-header">Credit or debit cards</h3>
                        <span id="payment-method-row1-description">Amazon accepts major credit and debit cards.</span>

                        <button onClick={() => modal.current.open()} name="add-card" id="add-card" type="button">Add a credit or debit card</button>
                        <AddPaymentModal ref={modal}>
                        </AddPaymentModal>
                    </div>
                    <div id="payment-method-row1-right">
                        <object name="payment-sprite-row1a" id="payment-sprite-row1a" src="img_trans.gif" width="1" height="1"></object>
                        <object name="payment-sprite-row1b" id="payment-sprite-row1b" src="img_trans.gif" width="1" height="1"></object>
                        <object name="payment-sprite-row1c" id="payment-sprite-row1c" src="img_trans.gif" width="1" height="1"></object>
                        <object name="payment-sprite-row1d" id="payment-sprite-row1d" src="img_trans.gif" width="1" height="1"></object>
                        <object name="payment-sprite-row2a" id="payment-sprite-row2a" src="img_trans.gif"></object>
                        <object name="payment-sprite-row2b" id="payment-sprite-row2b" src="img_trans.gif"></object>
                        <object name="payment-sprite-row2c" id="payment-sprite-row2c" src="img_trans.gif"></object>
                        <object name="payment-sprite-row2d" id="payment-sprite-row2d" src="img_trans.gif"></object>
                    </div>
                    <hr class="payment-divider-bottom"></hr>
                </section>
                <section id="payment-method-row2">
                    <div id="payment-method-row2-left">
                        <h3 id="payment-method-row2-header">Pay with cash at a location near you</h3>
                        <span id="payment-method-row2-description">Order ships after you pay</span>
                        <div class="wrap-collapsible">
                            <input id="collapsible" class="toggle" type="checkbox" />
                            <label for="collapsible" class="lbl-toggle">Set up Amazon Paycode</label>
                            <div class="collapsible-content">
                                <div class="content-inner">
                                    <ol>
                                        <li>Reserve your order online now</li>
                                        <li>Pay at location in cash within 48 hours</li>
                                        <li>Your order will ship after you pay</li>
                                    </ol>
                                    <span id="payment-id-required">ID required at location</span>
                                    <label for="paycode-full-name"
                                        id="paycode-full-name-label"
                                        name="paycode-full-name-label">
                                        Full name (must match ID)
                                    </label>
                                    <input id="paycode-full-name" name="paycode-full-name" placeholder="First and last name"></input>
                                    <label for="date-of-birth-day" id="date-of-birth-label" name="date-of-birth-label">Date of birth</label>
                                    <div id="date-of-birth-wrapper" name="date-of-birth-wrapper">
                                        <select id="date-of-birth-month" name="date-of-birth-month">
                                            <option value="" disabled selected hidden>Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select id="date-of-birth-day" name="date-of-birth-day">
                                            <option value="" disabled selected hidden>Day</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select id="date-of-birth-year" name="date-of-birth-year">
                                            <option value="Year" disabled selected hidden>Year</option>
                                            <option value="1980">1980</option>
                                            <option value="1981">1981</option>
                                            <option value="1982">1982</option>
                                            <option value="1983">1983</option>
                                            <option value="1984">1984</option>
                                            <option value="1985">1985</option>
                                            <option value="1986">1986</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                            <option value="1995">1995</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                        </select>
                                        <label id="paycode-current-residence" for="current-residence-selector">Current residence</label>
                                        <button id="current-residence-selector">Current residence</button>
                                        <span>Your information is being collected and will be shared with Western Union for the purpose of processing your payment.</span>
                                        <input value="Continue" name="continue" id="continue" type="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="payment-method-row2-right">
                        <img src={paycode} id="amazon-paycode" alt="amazon-paycode"></img>
                    </div>
                </section>
                <hr class="payment-divider-bottom"></hr>
                <section id="payment-method-row3">
                    <div id="payment-method-row3-left">
                        <h3 id="payment-method-row3-header">Gift Cards, Vouchers & Promotional Codes</h3>
                        <div class="gift-card-wrap-collapsible">
                            <input id="gift-card-collapsible" class="toggle" type="checkbox" />
                            <label for="gift-card-collapsible" class="lbl-toggle">Enter a gift card, voucher, or promotional code</label>
                            <div class="gift-card-collapsible-content">
                            </div>
                        </div>
                    </div>
                    <div id="payment-method-row3-right">
                        <img src={amazonGiftCard} id="amazon-gift-card" name="amazon-gift-card" alt="Amazon Gift Card"></img>
                    </div>
                </section>
                <hr class="payment-divider-bottom"></hr>
                <section id="payment-method-row4">
                    <div id="payment-method-row4-left">
                        <h3 id="payment-method-row4-header">Amazon.com Store Card</h3>
                        <span id="payment-method-row4-description">Access to exclusive financing offers. No annual fee. Zero fraud liability.</span>
                        <a id="store-card-learn-more">Learn More</a>
                    </div>
                    <div id="payment-method-row4-right">
                        <img src={amazonStoreCard} id="amazon-store-card" name="amazon-store-card" alt="Amazon Store Card"></img>
                    </div>
                </section>
                <hr class="payment-divider-bottom"></hr>
                <section id="payment-method-row5">
                    <div id="payment-method-row5-left">
                        <h3 id="payment-method-row5-header">Personal Checking Accounts</h3>
                        <span id="payment-method-row5-description">Use your US based personal checking account.</span>
                        <a id="personal-checking-learn-more">Learn More</a>
                        <button name="add-checking-account-button" id="add-checking-account-button" type="button">Add a personal checking account</button>
                    </div>
                    <div id="payment-method-row5-right">
                        <img src={personalCheckingAccount} id="personal-checking-account" name="personal-checking-account" alt="Personal Checking Account"></img>
                    </div>
                    <section id="payment-method-continue-bottom">
                        <input value="Continue" name="payment-method-continue" id="payment-method-continue" type="submit" />
                        <label for="payment-method-continue" id="payment-continue-label">You can review this order before it's final.</label>
                    </section>
                </section>
              
            </form>
            <div id="payment-footer">
            <span id="payment-help">Do you need help? Explore our <a>Help</a> pages or <a>contact us</a></span>
                <div id="payment-footer-nav-wrapper">
                    <div class="payment-footer-nav"><a>Conditions of Use</a></div>
                    <div class="payment-footer-nav"><a>Privacy Notice</a></div>
                    <span class="payment-footer-nav" id="payment-amazon-copyright">© 1996-2021, Amazon.com, Inc.</span>
                </div>
                
            </div>
        </div>

    );
}

export default Payment;