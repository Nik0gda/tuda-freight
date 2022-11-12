import React from "react";

const HeartSVG = () => {
  return (
    <svg
      width="67"
      height="67"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="67" height="67" rx="24" fill="url(#paint0_radial_17_50)" />
      <g filter="url(#filter0_d_17_50)">
        <path
          d="M42.141 25.7599C40.1584 23.6149 36.9439 23.6149 34.9613 25.7599L33.4999 27.341L32.0387 25.7601C30.0561 23.6151 26.8417 23.6151 24.8591 25.7601C22.8765 27.9051 22.8764 31.3827 24.8591 33.5277L33.4746 42.8489L33.5001 42.8213L33.5254 42.8487L42.141 33.5275C44.1236 31.3826 44.1236 27.9049 42.141 25.7599Z"
          fill="#FA6496"
        />
        <path
          d="M33.3163 27.5107L33.4999 27.7093L33.6835 27.5107L35.1449 25.9296C37.0285 23.8917 40.0737 23.8917 41.9574 25.9296C43.8514 27.9788 43.8514 31.3087 41.9574 33.3578L33.5254 42.4804L33.5001 42.453L33.4746 42.4805L25.0426 33.358C23.1486 31.3089 23.1486 27.979 25.0426 25.9298C26.9263 23.8919 29.9715 23.8919 31.8551 25.9298L33.3163 27.5107Z"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_17_50"
          x="17.3721"
          y="22.1512"
          width="32.2558"
          height="30.6977"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.63 0 0 0 0 0 0 0 0 0 0.211193 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_50"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_50"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_17_50"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.5 33.5) rotate(90) scale(33.5)"
        >
          <stop stopColor="#B8003D" />
          <stop offset="1" stopColor="#9E0035" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HeartSVG;
