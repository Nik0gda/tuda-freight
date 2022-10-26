import React from "react";

const WalletSVG = () => {
  return (
    <svg
      width="67"
      height="67"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="67" height="67" rx="24" fill="url(#paint0_radial_17_43)" />
      <g filter="url(#filter0_d_17_43)">
        <rect
          x="25.7093"
          y="24.9302"
          width="14.8023"
          height="16.3605"
          rx="3"
          fill="#474EB3"
        />
        <rect
          x="25.9593"
          y="25.1802"
          width="14.3023"
          height="15.8605"
          rx="2.75"
          stroke="white"
          stroke-opacity="0.3"
          stroke-width="0.5"
        />
        <rect
          x="25.7093"
          y="27.2675"
          width="17.1395"
          height="14.0233"
          rx="3"
          fill="#6D75F2"
          fill-opacity="0.9"
        />
        <rect
          x="25.9593"
          y="27.5175"
          width="16.6395"
          height="13.5233"
          rx="2.75"
          stroke="white"
          stroke-opacity="0.3"
          stroke-width="0.5"
        />
        <g filter="url(#filter1_d_17_43)">
          <rect
            x="37.3953"
            y="31.1628"
            width="7.01163"
            height="6.23256"
            rx="2"
            fill="#8C93FF"
          />
          <rect
            x="37.6453"
            y="31.4128"
            width="6.51163"
            height="5.73256"
            rx="1.75"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="0.5"
          />
        </g>
        <rect
          x="38.9535"
          y="32.7209"
          width="3.11628"
          height="3.11628"
          rx="1.55814"
          fill="#D9DBFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_17_43"
          x="19.7093"
          y="22.9302"
          width="30.6977"
          height="28.3605"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            values="0 0 0 0 0.0891509 0 0 0 0 0.10566 0 0 0 0 0.35 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_43"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_43"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_17_43"
          x="33.3953"
          y="29.1628"
          width="15.0116"
          height="14.2325"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_43"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_43"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_17_43"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.5 33.5) rotate(90) scale(33.5)"
        >
          <stop stop-color="#1D2273" />
          <stop offset="1" stop-color="#161A59" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default WalletSVG;
