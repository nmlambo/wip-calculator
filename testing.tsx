import React, { useState } from 'react';

import FinancialService from '@/components/forms/FinancialService';
import { ModelPriceSummarySection } from '@/components/pages/vehicles/range/sections/ModelPriceSummary/ModelPriceSummarySection';
import { BodyCopySmall, H4 } from '@/components/typography/TextComponents';

const Testing = () => {
  const [showFinanceOptions, setShowFinanceOptions] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [quoteData, setQuoteData] = useState(null); // New state to hold quote data
  const [quoteValue, setquoteValue] = useState(0);

  const toggleFinanceOptions = () => {
    setShowFinanceOptions(!showFinanceOptions);
    setAnimationKey(animationKey + 1);
  };

  const handleAddToQuote = (data) => { // New function to handle quote data
    setQuoteData(data);
  };

  return (
    <>
      <div className='pb-24'>
        <section className='max-w-[1363px] py-32 md:pt-32'>
          <div
            className={`text-center text-darker mb-5 ${showFinanceOptions ? 'faded' : ''}`}
          >
            <H4>
              {showFinanceOptions ? "Finance Options" : "Payment Options"}
            </H4>
          </div>

          <BodyCopySmall className='text-center mb-10'>Explore our finance options that enable you to either own or rent.</BodyCopySmall>
          {/* Toggle Button */}
          <div className="text-center mb-10 relative">
            <button onClick={toggleFinanceOptions} className="transition-all duration-500 ease-in-out z-50 relative">
              {showFinanceOptions ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" className="transition-transform duration-500 ease-in-out transform rotate-45">
                  <g id="Icon" transform="translate(-623 -351)">
                    <circle id="Ellipse_1584" data-name="Ellipse 1584" cx="33" cy="33" r="33" transform="translate(623 351)" fill="#494950" />
                    <text id="_" data-name="+" transform="translate(646.807 383.293) rotate(45)" fill="#fff" font-size="24" font-family="Helvetica"><tspan x="0" y="0">+</tspan></text>
                  </g>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" className="transition-transform duration-500 ease-in-out">
                  <g id="Icon" transform="translate(-623 -351)">
                    <circle id="Ellipse_1584" data-name="Ellipse 1584" cx="33" cy="33" r="33" transform="translate(623 351)" fill="#d1021e" />
                    <text id="_" data-name="+" transform="translate(649 390)" fill="#fff" font-size="24" font-family="Helvetica"><tspan x="0" y="0">+</tspan></text>
                  </g>
                </svg>
              )}
            </button>
          </div>
          {/* Finance Options */}
          <div className={`bg-[#282830] mb-14 mt-[-5rem] transition-all duration-500 ease-in-out ${showFinanceOptions ? 'opacity-100 h-auto' : 'opacity-0 h-0'} z-0 relative`}>
            <div className="flex flex-col items-center justify-center">
              <BodyCopySmall className='text-center text-white xl:mt-28 lg:mt-[6rem] md:mt-[8rem] sm:mt-8 hidden md:inline'>Choose your preferred finance option to add to your quote.</BodyCopySmall>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:mt-[-1rem] md:mt-0 sm:mt-2 scale-[0.8]'>
                <FinancialService type="Toyota_Finance" onAddToQuote={handleAddToQuote} /> {/* Added onAddToQuote prop */}
                <FinancialService type="Kinto" onAddToQuote={handleAddToQuote} /> {/* Added onAddToQuote prop */}
              </div>
            </div>
          </div>
          <ModelPriceSummarySection price={undefined} quoteData={quoteData} />
        </section>
      </div>
    </>
  );
};

export default Testing;
