import React, {useState, useEffect} from 'react';
import './SignIn.css';
import amazonlogo from './amazonlogo.png';

function SignIn(){
    return(
        <div class="signin">
             <img src={amazonlogo} alt="Amazon logo" id="amazon-logo"></img>
             <form class="signin-wrapper">
            <h1 id="signin-header">Sign-In</h1>
            <label for="email" id="email-label">Email or mobile phone number</label>
            <input name="email" id="email" required />
            <input value="Continue" name="continue" id="continue" type="submit" />
            <span id="privacy-policy">By continuing, you agree to Amazon's <a class="legal-link">Conditions of Use</a> and <a class="legal-link">Privacy Notice</a>.</span>
            
            <div class="wrap-collapsible" id="help">
                    <input id="collapsible" class="toggle" type="checkbox"/>
                    <label for="collapsible" class="lbl-toggle" id="need-help">Need help?</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <span class="help-content"><a>Forgot your password?</a></span>
                            <span class="help-content"><a>Other issues with Sign-In</a></span>
                        </div>
                    </div>
                </div> 
            
            </form>
            <h5 id="new-to-amazon">New to Amazon?</h5>
            <span id="create-account"><a>Create your Amazon account</a></span>
            <div id="xl-footer">
                <div id="footer-nav-wrapper">
                    <div class="footer-nav"><a>Conditions of Use</a></div>
                    <div class="footer-nav"><a>Privacy Notice</a></div>
                    <div class="footer-nav"><a>Help</a></div>
                </div>
                <span id="amazon-copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    );
};

export default SignIn;