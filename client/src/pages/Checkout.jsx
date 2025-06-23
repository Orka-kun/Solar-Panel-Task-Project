import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { loadStripe } from '@stripe/stripe-js';

  const Checkout = () => {
    const [stripe, setStripe] = useState(null);
    const [cardElement, setCardElement] = useState(null);
    const [quantity, setQuantity] = useState(4);
    const [amount, setAmount] = useState(2200);
    const [error, setError] = useState(null);
    
//WAITING FOR BACKEND DEPLOYMENT*******************************************************************************

    // useEffect(() => {
    //   const initializeStripeAndCsrf = async () => {
    //     try {
    //       console.log('Fetching CSRF token from /api/csrf-token');
    //       const csrfResponse = await axios.get('/api/csrf-token', { withCredentials: true });
    //       console.log('CSRF Response:', csrfResponse.data);
    //       const stripeInstance = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
    //       setStripe(stripeInstance);
    //       if (stripeInstance) {
    //         const elements = stripeInstance.elements();
    //         const card = elements.create('card');
    //         card.mount('#card-element');
    //         setCardElement(card);
    //       } else {
    //         setError('Failed to load Stripe');
    //       }
    //     } catch (err) {
    //       console.error('CSRF or Stripe Error:', err);
    //       setError('Error initializing Stripe or fetching CSRF: ' + err.message);
    //     }
    //   };
    //   initializeStripeAndCsrf();
    // }, []);
    // const handlePlaceOrder = async (event) => {
    //   event.preventDefault();
    //   if (!stripe || !cardElement) {
    //     setError('Stripe is not initialized');
    //     return;
    //   }

    //   const { token, error } = await stripe.createToken(cardElement);
    //   if (error) {
    //     setError(error.message);
    //   } else {
    //     try {
    //       const response = await axios.post('/api/place-order', {
    //         quantity,
    //         amount,
    //         stripeToken: token.id,
    //       }, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         withCredentials: true,
    //       });
    //       setError(response.data.message);
    //     } catch (err) {
    //       setError(err.response?.data?.message || 'An error occurred');
    //     }
    //   }
    // };
//WAITING FOR BACKEND DEPLOYMENT*******************************************************************************

    return (
      <div className="w-full p-6 bg-white shadow-lg rounded-lg pb-40">
        <div className="max-w-full mx-auto px-50">
          <h2 className="text-4xl font-bold mb-4">Checkout</h2>
          <div className='flex justify-between mb-20'>
            <p className="mb-4 text-2xl">Please fill out your details below. If you'd like your donation to be made<br/> public, you can add a message in the <b>"Additional Information"</b> section.</p>
            <p className='text-3xl text-center bg-[#6ba843] text-white px-6 py-4 rounded-4xl font-bold'>Understanding your<br/> tax-deduction donation</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-20">
            {/* Billing Details */}
            <div className="w-full md:w-1/2 border-t-4 border-cyan-500 px-10 pt-10">
              <h3 className="text-4xl font-bold mb-2">Billing details</h3>
              <form className="space-y-4">
                <div className='flex justify-between'>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First name *</label>
                    <input type="text" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm px-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last name *</label>
                    <input type="text" className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm px-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company name (optional)</label>
                  <input type="text" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country / Region *</label>
                  <select className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm">
                    <option>United States (US)</option>
                    <option>Bangladesh</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Street address *</label>
                  <input type="text" placeholder="House number and street name" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm pl-2 mb-3" />
                  <input type="text" placeholder="Apartment, Suit, Unite etc. (optional)" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm pl-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town / City *</label>
                  <input type="text" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State *</label>
                  <select className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm">
                    <option>Georgia</option>
                    <option>California</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP code *</label>
                  <input type="text" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone *</label>
                  <input type="tel" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address *</label>
                  <input type="email" className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm" />
                </div>
                <h3 className="text-5xl font-bold py-8 text-center">Additional information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Order notes (optional)</label>
                  <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-4" placeholder="Notes about your order, e.g. special notes for delivery"></input>
                </div>
              </form>
            </div>

            {/* Order and Payment */}
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-bold mb-2">Your order</h3>
              <div className="py-4 ">
                <div className="space-y-5 border border-gray-400 rounded-sm ">
                  <div className="flex justify-between font-bold border-b border-b-gray-400 border-t-4 border-cyan-500 px-8 py-4">
                    <span>PRODUCT</span>
                    <span>SUBTOTAL</span>
                  </div>
                  <div className="flex justify-between border-b border-b-gray-400 pb-4 px-8">
                    <span>Solar Panels x {quantity}</span>
                    <span>${amount}</span>
                  </div>
                  <div className="flex justify-between px-8">
                    <span>Lifetime Value (${amount * 8})</span>
                    <span>${amount}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t border-t-gray-400 py-4 px-8">
                    <span>TOTAL</span>
                    <span>${amount}</span>
                  </div>
                </div>
                <div className="mt-4 ">
                  <div className="flex items-center mb-2">
                    <input type="radio" name="payment" className="mr-2" />
                    <span>Direct bank transfer</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="radio" name="payment" className="mr-2" defaultChecked />
                    <span>Credit Card (Stripe)</span>
                  </div>
                  <div className="bg-gray-300 p-4 rounded-md mt-2">
                    <p>Pay with your credit card via Stripe.</p>
                    <div className="mt-2 space-y-10">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Card Number *</label>
                        <div id="card-element" className="mt-3 w-full border-gray-300 shadow-sm bg-white py-1.5 pl-5"></div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY) *</label>
                          <div className="mt-3 w-full border-gray-300 shadow-sm bg-white py-1.5 px-10"></div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">CVC *</label>
                          <div className="mt-3 w-full border-gray-300 shadow-sm bg-white py-1.5 px-10"></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Save payment information to my account for future purchases</span>
                      </div>
                    </div>
                  </div>
                  {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                  <button onClick={handlePlaceOrder} className="w-full bg-gray-800 text-white py-2 rounded-md mt-4">PLACE ORDER</button>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
              </div>
              <div className="mt-4 text-text-lg text-black text-center">
                <p className='font-semibold'>For a Cash or Check Donation please contact:</p>
                <p>Jane Smith at Indian Hill Foundation</p>
                <p>(555) 123-4567</p>
                <p className='pt-5'>Indian Hill Foundation</p>
                <p>123 Address Street</p>
                <p>City, State 55655</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Checkout;
