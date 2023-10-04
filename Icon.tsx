import Image from 'next/image';
import { CSSProperties } from 'react';

import { conditionaClass } from '@/lib';

import { IconProps } from '../../models';
import appStore from '../../../public/img/icons/AppleStore.png';
import check_beadge from '../../../public/img/icons/Check_Badge.svg';
import drag_nob from '../../../public/img/icons/drag_nob.svg';
import google from '../../../public/img/icons/Google_Play.png';
import huawei from '../../../public/img/icons/Huawei.png';
import keys from '../../../public/img/icons/key.svg';
import kinto_label from '../../../public/img/icons/kinto_label.svg';
import money from '../../../public/img/icons/money.svg';
import prado_logo from '../../../public/img/icons/prado_logo.png';
import settings from '../../../public/img/icons/settings.svg';
import small_circle_check from '../../../public/img/icons/small_circle_check.svg';
import warning from '../../../public/img/icons/warning.svg';
import wheel from '../../../public/img/icons/Wheel.svg';

interface IconNameProps {
  colorStyle?: CSSProperties['color'] | CSSProperties['stroke'];
}

export enum IconName {
  google,
  huawei,
  money,
  apple,
  keys,
  circled_check,
  kinto_label,
  wheel,
  check_beadge,
  settings,
  small_circle_check,
  drag_nob,
  prado_logo,
  warning,
  stroke,
  longStroke,
  blackIc,
  search,
  whiteTick,
  darkCloseIcon,
  info,
  darkTick,
  twitterBlack,
  download,
  smallPhone,
  smallEmail,
  smallInstagram,
  smallFacebook,
  smallTwitter,
  smallYoutube,
  star,
  primaryButtonRightArrow,
  anchorLink,
  mobileCategories,
  back,
  backArrowOfficial,
  frontArrowOfficial,
  backArrowOfficialMobile,
  frontArrowOfficialMobile,
  smallArrowLeft,
  smallArrowDown,
  smallArrowUp,
  tinyArrowUp,
  navBarSmallArrow,
  openNewTab,
  caution,
  location,
  cart,
  downArrow,
  plus,
  dealerLocation,
  dealerContact,
  dealerEmail,
  moreInfo,
  toyotaFinancial,
  kintoFinancial,
  kintoFinancialTitle,
  addQuote,
  addedQuote,
  includedCheck,

}

