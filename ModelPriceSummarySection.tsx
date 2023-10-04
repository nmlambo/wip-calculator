import Link from 'next/link';
import React, { useState } from 'react';

import styles from '@/components/pages/vehicles/range/sections/ModelPriceSummary/summary.module.css';

import SecondaryButton from '@/components/button/SecondaryButton';
import { BodyCopy, H3 } from '@/components/typography/TextComponents';

interface ModelPriceSummarySectionProps {
    price: any; // You can replace 'any' with the actual type
    quoteData: any; // You can replace 'any' with the actual type
}

export const ModelPriceSummarySection: React.FC<
    ModelPriceSummarySectionProps
> = ({ price = 839642.2, quoteData }) => {
    const [isOpen, setIsOpen] = useState(false); // Added state variable

    // Implemented setIsOpen function
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const [costWithCredit, setCostWithCredit] = useState(price),
        [totalPrice, setTotalPrice] = useState(price),
        [seventy2Payment, setSeventy2Payment] = useState(totalPrice / 72),
        [genuineMaintenance, setGenuineMaintenance] = useState(22181.6),
        [warranty, setWarranty] = useState(8350.6);

    const vehicleData = {
        id: 1,
        title: 'RAV 4 2.5 GX-R BT',
        description: 'Expect incredible',
        image:
            'https://dev-images.fluyota.co.za/toyotacms/attachments/clagouuvz022n0pkqo47e5a6q-rav4-2-0-vx-cvt-089-rgb.full.png',
        price: 'R678 000',
        financeOffers: [
            { label: 'Total cost with credit', price: `R${costWithCredit}` },
            { label: 'Monthly for 72 Months', price: `R${seventy2Payment}` },
        ],
        services: [
            { label: 'Genuine Maintaince Plan', price: `R${genuineMaintenance}` },
            { label: 'Warranty', price: `R${warranty}` },
            { label: 'Total', price: `R${totalPrice}` },
        ],
    };

    return (
        <div className='mt-[8.5rem] w-full'>
            <H3 className='text-darker mb-10 text-center'>Your Toyota Summary</H3>
            <div className='pb-0'>
                {
                    <div className='px-50 py-50 relative w-full text-center'>
                        <div className='relative z-10 flex w-full justify-center text-center'>
                            <img
                                className='mx-auto'
                                src={vehicleData.image}
                                alt={vehicleData.title}
                            />
                        </div>
                        <div
                            className={`${styles.customBgPosition} bg-darkest-grey relative z-0 text-white`}
                        >
                            <div className='bg-grey-darker mx-auto max-w-screen-lg'>
                                <div className='relative z-20 pb-10 pt-[100px] text-center'>
                                    <h2 className='mt-4 pb-5 text-center text-2xl font-bold leading-10 text-white'>
                                        {vehicleData.title}
                                    </h2>
                                    <SecondaryButton
                                        onClick={toggleIsOpen} // Added onClick handler
                                        width='45'
                                        url=''
                                        borderColor={3}
                                    >
                                        Change variant
                                    </SecondaryButton>
                                </div>

                                <div>
                                    <div className='bg-darker-grey grid grid-cols-1 gap-6 py-10 pt-10 sm:grid-cols-1'>
                                        {vehicleData.services.map((services, index, arr) => (
                                            <div
                                                key={index}
                                                className={`bg-charcoal relative flex items-center px-6 py-5 shadow-sm ${index !== arr.length - 1 ? 'relative' : ''
                                                    }`}
                                            >
                                                <div className='flex min-w-0 flex-1 justify-between px-12'>
                                                    <span
                                                        className='absolute inset-0'
                                                        aria-hidden='true'
                                                    ></span>
                                                    <div
                                                        className={`font-toyota-display-regular text-white ${services.label === 'Total'
                                                            ? 'text-lg font-bold'
                                                            : 'text-sm font-medium'
                                                            }`}
                                                    >
                                                        {services.label}
                                                    </div>
                                                    <div
                                                        className={`font-toyota-display-regular text-white ${services.label === 'Total'
                                                            ? 'text-lg font-bold'
                                                            : 'text-sm font-medium'
                                                            }`}
                                                    >
                                                        {services.price}
                                                    </div>
                                                </div>
                                                {index !== arr.length - 1 &&
                                                    services.label !== 'Total' && (
                                                        <div className='absolute bottom-0 left-14 right-14 h-0.5 bg-[#58585D]'></div>
                                                    )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                                        {vehicleData.financeOffers.map((financeOffers, index) => (
                                            <div
                                                key={index}
                                                className='p-3'
                                                style={{ backgroundColor: '#6A6B70' }}
                                            >
                                                <div className='bg-charcoal relative flex flex-col items-center px-6 py-5 shadow-sm'>
                                                    <div className='flex min-w-0 flex-1 flex-col justify-center px-12'>
                                                        <div
                                                            className='absolute inset-0'
                                                            aria-hidden='true'
                                                        ></div>
                                                        <BodyCopy className='text-white'>
                                                            {financeOffers.label}
                                                        </BodyCopy>
                                                        <H3 className='mt-2 text-white'>
                                                            {financeOffers.price}
                                                        </H3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center gap-6 text-center sm:flex-row'>
                                    <div className='flex flex-col items-center gap-6 py-10 pt-10 sm:flex-row'>
                                        <SecondaryButton
                                            url=''
                                            colorClass='space-x-2 md:space-x-6 min-w-max bg-white text-darkest-grey hover:text-white'
                                            widthStyle='80%'
                                        >
                                            Contact Halfway Fourways
                                        </SecondaryButton>
                                        <SecondaryButton
                                            url=''
                                            borderColor={2}
                                            colorClass='space-x-2 md:space-x-6 min-w-max'
                                            widthStyle='80%'
                                        >
                                            Book a test drive
                                        </SecondaryButton>
                                        <SecondaryButton
                                            url=''
                                            borderColor={2}
                                            colorClass='space-x-2 md:space-x-6 min-w-max'
                                            widthStyle='80%'
                                        >
                                            Enquire now
                                        </SecondaryButton>
                                    </div>
                                </div>

                                <div className='mt-14 flex flex-grow flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-28 lg:space-y-0'>
                                    <Link
                                        href='/'
                                        className='flex flex-col items-center lg:flex-row'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='19.575'
                                            height='19.574'
                                            viewBox='0 0 19.575 19.574'
                                        >
                                            <g id='qr-code-scan' transform='translate(0.1 0.1)'>
                                                <path
                                                    id='Path_12668'
                                                    data-name='Path 12668'
                                                    d='M373.279,0h-2.712a.568.568,0,0,0,0,1.135h2.712a.96.96,0,0,1,.959.959V4.806a.568.568,0,0,0,1.135,0V2.094A2.1,2.1,0,0,0,373.279,0Z'
                                                    transform='translate(-355.999)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12669'
                                                    data-name='Path 12669'
                                                    d='M.568,5.374a.568.568,0,0,0,.568-.568V2.094a.96.96,0,0,1,.959-.959H4.806A.568.568,0,1,0,4.806,0H2.094A2.1,2.1,0,0,0,0,2.094V4.806a.568.568,0,0,0,.568.568Z'
                                                    transform='translate(0 0)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12670'
                                                    data-name='Path 12670'
                                                    d='M4.806,374.238H2.094a.96.96,0,0,1-.959-.959v-2.712a.568.568,0,0,0-1.135,0v2.712a2.1,2.1,0,0,0,2.094,2.094H4.806a.568.568,0,0,0,0-1.135Z'
                                                    transform='translate(0 -355.999)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12671'
                                                    data-name='Path 12671'
                                                    d='M374.806,370a.568.568,0,0,0-.568.568v2.712a.96.96,0,0,1-.959.959h-2.712a.568.568,0,0,0,0,1.135h2.712a2.1,2.1,0,0,0,2.094-2.094v-2.712A.568.568,0,0,0,374.806,370Z'
                                                    transform='translate(-355.999 -355.999)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12672'
                                                    data-name='Path 12672'
                                                    d='M327.211,81.135h1.8a.446.446,0,0,1,.446.446v1.8a.568.568,0,1,0,1.135,0v-1.8A1.583,1.583,0,0,0,329.011,80h-1.8a.568.568,0,0,0,0,1.135Z'
                                                    transform='translate(-314.282 -76.973)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12673'
                                                    data-name='Path 12673'
                                                    d='M81,81.581v1.8a.568.568,0,0,0,1.135,0v-1.8a.446.446,0,0,1,.446-.446h1.8a.568.568,0,0,0,0-1.135h-1.8A1.583,1.583,0,0,0,81,81.581Z'
                                                    transform='translate(-77.935 -76.973)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12674'
                                                    data-name='Path 12674'
                                                    d='M84.381,328.458h-1.8a.446.446,0,0,1-.446-.446v-1.8a.568.568,0,0,0-1.135,0v1.8a1.583,1.583,0,0,0,1.581,1.581h1.8a.568.568,0,0,0,0-1.135Z'
                                                    transform='translate(-77.935 -313.321)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12675'
                                                    data-name='Path 12675'
                                                    d='M330.592,328.012v-1.8a.568.568,0,1,0-1.135,0v1.8a.446.446,0,0,1-.446.446h-1.8a.568.568,0,0,0,0,1.135h1.8A1.583,1.583,0,0,0,330.592,328.012Z'
                                                    transform='translate(-314.282 -313.321)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                                <path
                                                    id='Path_12676'
                                                    data-name='Path 12676'
                                                    d='M1,241.568a.568.568,0,0,0,.568.568H19.732a.568.568,0,1,0,0-1.135H1.568A.568.568,0,0,0,1,241.568Z'
                                                    transform='translate(-0.962 -231.88)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.2'
                                                />
                                            </g>
                                        </svg>
                                        <span className='relative ml-3 pb-2 text-white'>
                                            Generate code
                                            <div
                                                className='absolute inset-x-0 bottom-0 h-1 border-b border-white'
                                                style={{ width: 'auto' }}
                                            ></div>
                                        </span>
                                    </Link>
                                    <Link
                                        href='/'
                                        className='flex flex-col items-center lg:flex-row'
                                    >
                                        <svg
                                            id='Group_145587'
                                            data-name='Group 145587'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='20'
                                            height='17.75'
                                            viewBox='0 0 20 17.75'
                                        >
                                            <path
                                                id='Path_118'
                                                data-name='Path 118'
                                                d='M24,21.262V17.944a.833.833,0,0,0-1.667,0v3.318a.831.831,0,0,1-.833.829H6.5a.831.831,0,0,1-.833-.829V17.944a.833.833,0,0,0-1.667,0v3.318A2.494,2.494,0,0,0,6.5,23.75h15A2.494,2.494,0,0,0,24,21.262ZM18.683,16.1,14.517,19.42a.836.836,0,0,1-1.033,0L9.317,16.1a.827.827,0,0,1-.08-1.119.836.836,0,0,1,1.114-.175l2.817,2.239V6.829a.833.833,0,0,1,1.667,0V17.048l2.817-2.239A.831.831,0,1,1,18.683,16.1Z'
                                                transform='translate(-4 -6)'
                                                fill='#FDFDFD'
                                            />
                                        </svg>
                                        <span className='relative ml-3 pb-2 text-white'>
                                            Download Article
                                            <div
                                                className='absolute inset-x-0 bottom-0 h-1 border-b border-white'
                                                style={{ width: 'auto' }}
                                            ></div>
                                        </span>
                                    </Link>
                                    <Link
                                        href='/'
                                        className='flex flex-col items-center lg:flex-row'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='20.95'
                                            height='20.951'
                                            viewBox='0 0 20.95 20.951'
                                        >
                                            <g id='printer' transform='translate(0.15 0.15)'>
                                                <path
                                                    id='Path_12662'
                                                    data-name='Path 12662'
                                                    d='M18.5,16.325H15.918a.43.43,0,1,1,0-.86H18.5a1.292,1.292,0,0,0,1.291-1.291V8.151A1.292,1.292,0,0,0,18.5,6.86H2.151A1.292,1.292,0,0,0,.86,8.151v6.023a1.292,1.292,0,0,0,1.291,1.291H4.732a.43.43,0,0,1,0,.86H2.151A2.154,2.154,0,0,1,0,14.174V8.151A2.154,2.154,0,0,1,2.151,6H18.5A2.154,2.154,0,0,1,20.65,8.151v6.023A2.154,2.154,0,0,1,18.5,16.325Z'
                                                    transform='translate(0 -0.837)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                                <path
                                                    id='Path_12663'
                                                    data-name='Path 12663'
                                                    d='M13.593,20.86H8.43a.43.43,0,1,1,0-.86h5.163a.43.43,0,1,1,0,.86Z'
                                                    transform='translate(-1.117 -2.791)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                                <path
                                                    id='Path_12664'
                                                    data-name='Path 12664'
                                                    d='M13.593,18.86H8.43a.43.43,0,1,1,0-.86h5.163a.43.43,0,0,1,0,.86Z'
                                                    transform='translate(-1.117 -2.512)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                                <path
                                                    id='Path_12665'
                                                    data-name='Path 12665'
                                                    d='M10.151,16.86H8.43a.43.43,0,1,1,0-.86h1.721a.43.43,0,0,1,0,.86Z'
                                                    transform='translate(-1.117 -2.233)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                                <path
                                                    id='Path_12666'
                                                    data-name='Path 12666'
                                                    d='M16.616,6.023a.43.43,0,0,1-.43-.43V2.151A1.292,1.292,0,0,0,14.895.86H7.151A1.292,1.292,0,0,0,5.86,2.151V5.593a.43.43,0,1,1-.86,0V2.151A2.154,2.154,0,0,1,7.151,0h7.744a2.154,2.154,0,0,1,2.151,2.151V5.593A.43.43,0,0,1,16.616,6.023Z'
                                                    transform='translate(-0.698)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                                <path
                                                    id='Path_12667'
                                                    data-name='Path 12667'
                                                    d='M14.895,22.465H7.151A2.154,2.154,0,0,1,5,20.314V13.43A.43.43,0,0,1,5.43,13H16.616a.43.43,0,0,1,.43.43v6.883A2.154,2.154,0,0,1,14.895,22.465ZM5.86,13.86v6.453A1.292,1.292,0,0,0,7.151,21.6h7.744a1.292,1.292,0,0,0,1.291-1.291V13.86Z'
                                                    transform='translate(-0.698 -1.814)'
                                                    fill='#fff'
                                                    stroke='#fff'
                                                    stroke-width='0.3'
                                                />
                                            </g>
                                        </svg>
                                        <span className='relative ml-3 pb-2 text-white'>
                                            Print Summary
                                            <div
                                                className='absolute inset-x-0 bottom-0 h-1 border-b border-white'
                                                style={{ width: 'auto' }}
                                            ></div>
                                        </span>
                                    </Link>
                                    <Link
                                        href='/'
                                        className='flex flex-col items-center lg:flex-row'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='21.647'
                                            height='21.157'
                                            viewBox='0 0 21.647 21.157'
                                        >
                                            <path
                                                id='Discount'
                                                d='M17,26.155a2.4,2.4,0,0,1-1.378-.719c-.265-.217-.628-.513-.8-.513s-.538.3-.8.513c-.475.388-1.013.829-1.605.693-.612-.139-.911-.782-1.175-1.349A2.289,2.289,0,0,0,10.767,24a2.264,2.264,0,0,0-.927.114,2.047,2.047,0,0,1-1.766-.076,2.053,2.053,0,0,1-.467-1.711,2.289,2.289,0,0,0-.092-.923,2.286,2.286,0,0,0-.875-.292c-.61-.13-1.3-.278-1.57-.839a2.039,2.039,0,0,1,.319-1.731,2.28,2.28,0,0,0,.32-.886c-.034-.149-.4-.436-.649-.627C4.563,16.644,4,16.208,4,15.576s.563-1.068,1.059-1.454c.245-.19.615-.478.649-.627a2.285,2.285,0,0,0-.32-.886,2.037,2.037,0,0,1-.318-1.731c.271-.561.961-.708,1.57-.839a2.288,2.288,0,0,0,.874-.291,2.282,2.282,0,0,0,.092-.923,2.054,2.054,0,0,1,.467-1.711,2.047,2.047,0,0,1,1.766-.076,2.286,2.286,0,0,0,.927.114,2.287,2.287,0,0,0,.474-.781c.264-.567.563-1.21,1.175-1.349.592-.134,1.131.305,1.605.693.265.217.628.513.8.513s.538-.3.8-.513c.475-.388,1.013-.829,1.606-.693.611.139.911.782,1.175,1.349a2.289,2.289,0,0,0,.474.781,2.279,2.279,0,0,0,.927-.114,2.048,2.048,0,0,1,1.766.076,2.052,2.052,0,0,1,.467,1.711,2.288,2.288,0,0,0,.092.923,2.29,2.29,0,0,0,.875.292c.61.13,1.3.278,1.57.839a2.039,2.039,0,0,1-.319,1.731,2.282,2.282,0,0,0-.32.886c.034.149.4.437.649.627.5.385,1.059.822,1.059,1.454s-.563,1.068-1.059,1.454c-.245.19-.615.477-.649.627a2.284,2.284,0,0,0,.32.886,2.037,2.037,0,0,1,.318,1.731c-.271.561-.961.708-1.57.839a2.294,2.294,0,0,0-.875.292,2.287,2.287,0,0,0-.092.923,2.053,2.053,0,0,1-.467,1.71,2.048,2.048,0,0,1-1.766.076A2.272,2.272,0,0,0,18.88,24c-.142.068-.342.5-.474.781-.264.568-.563,1.21-1.175,1.349a1.02,1.02,0,0,1-.227.026Zm-6.39-3.162a1.318,1.318,0,0,1,.58.12,2.4,2.4,0,0,1,.938,1.252c.117.251.36.773.5.8s.559-.328.764-.5a2.447,2.447,0,0,1,1.426-.736,2.448,2.448,0,0,1,1.426.736c.205.168.62.512.765.5.14-.032.384-.554.5-.8a2.4,2.4,0,0,1,.938-1.252,2.422,2.422,0,0,1,1.584.044c.264.063.816.2.922.111s.1-.656.1-.929a2.412,2.412,0,0,1,.307-1.55,2.406,2.406,0,0,1,1.437-.64c.269-.058.829-.177.89-.3s-.193-.624-.314-.866a2.434,2.434,0,0,1-.4-1.541,2.379,2.379,0,0,1,1.005-1.186c.238-.184.679-.526.679-.676s-.441-.492-.678-.676a2.378,2.378,0,0,1-1.006-1.186,2.436,2.436,0,0,1,.4-1.541c.12-.243.371-.747.314-.866s-.621-.246-.89-.3a2.408,2.408,0,0,1-1.438-.639,2.413,2.413,0,0,1-.307-1.549c0-.274.011-.843-.1-.929s-.657.048-.922.111a2.421,2.421,0,0,1-1.584.044,2.4,2.4,0,0,1-.938-1.252c-.117-.251-.36-.773-.5-.8s-.559.328-.765.5a2.445,2.445,0,0,1-1.425.736A2.448,2.448,0,0,1,13.4,6.478c-.205-.168-.633-.517-.765-.5s-.384.554-.5.8A2.4,2.4,0,0,1,11.2,8.039,2.422,2.422,0,0,1,9.611,8c-.264-.064-.816-.2-.922-.112s-.1.656-.1.929a2.411,2.411,0,0,1-.307,1.549A2.406,2.406,0,0,1,6.847,11c-.269.058-.829.177-.89.3s.193.624.314.866a2.434,2.434,0,0,1,.4,1.541A2.379,2.379,0,0,1,5.663,14.9c-.237.184-.679.527-.679.677s.441.492.678.676a2.377,2.377,0,0,1,1.006,1.186,2.436,2.436,0,0,1-.4,1.541c-.12.243-.371.747-.314.866s.621.247.89.3a2.407,2.407,0,0,1,1.437.64,2.413,2.413,0,0,1,.307,1.549c0,.274-.011.843.1.929s.657-.048.922-.112a4.44,4.44,0,0,1,1-.164Zm1.113-3.625,6.888-6.888a.492.492,0,1,0-.7-.7l-6.888,6.888a.492.492,0,1,0,.7.7Zm.636-4.53a1.722,1.722,0,1,1,1.722-1.722A1.724,1.724,0,0,1,12.364,14.838Zm0-2.46a.738.738,0,1,0,.738.738A.739.739,0,0,0,12.364,12.378Zm4.92,7.38a1.722,1.722,0,1,1,1.722-1.722A1.724,1.724,0,0,1,17.284,19.758Zm0-2.46a.738.738,0,1,0,.738.738A.739.739,0,0,0,17.284,17.3Z'
                                                transform='translate(-4 -4.997)'
                                                fill='#fff'
                                            />
                                        </svg>
                                        <span className='relative ml-3 pb-2 text-white'>
                                            Finance offers
                                            <div
                                                className='absolute inset-x-0 bottom-0 h-1 border-b border-white'
                                                style={{ width: 'auto' }}
                                            ></div>
                                        </span>
                                    </Link>
                                </div>

                                <div className='flex items-center justify-center sm:justify-start'>
                                    <p className='mb-[3rem] mt-[3rem] text-center text-[13px] text-[#ADADB0] sm:mb-[6rem] sm:mt-[6rem] sm:text-left'>
                                        * Toyota South Africa Motors (Pty) Ltd reserves the right to
                                        alter any details of specifications and equipment without
                                        notice. No guarantee is given regarding the accuracy of
                                        information within this site. Vehicle body and trim colours
                                        might differ slightly from the pictures within this site.
                                        Please check model availability and full specification
                                        details with your Toyota dealer prior to ordering. Neither
                                        Toyota South Africa Motors (Pty) Ltd nor Toyota Dealer
                                        network can accept contractual responsibility for your
                                        reliance on the information contained within this site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
