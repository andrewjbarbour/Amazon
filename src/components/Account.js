import React, {useState} from 'react';
import './Account.css';
import NavbarPrime from './NavbarPrime';
import Footer from './Footer'
import yourOrders from './account-your-orders.png';

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
                            </div>
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                        <div class="account-cell">
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Account;