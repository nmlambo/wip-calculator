import { useState } from 'react';

import styles from '@/components/forms/financial-services.module.css'

import SecondaryButton from '@/components/button/SecondaryButton';
import Icon, { IconName } from '@/components/iconSVG/Icon';
import { BodyH1 } from '@/components/typography/TextComponents';

import { Divider } from './ServicePlan';

interface CarService {
  icon: JSX.Element;
  title: string | JSX.Element;
  description: string;
  options: (string | number)[][];
  duration: number[];
  fees: string[];
  fees1?: string[];
}

interface FinancialServiceProps {
  type: string;
  onAddToQuote: (data: any) => void; // New prop
}

const defaultData: CarService = {
  icon: <div />,
  title: 'Default',
  description: 'Default description',
  options: [],
  duration: [],
  fees: [],
};

const services = {
  toyota: {
    icon: <div />,
    title: 'Toyota Financial Services',
    description: "The Installment Finance option from Toyota Financial Services provides you with the means to buy the Toyota vehicle of your choice, and to pay us back with regular nonthly installments until paid in full, you'll then take ownership of the vehicle.",
    options: [
      ['Interest Rate', '%', 20],
      ['Balloon Payment', '%', 20],
      ['Deposit & Trade-in', '%', 20],
      ['Term', 'R', 40000],
    ],
    duration: [72, 60, 48],
    fees: ['Admin fee:', 'Once-off initiation fee:', 'Balloon payment (0%):'],
    fees1: ['Maintenance plan:', 'Warranty:', 'Total instalment:'],
  },
  kinto: {
    icon: <div />,
    title: 'KINTO Financial Services',
    description: "KINTO ONE allows you to enjoy all of the benefits of driving a new car without having to own one. It’s a full-service and affordable pay-for-use subscription offer for individuals seeking modern mobility solutions with no commitment.",
    options: [
      ['Total Monthly Kilometres?', 'R', 400000],
      ['Monthly Affordability?', '%', 20],
      ['Term', '%', 20],
    ],
    duration: [72, 60, 48],
    fees: ['Admin fee:', 'Once-off initiation fee:', 'Balloon payment (0%):'],
    fees1: ['Vehicle license & registration for the first year:', 'All scheduled services and maintenance:', 'Stolen Vehicle Recovery Device'],
  },
};

