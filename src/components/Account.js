import React, {useState} from 'react';
import './Account.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer'
import yourOrders from './account-your-orders.png';
import login from './account-security.png';
import prime from './account-prime.png';
import giftcard from './account-gift-card.png';
import orders from './account-your-orders.png';
import payments from './account-payment.png';
import profiles from './account-profiles.png';
import devices from './account-devices.png';
import messages from './account-messages.jpg';
import archivedOrders from './account-archived-orders.png';
import lists from './account-lists.png';

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
                                    <span class="account-row-content">Edit login, name, and mobile number</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={prime}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Prime</h2>
                                    <span class="account-row-content">View benefits and payment settings</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell account-cell-2">
                            <div class="account-cell-row">
                                <img class="account-img" src={giftcard}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Gift cards</h2>
                                    <span class="account-row-content">View balance, redeem, or reload gift cards</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell account-cell-2">
                            <div class="account-cell-row account-cell-row-2">
                                <img class="account-img" src={payments}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Payments</h2>
                                    <span class="account-row-content">Manage payment methods and settings, view all transactions</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell account-cell-2">
                            <div class="account-cell-row">
                                <img class="account-img" src={profiles} id="account-profiles-img"></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Profiles</h2>
                                    <span class="account-row-content">Manage, add, or remove user profiles for personalized experiences</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={devices}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Manage your Amazon devices and digital content</h2>
                                    <span class="account-row-content">Track, return, or buy things again</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={messages}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Messages</h2>
                                    <span class="account-row-content">View messages to and from Amazon, sellers, and buyers</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={archivedOrders}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Archived orders</h2>
                                    <span class="account-row-content">View and manage your archived orders</span>
                                </div>
                            </div>
                        </div>
                        <div class="account-cell">
                            <div class="account-cell-row">
                                <img class="account-img" src={lists}></img>
                                <div class="account-row-content-wrapper">
                                    <h2 class="account-row-header">Your Lists</h2>
                                    <span class="account-row-content">View, modify, and share your lists, or create new ones</span>
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