const Icon = ({ name, className, colorStyle }: IconProps) => {
  let IconImage: () => JSX.Element;
  switch (name) {
    case IconName.includedCheck:
      IconImage = () => (
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12.926"
          height="10.037"
          viewBox="0 0 12.926 10.037">
          <path id="Path_25464" data-name="Path 25464" d="M7.157,14.05a.66.66,0,0,1-.933,0L2.5,10.323a.989.989,0,0,1,0-1.4l.467-.467a.989.989,0,0,1,1.4,0l2.326,2.326L12.977,4.5a.989.989,0,0,1,1.4,0l.467.467a.989.989,0,0,1,0,1.4Z" transform="translate(-2.208 -4.206)" fill="#fff" />
        </svg>
      );
      break;
    case IconName.addedQuote:
      IconImage = () => (
        <svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
          <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="16.5" cy="16.5" rx="16.5" ry="16.5" fill="#fff" />
          <path id="Path_12578" data-name="Path 12578" d="M7.157,14.05a.66.66,0,0,1-.933,0L2.5,10.323a.989.989,0,0,1,0-1.4l.467-.467a.989.989,0,0,1,1.4,0l2.326,2.326L12.977,4.5a.989.989,0,0,1,1.4,0l.467.467a.989.989,0,0,1,0,1.4Z" transform="translate(8.626 7.274)" fill="#d1021e" />
        </svg>
      );
      break;
    case IconName.addQuote:
      IconImage = () => (
        <svg
          width='33'
          height='33'
          viewBox='0 0 33 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{}}
        >
          <ellipse
            opacity='0.15'
            cx='16.4998'
            cy='16.4999'
            rx='16.4998'
            ry='16.4999'
            fill='white'
            style={{ transition: 'fill opacity 0.5s ease-in-out' }}
          />
          <path
            d='M15.7836 21.324C15.6602 21.448 15.4919 21.5173 15.317 21.5173C15.1421 21.5173 14.9738 21.448 14.8504 21.324L11.1241 17.597C10.7373 17.2102 10.7373 16.5832 11.1241 16.1971L11.5907 15.7305C11.9774 15.3437 12.6038 15.3437 12.9905 15.7305L15.317 18.057L21.6034 11.7705C21.9902 11.3838 22.6172 11.3838 23.0033 11.7705L23.4699 12.2372C23.8566 12.6239 23.8566 13.2509 23.4699 13.637L15.7836 21.324Z'
            fill='white'
            opacity='0'
            style={{ transition: 'fill 0.5s ease-in-out' }}
          />
        </svg>
      );
      break;
    case IconName.kintoFinancialTitle:
      IconImage = () => (
        <svg
          id='kinto-label'
          xmlns='http://www.w3.org/2000/svg'
          width='103.102'
          height='27'
          viewBox='0 0 103.102 27'
        >
          <path
            id='Path_12649'
            data-name='Path 12649'
            d='M23.567,3.749h4.312c1.379,0,2.233.646,3.2,1.915L38.19,17.091h.055V3.749h2.123a1.928,1.928,0,0,1,1.97,1.97V23.637H40.729a4.13,4.13,0,0,1-3.995-1.981L29.685,10.316h-.055V23.626H27.507a1.921,1.921,0,0,1-1.97-1.97V5.72A1.962,1.962,0,0,0,23.567,3.749Z'
            transform='translate(13.788 2.194)'
            fill='#fff'
          />
          <path
            id='Path_12650'
            data-name='Path 12650'
            d='M38.158,3.749H54.444a1.954,1.954,0,0,1,1.97,1.97v2H50.449v15.9h-2.4a1.909,1.909,0,0,1-1.97-1.97V7.733H42.1a1.936,1.936,0,0,1-1.97-2A1.964,1.964,0,0,0,38.158,3.749Z'
            transform='translate(22.325 2.194)'
            fill='#fff'
          />
          <path
            id='Path_12651'
            data-name='Path 12651'
            d='M16.33,19.95V6.684h2.4a1.935,1.935,0,0,1,1.97,1.97V21.92H18.3A1.955,1.955,0,0,1,16.33,19.95Z'
            transform='translate(9.554 3.911)'
            fill='#fff'
          />
          <path
            id='Path_12652'
            data-name='Path 12652'
            d='M1.97,5.72V21.656a1.928,1.928,0,0,0,1.97,1.97H6.348V16.3l5.483,5.582a4.815,4.815,0,0,0,3.984,1.74H19L8.986,13.7,19,3.749H13.539L6.348,11.072,6.326,5.72a1.982,1.982,0,0,0-1.97-1.97H0A2.035,2.035,0,0,1,1.97,5.72Z'
            transform='translate(0 2.194)'
            fill='#fff'
          />
          <path
            id='Path_12653'
            data-name='Path 12653'
            d='M62.319,3.886a10.42,10.42,0,1,0,10.42,10.42A10.417,10.417,0,0,0,62.319,3.886Zm0,16.844a6.425,6.425,0,1,1,6.425-6.425A6.427,6.427,0,0,1,62.319,20.731Z'
            transform='translate(30.364 2.274)'
            fill='#fff'
          />
          <path
            id='Path_12654'
            data-name='Path 12654'
            d='M21.209,3.973a1.948,1.948,0,0,0-2.3,0,2.371,2.371,0,0,0-.624,3.2,2.859,2.859,0,0,0,2.977,1.3,4.584,4.584,0,0,0,3.262-1.839,4.188,4.188,0,0,0-.033-4.717A4.1,4.1,0,0,0,20.869,0,4.524,4.524,0,0,0,17.6,1.981C16.481,3.305,15.966,3.6,15,3.678a3.021,3.021,0,0,1-2.3-.788,9.518,9.518,0,0,1-.69-.8,6.3,6.3,0,0,0,1.259,1.6,3.262,3.262,0,0,0,3.251.493,11.476,11.476,0,0,0,2.857-1.773,1.9,1.9,0,0,1,2.747.952,2.4,2.4,0,0,1-.317,2.069A1.445,1.445,0,0,0,21.209,3.973Z'
            transform='translate(7.029)'
            fill='#fff'
          />
        </svg>
      );
      break;
    case IconName.kintoFinancial:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50.486'
          height='40.695'
          viewBox='0 0 50.486 40.695'
        >
          <g id='key' transform='translate(0.001 -0.375)'>
            <path
              id='Path_12612'
              data-name='Path 12612'
              d='M3.029,68.952a.3.3,0,0,1-.2-.041.7.7,0,0,1-.489-.407L.1,64.348a.8.8,0,0,1,.326-1.1l1.345-.734-.734-1.548a.821.821,0,0,1,.285-1.018l1.467-.937L2.01,57.383A.821.821,0,0,1,2.3,56.364L3.8,55.346l-.774-1.711a.792.792,0,0,1-.041-.529L4.536,47.2a9.106,9.106,0,0,1-2.485-9.165,9.034,9.034,0,1,1,17.394,4.888,9.518,9.518,0,0,1-6.925,6.8L7.876,65.937a.877.877,0,0,1-.367.489L3.436,68.789A.584.584,0,0,1,3.029,68.952ZM1.888,64.308,3.355,67,6.41,65.2l4.685-16.376a.783.783,0,0,1,.652-.57,7.833,7.833,0,0,0,6.11-5.744,7.387,7.387,0,0,0-5.133-9.125A7.44,7.44,0,0,0,5.962,46.262a.845.845,0,0,1,.285.855l-1.589,6.11.937,2.078a.834.834,0,0,1-.285,1.018L3.8,57.3l.774,1.589a.82.82,0,0,1-.285,1.018l-1.466.937L3.6,62.434a.79.79,0,0,1-.326,1.059Zm0,0'
              transform='translate(0 -27.882)'
              fill='#fff'
            />
            <path
              id='Path_12613'
              data-name='Path 12613'
              d='M87.957,69.528a2.555,2.555,0,0,1-.774-.123,3.037,3.037,0,0,1-1.752-1.344,2.84,2.84,0,0,1-.245-2.159,2.931,2.931,0,0,1,3.544-2,3.037,3.037,0,0,1,1.752,1.345,2.9,2.9,0,0,1-2.525,4.277Zm0-4.074a1.222,1.222,0,0,0-1.181.9,1.249,1.249,0,0,0,.122.937A1.251,1.251,0,0,0,89.179,67a1.249,1.249,0,0,0-.123-.937,1.2,1.2,0,0,0-1.1-.611Zm0,0'
              transform='translate(-76.414 -56.973)'
              fill='#fff'
            />
            <path
              id='Path_12614'
              data-name='Path 12614'
              d='M137.321,126.348a7.753,7.753,0,0,1-4.766-1.629.815.815,0,0,1,.977-1.3,6.252,6.252,0,0,0,6.925.407.8.8,0,0,1,.815,1.385A7.194,7.194,0,0,1,137.321,126.348Zm0,0'
              transform='translate(-118.772 -110.372)'
              fill='#fff'
            />
            <path
              id='Path_12615'
              data-name='Path 12615'
              d='M106.565,8.481h-.041a.846.846,0,0,1-.774-.856,7.8,7.8,0,0,1,15.4-1.1.815.815,0,1,1-1.588.367,6.159,6.159,0,0,0-12.18.815A.871.871,0,0,1,106.565,8.481Zm0,0'
              transform='translate(-94.982)'
              fill='#fff'
            />
            <path
              id='Path_12616'
              data-name='Path 12616'
              d='M226.085,83.9a.8.8,0,0,1-.57-.244L211.665,69.8a3.388,3.388,0,0,1-1.059-2.2l-.855-9v-.082a3.621,3.621,0,0,1,1.059-2.688,3.365,3.365,0,0,1,2.485-1.059h.285l9,.815a3.476,3.476,0,0,1,2.2,1.059l13.85,13.85a.788.788,0,0,1,0,1.141L226.655,83.655A.683.683,0,0,1,226.085,83.9ZM211.379,58.481l.855,9v.082a1.786,1.786,0,0,0,.611,1.1l13.28,13.28L236.92,71.108l-13.28-13.28a1.893,1.893,0,0,0-1.1-.611h-.082l-9.165-.855a1.784,1.784,0,0,0-1.3.611A1.885,1.885,0,0,0,211.379,58.481Zm0,0'
              transform='translate(-188.39 -48.859)'
              fill='#fff'
            />
            <path
              id='Path_12617'
              data-name='Path 12617'
              d='M302.564,151.155a.806.806,0,0,1-.57-.244.788.788,0,0,1,0-1.141l3.951-3.951a.806.806,0,1,1,1.141,1.141l-3.951,3.951A.806.806,0,0,1,302.564,151.155Zm0,0'
              transform='translate(-271.02 -130.412)'
              fill='#fff'
            />
            <path
              id='Path_12618'
              data-name='Path 12618'
              d='M347.764,196.357a.8.8,0,0,1-.57-.244.787.787,0,0,1,0-1.141l3.951-3.951a.807.807,0,0,1,1.141,1.141l-3.951,3.951A.806.806,0,0,1,347.764,196.357Zm0,0'
              transform='translate(-311.618 -171.011)'
              fill='#fff'
            />
          </g>
        </svg>
      );
      break;
    case IconName.toyotaFinancial:
      IconImage = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="44.541" height="38.294" viewBox="0 0 44.541 38.294">
          <g id="Group_293" data-name="Group 293" transform="translate(0.1 0.103)">
            <g id="Group_292" data-name="Group 292">
              <path id="Path_12606" data-name="Path 12606" d="M44.245,50.142h0l-8.365-21a.87.87,0,0,0-1.13-.487h0L.811,42.164a.852.852,0,0,0-.348.277A.86.86,0,0,0,0,43.2V65.81a.87.87,0,0,0,.87.87H37.4a.87.87,0,0,0,.87-.87V53.459l5.49-2.187A.87.87,0,0,0,44.245,50.142ZM36.53,64.94H1.74V44.065H36.53ZM14.512,42.33l14.563-5.8a6.92,6.92,0,0,0,4.986,2.15l1.453,3.653Zm23.758,9.26V43.2a.87.87,0,0,0-.87-.87h-.014L35.543,37.7a.72.72,0,0,0-.071-.11.859.859,0,0,0-.909-.67A5.2,5.2,0,0,1,30,34.954a.862.862,0,0,0-1.116-.195.978.978,0,0,0-.123.023l-17.78,7.08a.859.859,0,0,0-.478.464h-5.4L34.585,30.588,42.308,49.98Z" transform="translate(0 -28.588)" fill="#fff" stroke="#373737" stroke-width="0.2" />
              <path id="Path_12607" data-name="Path 12607" d="M32.621,200.208a5.2,5.2,0,0,1,3.511,3.507.87.87,0,0,0,.833.621.8.8,0,0,0,.134-.02.807.807,0,0,0,.119.024H58.093a.749.749,0,0,0,.106-.022.81.81,0,0,0,.978-.6v0a5.2,5.2,0,0,1,3.511-3.511.859.859,0,0,0,.6-.957.879.879,0,0,0,.025-.129v-6.958a.785.785,0,0,0-.026-.129.858.858,0,0,0-.6-.957,5.2,5.2,0,0,1-3.51-3.512.859.859,0,0,0-.964-.6.827.827,0,0,0-.123-.024H37.219a.822.822,0,0,0-.13.026.859.859,0,0,0-.957.6,5.2,5.2,0,0,1-3.511,3.51.859.859,0,0,0-.6.957.877.877,0,0,0-.024.129v6.958a.8.8,0,0,0,.024.121A.861.861,0,0,0,32.621,200.208Zm1.119-7.691a6.9,6.9,0,0,0,3.832-3.832H57.739a6.9,6.9,0,0,0,3.833,3.832v6.252A6.91,6.91,0,0,0,57.74,202.6H37.572a6.91,6.91,0,0,0-3.832-3.832Z" transform="translate(-28.521 -169.728)" fill="#fff" stroke="#373737" stroke-width="0.2" />
              <path id="Path_12608" data-name="Path 12608" d="M133.219,229.382A5.219,5.219,0,1,0,128,224.164,5.219,5.219,0,0,0,133.219,229.382Zm0-8.7a3.479,3.479,0,1,1-3.479,3.479A3.479,3.479,0,0,1,133.219,220.685Z" transform="translate(-114.084 -198.249)" fill="#fff" stroke="#373737" stroke-width="0.2" />
              <path id="Path_12609" data-name="Path 12609" d="M77.3,257.554a1.3,1.3,0,1,0-1.3-1.3A1.3,1.3,0,0,0,77.3,257.554Zm0-1.74a.435.435,0,1,1-.435.435A.435.435,0,0,1,77.3,255.815Z" transform="translate(-67.737 -230.335)" fill="#fff" stroke="#373737" stroke-width="0.2" />
              <path id="Path_12610" data-name="Path 12610" d="M253.3,257.554a1.3,1.3,0,1,0-1.3-1.3A1.3,1.3,0,0,0,253.3,257.554Zm0-1.74a.435.435,0,1,1-.435.435A.435.435,0,0,1,253.3,255.815Z" transform="translate(-224.602 -230.335)" fill="#fff" stroke="#373737" stroke-width="0.2" />
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.moreInfo:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14.998'
          height='17.002'
          viewBox='0 0 12.998 13.002'
          className='ml-5'
        >
          <g
            id='Group_306'
            data-name='Group 306'
            transform='translate(-310.001 -495.999)'
          >
            <path
              id='Subtraction_7'
              data-name='Subtraction 7'
              d='M-6914.5-13894.5a6.506,6.506,0,0,1-6.5-6.5,6.508,6.508,0,0,1,6.5-6.5,6.508,6.508,0,0,1,6.5,6.5A6.506,6.506,0,0,1-6914.5-13894.5Zm-.29-4.29a.63.63,0,0,0-.461.178.636.636,0,0,0-.178.461.627.627,0,0,0,.178.461.633.633,0,0,0,.461.182.643.643,0,0,0,.46-.182.627.627,0,0,0,.178-.461.636.636,0,0,0-.178-.461A.636.636,0,0,0-6914.79-13898.789Zm.2-4.932a1.126,1.126,0,0,1,.775.265.909.909,0,0,1,.3.716.975.975,0,0,1-.209.643,4.167,4.167,0,0,1-.622.559,3.584,3.584,0,0,0-.67.621,1.131,1.131,0,0,0-.23.739v.5a.088.088,0,0,0,.1.1h.768a.088.088,0,0,0,.1-.1v-.45a.684.684,0,0,1,.164-.461,3.449,3.449,0,0,1,.517-.45,5.5,5.5,0,0,0,.541-.443,1.845,1.845,0,0,0,.359-.527,1.806,1.806,0,0,0,.15-.758,1.713,1.713,0,0,0-.552-1.322,2.1,2.1,0,0,0-1.459-.5,2.392,2.392,0,0,0-1.085.233,1.772,1.772,0,0,0-.736.66,1.855,1.855,0,0,0-.258.978v.22a.088.088,0,0,0,.1.1l.758.042a.091.091,0,0,0,.1-.1v-.258a.939.939,0,0,1,.3-.727A1.129,1.129,0,0,1-6914.591-13903.721Z'
              transform='translate(7231 14403.5)'
              fill='#fff'
              opacity='0.6'
            />
          </g>
        </svg>
      );
      break;
    case IconName.dealerEmail:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19.562'
          height='14.459'
          viewBox='0 0 19.562 14.459'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='Path_25305'
            data-name='Path 25305'
            d='M68.562,57.126A2.126,2.126,0,0,0,66.436,55H51.126A2.126,2.126,0,0,0,49,57.126V67.332a2.126,2.126,0,0,0,2.126,2.126H66.436a2.126,2.126,0,0,0,2.126-2.126Zm-7.229,5.7-1.048,1.048a2.127,2.127,0,0,1-3.007,0l-1.048-1.048-5.653,5.653a1.276,1.276,0,0,0,.55.125H66.436a1.276,1.276,0,0,0,.55-.125Zm6.254-6.254a1.276,1.276,0,0,1,.125.55V67.332a1.276,1.276,0,0,1-.125.55l-5.653-5.653Zm-17.612,0,5.653,5.653-5.653,5.653a1.276,1.276,0,0,1-.125-.55V57.126A1.276,1.276,0,0,1,49.975,56.576Zm17.01-.6a1.276,1.276,0,0,0-.55-.125H51.126a1.276,1.276,0,0,0-.55.125l7.3,7.3a1.275,1.275,0,0,0,1.8,0Z'
            transform='translate(-49 -55)'
            fill-rule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.dealerContact:
      IconImage = () => (
        <svg
          id='Group_146941'
          data-name='Group 146941'
          xmlns='http://www.w3.org/2000/svg'
          width='15.839'
          height='15.862'
          viewBox='0 0 15.839 15.862'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='Path_25302'
            data-name='Path 25302'
            d='M12.869,36.315a1.56,1.56,0,0,0-1.132-.519,1.613,1.613,0,0,0-1.145.516L9.535,37.366c-.087-.047-.174-.09-.258-.134-.121-.06-.234-.117-.331-.177A11.5,11.5,0,0,1,6.19,34.544a6.783,6.783,0,0,1-.9-1.426c.275-.251.529-.512.777-.763.094-.094.187-.191.281-.285a1.536,1.536,0,0,0,0-2.317l-.914-.914c-.1-.1-.211-.211-.311-.318-.2-.208-.412-.422-.629-.623a1.585,1.585,0,0,0-1.122-.492A1.64,1.64,0,0,0,2.23,27.9l-.007.007L1.085,29.053A2.449,2.449,0,0,0,.358,30.61a5.869,5.869,0,0,0,.429,2.484,14.415,14.415,0,0,0,2.561,4.272,15.754,15.754,0,0,0,5.246,4.108,8.174,8.174,0,0,0,2.946.87c.07,0,.144.007.211.007a2.523,2.523,0,0,0,1.932-.83c0-.007.01-.01.013-.017a7.61,7.61,0,0,1,.586-.606c.144-.137.291-.281.435-.432a1.67,1.67,0,0,0,.506-1.158,1.609,1.609,0,0,0-.516-1.148Zm1.2,3.525s0,0,0,0c-.131.141-.264.268-.408.408a8.8,8.8,0,0,0-.646.67,1.614,1.614,0,0,1-1.259.532c-.05,0-.1,0-.154,0a7.261,7.261,0,0,1-2.611-.783,14.871,14.871,0,0,1-4.941-3.87,13.592,13.592,0,0,1-2.41-4.014,4.78,4.78,0,0,1-.375-2.1,1.537,1.537,0,0,1,.462-.994l1.142-1.142a.761.761,0,0,1,.509-.238.716.716,0,0,1,.489.234l.01.01c.2.191.4.388.6.6.1.107.211.214.318.325l.914.914a.639.639,0,0,1,0,1.038c-.1.1-.191.194-.288.288-.281.288-.549.556-.84.817-.007.007-.013.01-.017.017a.683.683,0,0,0-.174.76l.01.03A7.338,7.338,0,0,0,5.48,35.106l0,0a12.288,12.288,0,0,0,2.973,2.705,4.571,4.571,0,0,0,.412.224c.121.06.234.117.331.177.013.007.027.017.04.023a.726.726,0,0,0,.331.084.716.716,0,0,0,.509-.231l1.145-1.145a.757.757,0,0,1,.506-.251.682.682,0,0,1,.482.244l.007.007,1.845,1.845A.662.662,0,0,1,14.068,39.84Z'
            transform='translate(-0.344 -26.489)'
          />
          <path
            id='Path_25303'
            data-name='Path 25303'
            d='M245.316,86.822a4.309,4.309,0,0,1,3.508,3.509.449.449,0,0,0,.445.375.6.6,0,0,0,.077-.007.452.452,0,0,0,.372-.522,5.21,5.21,0,0,0-4.245-4.245.454.454,0,0,0-.522.368A.447.447,0,0,0,245.316,86.822Z'
            transform='translate(-236.755 -83.049)'
          />
          <path
            id='Path_25304'
            data-name='Path 25304'
            d='M256.291,7A8.579,8.579,0,0,0,249.3.007a.451.451,0,1,0-.147.891A7.662,7.662,0,0,1,255.4,7.145a.449.449,0,0,0,.445.375.6.6,0,0,0,.077-.007A.444.444,0,0,0,256.291,7Z'
            transform='translate(-240.458 0)'
          />
        </svg>
      );

      break;
    case IconName.dealerLocation:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18.009'
          height='18.009'
          viewBox='0 0 18.009 18.009'
          className={conditionaClass('text-current', className)}
        >
          <defs>
            <clipPath id='clip-path'>
              <path
                id='path2511'
                d='M0-682.665H18.009v18.009H0Z'
                transform='translate(0 682.665)'
              />
            </clipPath>
          </defs>
          <g id='g2505' transform='translate(0 682.665)'>
            <g id='g2507' transform='translate(0 -682.665)'>
              <g id='g2509' clip-path='url(#clip-path)'>
                <g id='Group_145940' data-name='Group 145940'>
                  <g id='g2515' transform='translate(3.201 0.527)'>
                    <path
                      id='path2517'
                      d='M-214.2-625.711c-2.11-3.166-5.8-7.457-5.8-11.15a5.81,5.81,0,0,1,5.8-5.8,5.81,5.81,0,0,1,5.8,5.8C-208.392-633.168-212.085-628.877-214.2-625.711Z'
                      transform='translate(219.999 642.665)'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                      stroke-width='1'
                    />
                  </g>
                  <path
                    id='path2521'
                    d='M-97.362-194.723A2.641,2.641,0,0,1-100-197.361,2.641,2.641,0,0,1-97.362-200a2.641,2.641,0,0,1,2.638,2.638A2.641,2.641,0,0,1-97.362-194.723Z'
                    transform='translate(106.366 203.692)'
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-miterlimit='10'
                    stroke-width='1'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.plus:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13.114'
          height='13.249'
          viewBox='0 0 13.114 13.249'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='Path_16260'
            data-name='Path 16260'
            d='M8.72-13.354H3.312v-2.163H8.72V-21.06h2.271v5.543h5.435v2.163H10.991v5.543H8.72Z'
            transform='translate(-3.312 21.06)'
            fill='currentColor'
          />
        </svg>
      );
      break;
    case IconName.downArrow:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13.113'
          height='7.971'
          viewBox='0 0 13.113 7.971'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='arrow'
            d='M3718.833-99.013l5.85,5.849-5.85,5.849'
            transform='translate(-86.607 -3718.126) rotate(90)'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
          />
        </svg>
      );
      break;
    case IconName.cart:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21.373'
          height='18.592'
          viewBox='0 0 21.373 18.592'
          className={conditionaClass('text-current', className)}
        >
          <g id='shopping-cart' transform='translate(0.25 0.25)'>
            <path
              id='Path_25446'
              data-name='Path 25446'
              d='M6.724,12.228H17.812a.612.612,0,0,0,.588-.443l2.446-8.56a.611.611,0,0,0-.588-.779H5.314L4.877.479A.612.612,0,0,0,4.28,0H.611a.611.611,0,0,0,0,1.223H3.789L6,11.156a1.834,1.834,0,0,0,.729,3.517H17.812a.611.611,0,0,0,0-1.223H6.725a.611.611,0,0,1,0-1.223Zm12.723-8.56-2.1,7.337H7.216L5.585,3.668Zm0,0'
              fill='currentColor'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-width='0.5'
            />
            <path
              id='Path_25447'
              data-name='Path 25447'
              d='M150,361.834A1.834,1.834,0,1,0,151.834,360,1.836,1.836,0,0,0,150,361.834Zm1.834-.611a.611.611,0,1,1-.611.611A.612.612,0,0,1,151.834,361.223Zm0,0'
              transform='translate(-143.886 -345.327)'
              fill='currentColor'
            />
            <path
              id='Path_25448'
              data-name='Path 25448'
              d='M362,361.834A1.834,1.834,0,1,0,363.834,360,1.836,1.836,0,0,0,362,361.834Zm1.834-.611a.611.611,0,1,1-.611.611A.612.612,0,0,1,363.834,361.223Zm0,0'
              transform='translate(-347.245 -345.327)'
              fill='currentColor'
            />
          </g>
        </svg>
      );

      break;
    case IconName.location:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12.096'
          height='16.497'
          viewBox='0 0 12.096 16.497'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='_001-map'
            data-name='001-map'
            d='M11.048,1A6.048,6.048,0,0,0,5,7.048C5,10.243,10.388,17,10.619,17.291a.55.55,0,0,0,.858,0C11.708,17,17.1,10.243,17.1,7.048A6.048,6.048,0,0,0,11.048,1Zm0,7.7a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,11.048,8.7Z'
            transform='translate(-5 -1)'
            fill='currentColor'
          />
        </svg>
      );

      break;
    case IconName.caution:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='16.889'
          viewBox='0 0 19 16.889'
          className={conditionaClass('text-current', className)}
        >
          <g id='warning' transform='translate(-19.072 -22.708)'>
            <path
              id='Path_22672'
              data-name='Path 22672'
              d='M27.169,23.518,19.29,37.165a1.621,1.621,0,0,0,1.4,2.432H36.451a1.621,1.621,0,0,0,1.4-2.432L29.976,23.518a1.621,1.621,0,0,0-2.807,0Z'
              fill='currentColor'
            />
            <g
              id='Group_145890'
              data-name='Group 145890'
              transform='translate(27.554 27.727)'
            >
              <rect
                id='Rectangle_2120'
                data-name='Rectangle 2120'
                width='2.038'
                height='6.212'
                rx='1.019'
                transform='translate(0)'
                fill='#fff'
              />
              <circle
                id='Ellipse_42'
                data-name='Ellipse 42'
                cx='1.019'
                cy='1.019'
                r='1.019'
                transform='translate(0 7.647)'
                fill='#fff'
              />
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.openNewTab:
      IconImage = () => (
        <svg
          id='Group_148276'
          data-name='Group 148276'
          xmlns='http://www.w3.org/2000/svg'
          width='12.932'
          height='12.933'
          viewBox='0 0 12.932 12.933'
          className={conditionaClass('text-current', className)}
        >
          <g
            id='Group_148275'
            data-name='Group 148275'
            transform='translate(0 0)'
          >
            <g id='Group_148274' data-name='Group 148274'>
              <path
                id='Path_25592'
                data-name='Path 25592'
                d='M9.341,12.933H2.156A2.155,2.155,0,0,1,0,10.777V3.592A2.155,2.155,0,0,1,2.156,1.437H5.03a.718.718,0,0,1,0,1.437H2.156a.718.718,0,0,0-.718.718v7.185a.718.718,0,0,0,.718.718H9.341a.719.719,0,0,0,.718-.719V7.9a.719.719,0,0,1,1.437,0v2.874a2.155,2.155,0,0,1-2.155,2.155ZM5.03,8.622A.718.718,0,0,1,4.522,7.4L10.48,1.437H7.9A.718.718,0,0,1,7.9,0h4.311a.716.716,0,0,1,.5.2h0l0,0,0,0h0a.716.716,0,0,1,.2.5V5.029a.718.718,0,0,1-1.437,0V2.453L5.538,8.411a.716.716,0,0,1-.508.21Z'
                transform='translate(-0.001 0)'
                fill='currentColor'
              />
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.navBarSmallArrow:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='9.096'
          height='5.255'
          viewBox='0 0 9.096 5.255'
          className={`group-hover:rotate-180 ${className}`}
        >
          <path
            id='arrow'
            d='M0,0,4.194,4.194,0,8.389'
            transform='translate(8.742 0.354) rotate(90)'
            fill='none'
            stroke={colorStyle}
            strokeWidth='1'
          />
        </svg>
      );
      break;
    case IconName.tinyArrowUp:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13.113'
          height='7.971'
          viewBox='0 0 13.113 7.971'
        >
          <path
            id='arrow'
            d='M3718.833-99.013l5.85,5.849-5.85,5.849'
            transform='translate(99.72 3726.097) rotate(-90)'
            fill='none'
            stroke='#fff'
            stroke-width='2'
          />
        </svg>
      );

      break;
    case IconName.smallArrowUp:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21.486'
          height='27.304'
          viewBox='0 0 21.486 27.304'
          className={conditionaClass('text-current', className)}
        >
          <g id='left' transform='translate(-2.383 -81.897)'>
            <g
              id='Back_Arrow'
              data-name='Back Arrow'
              transform='translate(0.001 85.333)'
            >
              <path
                id='Back_Arrow-2'
                data-name='Back Arrow'
                d='M25.7,9.6H1.867l7.27-8.51a.719.719,0,0,0,0-.905.492.492,0,0,0-.773,0l-8.2,9.6a.719.719,0,0,0,0,.905l8.2,9.6a.492.492,0,0,0,.773,0,.719.719,0,0,0,0-.905l-7.27-8.51H25.705a.648.648,0,0,0,0-1.28Z'
                transform='translate(23.369 -2.884) rotate(90)'
                fill='currentColor'
                stroke='currentColor'
                stroke-width='1'
              />
            </g>
          </g>
        </svg>
      );

      break;
    case IconName.smallArrowDown:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21.486'
          height='27.303'
          viewBox='0 0 21.486 27.303'
          className={conditionaClass('text-current', className)}
        >
          <g
            id='Back_Arrow'
            data-name='Back Arrow'
            transform='translate(-2.382 3.382)'
          >
            <path
              id='Back_Arrow-2'
              data-name='Back Arrow'
              d='M25.7,10.883H1.867l7.27,8.51a.719.719,0,0,1,0,.905.492.492,0,0,1-.773,0L.16,10.7a.719.719,0,0,1,0-.905l8.2-9.6a.492.492,0,0,1,.773,0,.719.719,0,0,1,0,.905L1.867,9.6H25.7a.648.648,0,0,1,0,1.28Z'
              transform='translate(2.882 23.37) rotate(-90)'
              fill='currentColor'
              stroke='currentColor'
              stroke-width='1'
            />
          </g>
        </svg>
      );
      break;
    case IconName.smallArrowLeft:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='27.303'
          height='21.486'
          viewBox='0 0 27.303 21.486'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='Back_Arrow'
            data-name='Back Arrow'
            d='M25.7,10.883H1.867l7.27,8.51a.719.719,0,0,1,0,.905.492.492,0,0,1-.773,0L.16,10.7a.719.719,0,0,1,0-.905l8.2-9.6a.492.492,0,0,1,.773,0,.719.719,0,0,1,0,.905L1.867,9.6H25.7a.648.648,0,0,1,0,1.28Z'
            transform='translate(0.552 0.5)'
            fill='currentColor'
            stroke='currentColor'
            stroke-width='1'
          />
        </svg>
      );
      break;
    case IconName.frontArrowOfficialMobile:
      IconImage = () => (
        <svg
          id='Arrow_btn'
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          viewBox='0 0 44 44'
          className={conditionaClass(
            'h-full border-transparent text-white disabled:text-opacity-20',
            className
          )}
        >
          <circle
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='22'
            cy='22'
            r='22'
            fill='currentColor'
          />
          <path
            id='Path_8'
            data-name='Path 8'
            d='M-263.727,484.181l6.048,6.474-6.048,6.048'
            transform='translate(282.429 -468.569)'
            fill='none'
            stroke='#000'
            stroke-width='3'
          />
        </svg>
      );
      break;
    case IconName.backArrowOfficialMobile:
      IconImage = () => (
        <svg
          id='Arrow_btn'
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          viewBox='0 0 44 44'
          className={conditionaClass(
            'h-full border-transparent text-white disabled:text-opacity-20',
            className
          )}
        >
          <circle
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='22'
            cy='22'
            r='22'
            fill='currentColor'
          />
          <path
            id='Path_8'
            data-name='Path 8'
            d='M-257.679,484.181l-6.048,6.474,6.048,6.048'
            transform='translate(282.977 -468.569)'
            fill='none'
            stroke='#000'
            stroke-width='3'
          />
        </svg>
      );
      break;
    case IconName.frontArrowOfficial:
      IconImage = () => (
        <svg
          id='Arrow_btn'
          xmlns='http://www.w3.org/2000/svg'
          width='72'
          height='72'
          viewBox='0 0 72 72'
          className={conditionaClass(
            'text-darkest-grey h-full border-transparent disabled:text-opacity-20',
            className
          )}
        >
          <circle
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='36'
            cy='36'
            r='36'
            fill='currentColor'
          />
          <path
            id='Path_8'
            data-name='Path 8'
            d='M-263.727,484.181l6.048,6.474-6.048,6.048'
            transform='translate(296.228 -454.681)'
            fill='none'
            stroke='#fff'
            stroke-width='3'
          />
        </svg>
      );
      break;
    case IconName.backArrowOfficial:
      IconImage = () => (
        <svg
          id='Arrow_btn'
          xmlns='http://www.w3.org/2000/svg'
          width='72'
          height='72'
          viewBox='0 0 72 72'
          className={conditionaClass(
            'text-darkest-grey h-full disabled:text-opacity-20',
            className
          )}
        >
          <circle
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='36'
            cy='36'
            r='36'
            fill='currentColor'
          />
          <path
            id='Path_8'
            data-name='Path 8'
            d='M-257.679,484.181l-6.048,6.474,6.048,6.048'
            transform='translate(297.179 -454.681)'
            fill='none'
            stroke='#fff'
            stroke-width='3'
          />
        </svg>
      );
      break;
    case IconName.primaryButtonRightArrow:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='7.971'
          height='13.113'
          viewBox='0 0 7.971 13.113'
          className={conditionaClass('h-full text-current', className)}
        >
          <path
            d='M3718.833-99.013l5.85,5.849-5.85,5.849'
            transform='translate(-3718.126 99.72)'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      );
      break;
    case IconName.star:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18.379'
          height='16.848'
          viewBox='0 0 18.379 16.848'
          className={conditionaClass(
            'h-full fill-current text-current',
            className
          )}
        >
          <path
            id='Polygon_22'
            data-name='Polygon 22'
            d='M9.19,0l2.3,6.265,6.892.17-5.472,4.042,1.962,6.37L9.19,13.08,3.51,16.848l1.962-6.37L0,6.435l6.892-.17Z'
            fill='currentColor'
          />
        </svg>
      );
      break;
    case IconName.smallYoutube:
      IconImage = () => (
        <svg
          id='Icons-_-YouTube-_-Light'
          data-name='Icons-/-YouTube-/-Light'
          xmlns='http://www.w3.org/2000/svg'
          width='19.327'
          height='13.277'
          viewBox='0 0 19.327 13.277'
          className={conditionaClass(
            'h-full fill-current text-current',
            className
          )}
        >
          <path
            id='YouTube.svg'
            d='M28.328,24.028c0,3.258-3.331,3.258-3.331,3.258H12.33A3.213,3.213,0,0,1,9,24.028v-6.76C9,14.01,12.33,14.01,12.33,14.01H25a3.214,3.214,0,0,1,3.331,3.259Zm-5.911-3.371-6.328-3.637v7.272Z'
            transform='translate(-9.001 -14.01)'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.smallTwitter:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17.218'
          height='14.179'
          viewBox='0 0 17.218 14.179'
          className={conditionaClass('h-full fill-current', className)}
        >
          <path
            id='Twitter.svg'
            d='M24.871,12.622a4.8,4.8,0,0,1-.844.284,3.385,3.385,0,0,0,.731-1.3.208.208,0,0,0-.113-.283.357.357,0,0,0-.336,0,8.159,8.159,0,0,1-1.913.795,3.3,3.3,0,0,0-2.529-1.137,3.725,3.725,0,0,0-3.714,3.742,1.134,1.134,0,0,0,.055.454,9.573,9.573,0,0,1-6.523-3.459.294.294,0,0,0-.226-.114.291.291,0,0,0-.226.114,3.648,3.648,0,0,0,.392,4.254.906.906,0,0,1-.507-.17.258.258,0,0,0-.281,0,.435.435,0,0,0-.113.228v.055a3.669,3.669,0,0,0,1.8,3.175.51.51,0,0,1-.281-.056.308.308,0,0,0-.281.114.25.25,0,0,0-.055.284,3.758,3.758,0,0,0,2.7,2.5,6.409,6.409,0,0,1-3.485,1.02,3.774,3.774,0,0,1-.788-.055.306.306,0,0,0-.281.17.272.272,0,0,0,.113.339,10.18,10.18,0,0,0,5.4,1.588,9.408,9.408,0,0,0,7.425-3.289,10.438,10.438,0,0,0,2.586-6.806v-.284a8.2,8.2,0,0,0,1.632-1.757.369.369,0,0,0,0-.34.328.328,0,0,0-.334-.058Z'
            transform='translate(-8.029 -10.976)'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.smallFacebook:
      IconImage = () => (
        <svg
          id='Icons-_-Facebook-_-Light'
          data-name='Icons-/-Facebook-/-Light'
          xmlns='http://www.w3.org/2000/svg'
          width='7.865'
          height='14.249'
          viewBox='0 0 7.865 14.249'
          className={conditionaClass('h-full fill-current', className)}
        >
          <path
            id='Facebook.svg'
            d='M23.675,9.981H21.785a3.267,3.267,0,0,0-3.479,3.5v1.612H16.415a.3.3,0,0,0-.3.3v2.335a.3.3,0,0,0,.3.3h1.891v5.911a.3.3,0,0,0,.3.3h2.477a.3.3,0,0,0,.3-.3V18.022H23.6a.3.3,0,0,0,.3-.3V15.391a.294.294,0,0,0-.094-.2.307.307,0,0,0-.208-.093H21.369V13.723c0-.667.151-1,1.04-1h1.267a.3.3,0,0,0,.3-.3v-2.15a.3.3,0,0,0-.3-.3Z'
            transform='translate(-16.112 -9.981)'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.smallInstagram:
      IconImage = () => (
        <svg
          id='Icons-_-Instagram-_-Light'
          data-name='Icons-/-Instagram-/-Light'
          xmlns='http://www.w3.org/2000/svg'
          // width='17.238'
          height='17.131'
          className={conditionaClass(
            'h-full fill-current text-current',
            className
          )}
          viewBox='0 0 17.238 17.131'
        >
          <path
            id='Instagram.svg'
            d='M7.083,20V13.142c.026-.2.069-.394.078-.583a4.558,4.558,0,0,1,3.7-4.353c.465-.094.931-.138,1.4-.206h6.9c.2.026.388.068.586.077a4.547,4.547,0,0,1,4.344,3.6c.121.506.164,1.028.241,1.543v6.6c-.026.249-.069.506-.086.754a4.543,4.543,0,0,1-3.611,4.319c-.534.128-1.095.163-1.646.24H12.341c-.224-.026-.448-.069-.672-.086a4.587,4.587,0,0,1-4.387-3.711C7.187,20.9,7.152,20.443,7.083,20Zm8.567,3.522c1.276,0,2.56.026,3.836-.017a3.173,3.173,0,0,0,2.448-1.08,3.208,3.208,0,0,0,.75-2.142c.026-2.451.052-4.911,0-7.362a3.083,3.083,0,0,0-3.293-3.3c-2.112-.06-4.223-.069-6.335-.06a9.526,9.526,0,0,0-1.922.18,2.951,2.951,0,0,0-2.4,3.042c-.052,2.493-.052,5,0,7.49A3.072,3.072,0,0,0,12,23.5C13.211,23.554,14.435,23.52,15.651,23.52Zm-4.37-6.976a4.418,4.418,0,1,1,4.4,4.422A4.369,4.369,0,0,1,11.281,16.544Zm4.4,2.862a2.841,2.841,0,1,0-2.844-2.871A2.82,2.82,0,0,0,15.685,19.406Zm5.646-7.43a1.036,1.036,0,0,1-1.017,1.054,1.061,1.061,0,0,1-1.06-1.02,1.04,1.04,0,0,1,1.026-1.037A1,1,0,0,1,21.331,11.976Z'
            transform='translate(-7.083 -8)'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.smallEmail:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12.04'
          height='8.87'
          viewBox='0 0 12.04 8.87'
          className={conditionaClass(
            'h-full fill-current text-current',
            className
          )}
        >
          <g
            id='_001-email'
            data-name='001-email'
            transform='translate(0 -57.088)'
          >
            <g
              id='Group_147362'
              data-name='Group 147362'
              transform='translate(0 59.59)'
            >
              <g
                id='Group_147361'
                data-name='Group 147361'
                transform='translate(0 0)'
              >
                <path
                  id='Path_16332'
                  data-name='Path 16332'
                  d='M6.368,150.654a.684.684,0,0,1-.711,0L0,147.2v4.591a1.777,1.777,0,0,0,1.777,1.777h8.486a1.777,1.777,0,0,0,1.777-1.777V147.2Z'
                  transform='translate(0 -147.2)'
                  fill='currentColor'
                />
              </g>
            </g>
            <g
              id='Group_147364'
              data-name='Group 147364'
              transform='translate(0.057 57.088)'
            >
              <g
                id='Group_147363'
                data-name='Group 147363'
                transform='translate(0 0)'
              >
                <path
                  id='Path_16333'
                  data-name='Path 16333'
                  d='M12.254,57.088H3.768a1.766,1.766,0,0,0-1.72,1.393l5.97,3.639,5.956-3.639A1.766,1.766,0,0,0,12.254,57.088Z'
                  transform='translate(-2.048 -57.088)'
                  fill='currentColor'
                />
              </g>
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.smallPhone:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width='12.037'
          height='12.035'
          viewBox='0 0 12.037 12.035'
          className={conditionaClass('h-full text-current', className)}
        >
          <path
            id='icon'
            d='M21.142,18.589l-1.748-1.221a1.348,1.348,0,0,0-1.878.334l-.406.581a15.028,15.028,0,0,1-2.162-1.816,15.008,15.008,0,0,1-1.816-2.162l.581-.406a1.347,1.347,0,0,0,.334-1.878l-1.221-1.748a1.35,1.35,0,0,0-1.1-.583,1.265,1.265,0,0,0-.439.079,2.42,2.42,0,0,0-.455.223l-.241.17a1.829,1.829,0,0,0-.17.152A2.424,2.424,0,0,0,9.8,11.422c-.5,1.886.743,4.737,3.1,7.095,1.98,1.98,4.358,3.21,6.207,3.21h0a3.444,3.444,0,0,0,.887-.11A2.424,2.424,0,0,0,21.1,21a1.835,1.835,0,0,0,.159-.18l.17-.243a2.43,2.43,0,0,0,.215-.443A1.328,1.328,0,0,0,21.142,18.589Z'
            transform='translate(-9.689 -9.691)'
            className='fill-current stroke-current'
          />
        </svg>
      );
      break;
    case IconName.download:
      IconImage = () => (
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
            fill='currentColor'
          />
        </svg>
      );
      break;
    case IconName.twitterBlack:
      IconImage = () => (
        <svg
          id='Icons-_-Twitter-_-Light'
          data-name='Icons-/-Twitter-/-Light'
          xmlns='http://www.w3.org/2000/svg'
          width='17.218'
          height='14.178'
          viewBox='0 0 17.218 14.178'
          className={className}
        >
          <path
            id='Twitter.svg'
            d='M24.871,12.622a4.8,4.8,0,0,1-.844.284,3.385,3.385,0,0,0,.731-1.3.208.208,0,0,0-.113-.283.357.357,0,0,0-.336,0,8.159,8.159,0,0,1-1.913.795,3.3,3.3,0,0,0-2.529-1.137,3.725,3.725,0,0,0-3.714,3.742,1.134,1.134,0,0,0,.055.454,9.573,9.573,0,0,1-6.523-3.459.294.294,0,0,0-.226-.114.291.291,0,0,0-.226.114,3.648,3.648,0,0,0,.392,4.254.906.906,0,0,1-.507-.17.258.258,0,0,0-.281,0,.435.435,0,0,0-.113.228v.055a3.669,3.669,0,0,0,1.8,3.175.51.51,0,0,1-.281-.056.308.308,0,0,0-.281.114.25.25,0,0,0-.055.284,3.758,3.758,0,0,0,2.7,2.5,6.409,6.409,0,0,1-3.485,1.02,3.774,3.774,0,0,1-.788-.055.306.306,0,0,0-.281.17.272.272,0,0,0,.113.339,10.18,10.18,0,0,0,5.4,1.588,9.408,9.408,0,0,0,7.425-3.289,10.438,10.438,0,0,0,2.586-6.806v-.284a8.2,8.2,0,0,0,1.632-1.757.369.369,0,0,0,0-.34.328.328,0,0,0-.334-.058Z'
            transform='translate(-8.029 -10.976)'
            fill='#494950'
            fillRule='evenodd'
          />
        </svg>
      );
      break;
    case IconName.back:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='27.304'
          height='21.487'
          viewBox='0 0 27.304 21.487'
          className={conditionaClass('mr-3', className)}
        >
          <path
            id='Back_Arrow'
            data-name='Back Arrow'
            d='M25.705,94.936H1.868l7.27-8.51a.719.719,0,0,0,0-.905.492.492,0,0,0-.773,0l-8.2,9.6a.719.719,0,0,0,0,.905l8.2,9.6a.492.492,0,0,0,.773,0,.719.719,0,0,0,0-.905l-7.27-8.51H25.705a.648.648,0,0,0,0-1.28Z'
            transform='translate(0.551 -84.833)'
            fill='#494950'
            stroke='#494950'
            strokeWidth='1'
          />
        </svg>
      );
      break;

    case IconName.darkTick:
      IconImage = () => (
        <svg
          id='icon_placeholder'
          xmlns='http://www.w3.org/2000/svg'
          width='27.406'
          height='27.406'
          viewBox='0 0 27.406 27.406'
          className={className}
        >
          <circle
            id='Ellipse_33'
            data-name='Ellipse 33'
            cx='13.703'
            cy='13.703'
            r='13.703'
            fill='#494950'
          />
          <g id='check' transform='translate(6.001 -63.416)'>
            <g
              id='Group_146269'
              data-name='Group 146269'
              transform='translate(-0.001 71.788)'
            >
              <path
                id='Path_15065'
                data-name='Path 15065'
                d='M14.471,72.132a1.175,1.175,0,0,0-1.662,0L5.33,79.612,2.006,76.288A1.175,1.175,0,0,0,.344,77.95L4.5,82.105a1.175,1.175,0,0,0,1.662,0l8.31-8.311A1.175,1.175,0,0,0,14.471,72.132Z'
                transform='translate(0.001 -71.788)'
                fill='#fff'
              />
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.info:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          className={className}
        >
          <g id='information-circle-svgrepo-com' transform='translate(-2 -2)'>
            <circle
              id='primary'
              cx='10'
              cy='10'
              r='10'
              transform='translate(2 2)'
              fill='#6a6b70'
            />
            <path
              id='secondary'
              d='M12,17a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v4A1,1,0,0,1,12,17ZM12,6.5A1.5,1.5,0,1,0,13.5,8,1.5,1.5,0,0,0,12,6.5Z'
              fill='#fff'
            />
          </g>
        </svg>
      );
      break;
    case IconName.darkCloseIcon:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='35'
          viewBox='0 0 35 35'
          className={className}
        >
          <g
            id='cross-circle-svgrepo-com_1_'
            data-name='cross-circle-svgrepo-com (1)'
            transform='translate(-1.517 -2.438)'
          >
            <circle
              id='primary'
              cx='17.5'
              cy='17.5'
              r='17.5'
              transform='translate(1.517 2.438)'
              fill='#6a6b70'
            />
            <path
              id='secondary'
              d='M17.554,15.064l4.06-4.042a1.772,1.772,0,0,0-2.507-2.507l-4.042,4.06-4.042-4.06a1.772,1.772,0,0,0-2.507,2.507l4.06,4.042-4.06,4.042a1.772,1.772,0,1,0,2.507,2.507l4.042-4.06,4.042,4.06a1.772,1.772,0,1,0,2.507-2.507Z'
              transform='translate(4.587 4.238)'
              fill='#fff'
            />
          </g>
        </svg>
      );
      break;
    case IconName.whiteTick:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21.374'
          height='14.813'
          viewBox='0 0 21.374 14.813'
          className={className}
        >
          <path
            id='White_tick_icon'
            data-name='White tick icon'
            d='M17.775,27.65a1.961,1.961,0,0,1-1.4-.579l-5.926-5.925a1.975,1.975,0,1,1,2.793-2.793l4.588,4.588L28.29,13.357a1.976,1.976,0,0,1,2.791.121,2,2,0,0,1,.169.212v2.247a1.988,1.988,0,0,1-.29.332L19.11,27.131A1.97,1.97,0,0,1,17.775,27.65Z'
            transform='translate(-9.876 -12.838)'
            fill='#fff'
          />
        </svg>
      );
      break;
    case IconName.blackIc:
      IconImage = () => (
        <svg
          id='icon_placeholder'
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='19'
          viewBox='0 0 19 19'
          className={className}
        >
          <circle
            id='Ellipse_33'
            data-name='Ellipse 33'
            cx='9.5'
            cy='9.5'
            r='9.5'
            fill='#494950'
          />
          <text
            id='IC'
            transform='translate(5 13)'
            fill='#fff'
            fontSize='9'
            fontFamily='ToyotaDisplay-Bold, Toyota Display'
            fontWeight='700'
          >
            <tspan x='0' y='0'>
              IC
            </tspan>
          </text>
        </svg>
      );
      break;
    case IconName.longStroke:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5'
          height='194'
          viewBox='0 0 5 194'
          className={className}
        >
          <line
            id='Line_493'
            data-name='Line 493'
            y2='194'
            transform='translate(2.5)'
            fill='none'
            stroke='#707070'
            strokeWidth='5'
          />
        </svg>
      );
      break;
    case IconName.stroke:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5'
          height='121'
          viewBox='0 0 5 121'
          className={className}
        >
          <path
            id='Path_16337'
            data-name='Path 16337'
            d='M0,0V121'
            transform='translate(2.5)'
            fill='none'
            stroke='#707070'
            strokeWidth='5'
          />
        </svg>
      );
      break;
    case IconName.anchorLink:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={conditionaClass('h-6 w-6', className)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
          />
        </svg>
      );
      break;
    case IconName.prado_logo:
      IconImage = () => (
        <Image className={className} src={prado_logo} alt='Toyota Prado logo' />
      );
      break;
    case IconName.drag_nob:
      IconImage = () => (
        <Image className={className} src={drag_nob} alt='Circled dot icon' />
      );
      break;
    case IconName.small_circle_check:
      IconImage = () => (
        <Image
          className={className}
          src={small_circle_check}
          alt='Circled checked icon'
        />
      );
      break;
    case IconName.search:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='13.556'
          height='13.556'
          viewBox='0 0 13.556 13.556'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='Search.svg'
            d='M27.16,27.162a1.356,1.356,0,0,1-1.912,0l-2.484-2.487a5.657,5.657,0,0,1-3.011.843,5.759,5.759,0,1,1,5.766-5.767,10.923,10.923,0,0,1-.843,3.013l2.484,2.483A1.356,1.356,0,0,1,27.16,27.162ZM19.753,16.034a3.725,3.725,0,1,0,2.646,1.08A3.729,3.729,0,0,0,19.753,16.034Z'
            transform='translate(-14 -14)'
            fill='currentColor'
          />
        </svg>
      );
      break;
    case IconName.mobileCategories:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={className}
          width='20.567'
          height='17.403'
          viewBox='0 0 20.567 17.403'
        >
          <g id='spacing' transform='translate(-646.004 -1680.817)'>
            <g
              id='_001-filter'
              data-name='001-filter'
              transform='translate(643.004 1675.817)'
            >
              <path
                id='Path_16261'
                data-name='Path 16261'
                d='M3.791,8.164H6.955A1.584,1.584,0,0,0,8.537,9.746h1.582A1.584,1.584,0,0,0,11.7,8.164H22.776a.791.791,0,0,0,0-1.582H11.7A1.584,1.584,0,0,0,10.119,5H8.537A1.584,1.584,0,0,0,6.955,6.582H3.791a.791.791,0,1,0,0,1.582Z'
                fill='#6a6b70'
              />
              <path
                id='Path_16262'
                data-name='Path 16262'
                d='M22.776,14.582H18.03A1.584,1.584,0,0,0,16.448,13H14.866a1.584,1.584,0,0,0-1.582,1.582H3.791a.791.791,0,0,0,0,1.582h9.492a1.584,1.584,0,0,0,1.582,1.582h1.582a1.584,1.584,0,0,0,1.582-1.582h4.746a.791.791,0,0,0,0-1.582Z'
                transform='translate(0 -1.672)'
                fill='#6a6b70'
              />
              <path
                id='Path_16263'
                data-name='Path 16263'
                d='M22.776,22.582H11.7A1.584,1.584,0,0,0,10.119,21H8.537a1.584,1.584,0,0,0-1.582,1.582H3.791a.791.791,0,0,0,0,1.582H6.955a1.584,1.584,0,0,0,1.582,1.582h1.582A1.584,1.584,0,0,0,11.7,24.164H22.776a.791.791,0,0,0,0-1.582Z'
                transform='translate(0 -3.343)'
                fill='#6a6b70'
              />
            </g>
          </g>
        </svg>
      );
      break;
    case IconName.settings:
      IconImage = () => (
        <Image className={className} src={settings} alt='Settings icon' />
      );
      break;
    case IconName.check_beadge:
      IconImage = () => (
        <Image
          className={className}
          src={check_beadge}
          alt='Checked badge icon'
        />
      );
      break;
    case IconName.wheel:
      IconImage = () => (
        <Image className={className} src={wheel} alt='Wheel icon' />
      );
      break;
    case IconName.kinto_label:
      IconImage = () => (
        <Image className={className} src={kinto_label} alt='Kinto label icon' />
      );
      break;
    case IconName.circled_check:
      IconImage = () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='17'
          viewBox='0 0 17 17'
          className={conditionaClass('text-current', className)}
        >
          <path
            id='tick'
            d='M8.5,17A8.5,8.5,0,1,1,17,8.5,8.509,8.509,0,0,1,8.5,17ZM6.332,7.955a.507.507,0,0,0-.361.15l-.24.24a.51.51,0,0,0,0,.721l1.92,1.92a.339.339,0,0,0,.481,0l3.96-3.96a.511.511,0,0,0,0-.721l-.24-.24a.51.51,0,0,0-.721,0L9.158,8.036,7.891,9.3l-1.2-1.2A.507.507,0,0,0,6.332,7.955Z'
            transform='translate(-0.001)'
            fill='#111'
          />
        </svg>
      );
      break;
    case IconName.google:
      IconImage = () => (
        <Image className={className} src={google} alt='Google PlayStore logo' />
      );
      break;
    case IconName.huawei:
      IconImage = () => (
        <Image
          src={huawei}
          className={className}
          width={161}
          alt='Huawei App Gallery logo'
        />
      );
      break;
    case IconName.money:
      IconImage = () => (
        <Image className={className} src={money} alt='Icon of money notes' />
      );
      break;
    case IconName.warning:
      IconImage = () => (
        <Image className={className} src={warning} alt='Warning caution mark' />
      );
      break;
    case IconName.keys:
      IconImage = () => (
        <Image className={className} src={keys} alt='Icon of keys' />
      );
      break;
    case IconName.apple:
      IconImage = () => (
        <Image
          src={appStore}
          className={className}
          width={161}
          alt='AppStore logo'
        />
      );
      break;
    default:
      IconImage = () => (
        <Image
          src={appStore}
          className={className}
          width={161}
          alt='AppStore logo'
        />
      );
      break;
  }

  return <IconImage />;
};

export default Icon;
