import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrancy } from "../utils/money.js";

export function renderPeymentSummary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem)=>{
   const product = getProduct(cartItem.productId);
   productPriceCents += product.priceCents * cartItem.quantity;

   const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents += deliveryOption.priceCents
  });
   
  const totalBeforeTaxeCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxeCents * 0.1;
  const totalCents = totalBeforeTaxeCents + taxCents;

  let cartQuantity = 0;

  cart.forEach((cartItem)=>{
   cartQuantity += cartItem.quantity;
  });

  const paymentSummaryHTML = `
  <div class="payment-summary-title">
    Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (${cartQuantity}):</div>
    <div class="payment-summary-money">
    $${formatCurrancy(productPriceCents)}
    </div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">
    $${formatCurrancy(shippingPriceCents)}
    </div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">
    $${formatCurrancy(totalBeforeTaxeCents)}
    </div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">
    $${formatCurrancy(taxCents)}
    </div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">
    $${formatCurrancy(totalCents)}
    </div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
  `;
  document.querySelector('.js-payment-summary')
  .innerHTML = paymentSummaryHTML;
  
}