import React, {useState} from 'react';
import NavbarPrime from './NavbarPrime'
import Footer from './Footer'
import './OrderHistory.css'

export function OrderHistory(){
    return(
        <div class="OrderHistory">
            <NavbarPrime />
            <Footer />
        </div>
    )
}

export default OrderHistory