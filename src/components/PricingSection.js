// components/PricingSection.js

import React from 'react';
import PricingCard from './PricingCard';

const pricingData = [
  {
    title: 'Terapia Invididual ONline',
    price: '79.900',
    features: ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Mixtape chillwave tumeric'],
    isPopular: false,
  },
  {
    title: 'Terapia Pareja',
    price: '$100.000',
    features: ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn'],
    isPopular: true,
  },
  {
    title: 'terapia presencial ',
    price: '$100.000',
    features: ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn', 'Vexillologist pitchfork'],
    isPopular: false,
  },
  {
    title: 'SPECIAL',
    price: '$72',
    features: ['Vexillologist pitchfork', 'Tumeric plaid portland', 'Hexagon neutra unicorn', 'Vexillologist pitchfork', 'Mixtape chillwave tumeric'],
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {pricingData.map((data, index) => (
            <PricingCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
