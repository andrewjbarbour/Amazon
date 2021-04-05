import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './AddPaymentModal.css';

const modalElement = document.getElementById('modal-root');

export function AddPaymentModal({ children, fade = false, defaultOpened = false, defaultTooltip = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const [isTooltipOpen, setIsTooltipOpen] = useState(defaultTooltip);

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  const openTooltip = () => {
    setIsTooltipOpen(true);
    const tooltip = document.getElementById('expanded-payment-tooltip');
    tooltip.style.display = "block";
  }

  const closeTooltip = () => {
    setIsTooltipOpen(false);
    const tooltip = document.getElementById('expanded-payment-tooltip');
    tooltip.style.display = "none";
  }

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className="modal-overlay" onClick={close} />
       
        <div className="modal-body">{children}
          <header id="payment-modal-header">
            <div id="modal-header">
              <h2 id="add-credit-modal-header"><strong>Add a credit or debit card</strong></h2>
              <span role="button" className="modal-close"  onClick={close}>
                <object src="./trans.png" className="modal-close-image"> </object>
              </span> 
            </div>
            <div id="add-credit-modal-content">
              <div id="add-credit-card-left">
                <div id="card-number-wrapper">
                  <label for="card-number" id="card-number-label"><strong>Card number</strong></label>
                  <input name="card-number" id="card-number"></input>
                </div>
                <div id="name-on-card-wrapper">
                  <label for="name-on-card" id="name-on-card-label"><strong>Name on card</strong></label>
                  <input name="name-on-card" id="name-on-card"></input>
                </div>
                <div id="expiration-date-wrapper">
                <label for="expiration-month" id="expiration-date-label"><strong>Expiration date</strong></label>
                  <select name="expiration-month" id="expiration-month">
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
                  <select name="expiration-year" id="expiration-year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                  </select>
                </div>
                <div name="default-payment-wrapper" id="default-payment-wrapper">
                  <input name="default-payment" id="default-payment" type="checkbox"></input>
                  <label name="default-payment-label" id="default-payment-label" for="default-payment">
                    Set as default payment method.
                  </label>
                  <span id="payment-tooltip" onClick={openTooltip}>What's this?</span>
                  <div id="expanded-payment-tooltip">
                  <div id="tooltip-header">
                  <h2 id="tooltip-header-label"><strong>What's this?</strong></h2>
                    <span role="button" className="tooltip-close"  onClick={closeTooltip}>
                    <object src="./trans.png" className="modal-close-image"> </object>
                    </span> 
                  </div>
                  <span id="tooltip-content">We'll make this your default payment method for all Amazon services. For example, 1-Click purchases, Amazon Pay, Monthly Payments, and Amazon memberships, like Prime.</span>
                  </div>
                </div>
              </div>
              <div id="add-card-divider"></div>
              <div id="add-credit-card-right">
                <span name="accepted-cards" id="accepted-cards">Amazon accepts all major credit and debit cards:</span>
                <object name="payment-sprite-row1a" id="payment-sprite-row1a" src="img_trans.gif" width="1" height="1"></object>
                <object name="payment-sprite-row1b" id="payment-sprite-row1b" src="img_trans.gif" width="1" height="1"></object>
                <object name="payment-sprite-row1c" id="payment-sprite-row1c" src="img_trans.gif" width="1" height="1"></object>
                <object name="payment-sprite-row1d" id="payment-sprite-row1d" src="img_trans.gif" width="1" height="1"></object>
                <object name="payment-sprite-row2a" id="payment-sprite-row2a" src="img_trans.gif"></object>
                <object name="payment-sprite-row2b" id="payment-sprite-row2b" src="img_trans.gif"></object>
                <object name="payment-sprite-row2c" id="payment-sprite-row2c" src="img_trans.gif"></object>
                <object name="payment-sprite-row2d" id="payment-sprite-row2d" src="img_trans.gif"></object>
              </div>
            </div>
            
          </header>
          <footer id="payment-modal-footer" name="payment-modal-footer">
            <button name="add-your-card" id="add-your-card" type="submit" value="add-your-card">Add your card</button>
            <button name="add-your-card-cancel" id="add-your-card-cancel" type="submit" value="add-your-card-cancel" onClick={close}>Cancel</button>
          </footer>
       
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(AddPaymentModal);