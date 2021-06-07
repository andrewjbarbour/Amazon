import React, {useState} from 'react';
import './Account.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer'
import yourOrders from './account-your-orders.png';
import login from './account-security.png';
import prime from './account-prime.png';
import giftcard from './account-gift-card.png';


export function Account(){
    return(
        <div class="Account">
            <NavbarPrime />
            <section id="main-account-wrapper">
                <div id="main-account-ui-wrapper">
                    <h1 id="main-account-header">Your Account</h1>
                    <div id="top-account-ui-grid">
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Orders</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={login}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Login & Security</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={prime}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Prime</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={giftcard}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Gift cards</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Payments</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Profiles</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your devices and content</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Messages</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Archived orders</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Lists</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={yourOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Orders</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Account;