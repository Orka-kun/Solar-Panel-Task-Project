import React from 'react';

const DonationCard = ({ quantity, amount, onDonate }) => {
  return (
    <button onClick={() => onDonate(quantity)} className="bg-white text-green-600 p-4 m-2 rounded-lg shadow hover:bg-green-100">
      Donate {quantity} Solar Panel(s): ${amount}
    </button>
  );
};

export default DonationCard;