const FinancialService = ({ type, onAddToQuote }: FinancialServiceProps) => {
  const [deposit, setDeposit] = useState(0);
  const [interest, setInterest] = useState(7.0);
  const [balloonPayment, setballoonPayment] = useState(0);
  const [paymentDuration, setPaymentDuration] = useState<number>(72);
  const [isGrey, setisGrey] = useState(false);
  const price = 250000;

  const handleAddToQuote = () => {
    const quoteData = {
      deposit,
      interest,
      balloonPayment,
      paymentDuration,
      price,
      type,
    };
    onAddToQuote(quoteData); // Call the function passed from the parent component
  };


  let data: CarService;

  switch (type) {
    case 'Toyota_Finance':
      data = services.toyota;
      break;
    case 'Kinto':
      data = services.kinto;
      break;
    default:
      data = defaultData;
      break;
  }

  const { title, description, fees } = data;
  const fees1: string[] = data?.fees1 ?? [];

  return (
    <div className=' '>

      {/* Toyota Finance Form */}
      {type === 'Toyota_Finance' && (
        <div
          className={`
        financeForm
        ${type === 'Toyota_Finance' ? 'bg-[#494950]' : ' bg-medium-dark-grey'}
        flex max-w-full flex-col items-start rounded-3xl px-[3rem] pb-[61px] pt-16 text-white lg:w-[814px] relative
      `}
        >
          <Icon name={IconName.toyotaFinancial} />
          <BodyH1 className='mt-5 text-white'>
            {title}
          </BodyH1>
          <p className='font-nobel-light mb-9 mt-5 text-lg'>{description}</p>
          <div className='mb-11 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
            <div className='w-full'>
              <label className='myCustomLabel flex items-center text-sm'>
                Interest Rate
                <Icon name={IconName.moreInfo} />
              </label>
              <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                <SecondaryButton
                  url=''
                  colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                  widthStyle='100%'
                  svgIcon={<Icon name={IconName.downArrow} />}
                >
                  {interest}
                </SecondaryButton>
              </div>
            </div>

            <div className='w-full'>
              <label className='myCustomLabel flex items-center text-sm'>
                Balloon Payment
                <Icon name={IconName.moreInfo} />
              </label>
              <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                <SecondaryButton
                  url=''
                  colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                  widthStyle='100%'
                  svgIcon={<Icon name={IconName.downArrow} />}
                >
                  {balloonPayment}
                </SecondaryButton>
              </div>
            </div>

            <div className='w-full'>
              <label className='myCustomLabel flex items-center text-sm'>
                Deposit & Trade-in
                <Icon name={IconName.moreInfo} />
              </label>
              <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                <SecondaryButton
                  url=''
                  colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                  widthStyle='100%'
                  hideIcon={true}
                  placeholder='R0'
                >
                  {deposit}
                </SecondaryButton>
              </div>
            </div>

            <div className='w-full'>
              <label className='myCustomLabel flex items-center text-sm'>
                Term
                <Icon name={IconName.moreInfo} />
              </label>
              <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                <SecondaryButton
                  url=''
                  colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                  widthStyle='100%'
                  svgIcon={<Icon name={IconName.downArrow} />}
                >
                  {paymentDuration}
                </SecondaryButton>
              </div>
            </div>
          </div>

          <div className='mb-[51px] w-full flex flex-col text-sm'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
              <div className='flex flex-col justify-between bg-[#3A3A40] rounded-lg'>
                {fees.map((item, index) => (
                  <li key={index} className='flex flex-col items-center'>
                    <div className='inline-flex w-full justify-between px-[0.8rem] py-4'>
                      <span>{item}</span>
                      <span>Included</span>
                    </div>
                    {index !== fees.length - 1 ? (
                      <Divider className='w-[91%]' />
                    ) : null}
                  </li>
                ))}
              </div>
              <div className='flex flex-col justify-between bg-[#3A3A40] rounded-lg'>
                {fees1.map((item, index) => (
                  <li key={index} className='flex flex-col items-center'>
                    <div className='inline-flex w-full justify-between px-[0.8rem] py-4'>
                      <span>{item}</span>
                      <span>Included</span>
                    </div>
                    {index !== fees1.length - 1 ? (
                      <Divider className='w-[91%]' />
                    ) : null}
                  </li>
                ))}
              </div>
            </div>
          </div>

          <div className='flex w-full justify-between'>
            <div>
              <p className='text font-nobel-light text-sm'>
                All inclusive
              </p>
              <p className='text-white font-bold text-3.5xl'>
                {`R${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, ' ')} p/m`}
              </p>
            </div>
            <button
              className={`font-toyota-bold inline-flex h-16 w-56 items-center justify-between rounded-[2.5rem] pl-[1.8rem] pr-[1rem] text-base ${isGrey ? 'bg-[#6A6B70] text-white' : 'bg-[#232323] text-toyota-grey-alternante1'
                }`}
              style={{ transition: 'background-color 0.2s ease-in-out' }}
              onClick={() => setisGrey(!isGrey)}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ opacity: isGrey ? 0 : 1, transition: 'opacity 0.1s ease-in-out', color: '#707070' }}>
                  Add to Quote
                </span>
                <span style={{ opacity: isGrey ? 1 : 0, transition: 'opacity 0.3s ease-in-out', position: 'absolute', top: 0, left: 0, color: '#FFFFFF' }}>
                  Added
                </span>
              </div>
              {isGrey ? (
                <Icon name={IconName.addedQuote} />

              ) : (
                <Icon name={IconName.addQuote} />
              )}
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-3xl">
        {/* Kinto Finance Form */}
        {type === 'Kinto' && (
          <div
            className={`
                financeForm
                ${type === 'Kinto' ? 'bg-[#105368] border-0' : 'bg-kinto-blue border-0'}
                flex max-w-full flex-col items-start rounded-3xl px-[3rem] pb-[61px] pt-16 text-white lg:w-[814px] relative
              `}
          >

            {/* Container with Relative Positioning */}
            <div className={`${styles} relative w-full`}>
              {/* Label placed within the form */}
              <div className="absolute top-[2.9rem] -right-[5rem] transform -translate-x-1 translate-y-1 rotate-45 origin-top-right">
                <div className="bg-white text-[#13708D] text-sm font-toyota-display-bold py-2 px-14 rounded-tr-lg">
                  Subscription
                </div>
              </div>
            </div>


            <Icon name={IconName.kintoFinancial} />
            <div className='mt-5'>
              <Icon name={IconName.kintoFinancialTitle} />
            </div>
            <p className='font-nobel-light mb-9 mt-5 text-lg'>{description}</p>

            <div className='mb-11 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
              <div className='w-full'>
                <label className='myCustomLabel flex items-center text-sm'>
                  Total Monthly Kilometers
                  <Icon name={IconName.moreInfo} />
                </label>
                <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                  <SecondaryButton
                    url=''
                    colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                    widthStyle='100%'
                    svgIcon={<Icon name={IconName.downArrow} />}
                  >
                    1000 km
                  </SecondaryButton>
                </div>
              </div>
              <div className='w-full'>
                <label className='myCustomLabel flex items-center text-sm'>
                  Term
                  <Icon name={IconName.moreInfo} />
                </label>
                <div className='text-toyota-grey border-toyota-grey flex h-[87px] w-full items-center justify-between space-x-3'>
                  <SecondaryButton
                    url=''
                    colorClass="space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white"
                    widthStyle='100%'
                    svgIcon={<Icon name={IconName.downArrow} />}
                  >
                    {paymentDuration}
                  </SecondaryButton>
                </div>
              </div>
            </div>

            <div
              className='mb-[51px] w-full'>
              <ul
                className='flex flex-col justify-between bg-[#0D4253] rounded-lg'
              >
                {fees1.map((item, index) => (
                  <li key={index} className='flex flex-col items-center'>
                    <div className='inline-flex w-full justify-between px-[0.8rem] py-4'>
                      <span>{item}</span>
                      <div className='inline-flex items-center'> {/* New div wrapper */}
                        <span className='mr-2'>Included</span> {/* Added margin-right */}
                        <Icon name={IconName.includedCheck} />
                      </div>
                    </div>
                    {index !== fees1.length - 1 ? (
                      <Divider className='w-[95%]' />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex w-full justify-between'>
              <div>
                <p className='text font-nobel-light text-sm'>
                  All inclusive Incl. VAT
                </p>
                <p className='text-white font-bold text-3.5xl'>
                  {`R${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, ' ')} p/m`}
                </p>
              </div>

              <button
                className={`font-toyota-bold inline-flex h-16 w-56 items-center justify-between rounded-[2.5rem] pl-[1.8rem] pr-[1rem] text-base ${isGrey ? 'bg-[#6A6B70] text-white' : 'bg-[#0D4252] text-toyota-grey-alternante1'
                  }`}
                style={{ transition: 'background-color 0.2s ease-in-out', outline: 'none' }}
                onClick={() => {
                  setisGrey(!isGrey);
                  handleAddToQuote(); // Call the new function when button is clicked
                }}
              >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ opacity: isGrey ? 0 : 1, transition: 'opacity 0.1s ease-in-out', color: '#707070' }}>
                    Add to Quote
                  </span>
                  <span style={{ opacity: isGrey ? 1 : 0, transition: 'opacity 0.3s ease-in-out', position: 'absolute', top: 0, left: 0, color: '#FFFFFF' }}>
                    Added
                  </span>
                </div>
                {isGrey ? (
                  <Icon name={IconName.addedQuote} />
                ) : (
                  <Icon name={IconName.addQuote} />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialService;