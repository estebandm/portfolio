import React from 'react'
import { motion } from 'framer-motion'

import { variantSVG } from 'Constants/Variants'

const show = {
  transition:{
    duration: 2
  },
  opacity: 1,
  y: '-15%'
}

export const GummyProgramming = ({width = '1000px', height = '1000px'}) => {
    return (
    <motion.svg
      variants={variantSVG}
      initial='hidden'
      animate={show}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 1000 1000"
    >
      <g style={{ isolation: "isolate" }}>
        <g style={{ transform: "translateY(10%)" }} 
          data-name="Layer 1">
          <rect
            width="638.331"
            height="18"
            x="160.161"
            y="648.303"
            fill="#c9c9c9"
            rx="9"
          ></rect>
          <path
            fill="#cecece"
            d="M285.891 573.289a17.343 17.343 0 010-34.685h98.034v34.685z"
          ></path>
          <path
            fill="#fff"
            d="M285.891 532.6H389.6v46.685H285.891a23.342 23.342 0 01-23.342-23.342 23.342 23.342 0 0123.342-23.343z"
          ></path>
          <path
            fill="#1f3969"
            d="M383.925 552.567H279.549a2 2 0 010-4h104.376a2 2 0 010 4zM383.925 563.158H279.549a2 2 0 010-4h104.376a2 2 0 110 4z"
          ></path>
          <path
            fill="#1f3969"
            d="M383.925 575.289h-98.034a19.343 19.343 0 010-38.685h98.034a2 2 0 012 2v34.685a2 2 0 01-2 2zM285.891 540.6a15.343 15.343 0 000 30.685h96.034V540.6z"
          ></path>
          <path
            fill="#ff3e3e"
            d="M285.891 573.289a17.343 17.343 0 010-34.685H385.6l4-6H285.891a23.342 23.342 0 00-23.342 23.342 23.342 23.342 0 0023.342 23.343H389.6l-4-6z"
          ></path>
          <path
            fill="#1f3969"
            d="M389.6 581.289H285.891a25.343 25.343 0 010-50.685H389.6a2 2 0 011.664 3.109l-4 6a2 2 0 01-1.664.891h-99.709a15.343 15.343 0 000 30.685H385.6a2 2 0 011.664.891l4 6a2 2 0 01-1.664 3.109zM285.891 534.6a21.343 21.343 0 000 42.685h99.976l-1.334-2h-98.642a19.343 19.343 0 010-38.685h98.642l1.334-2z"
          ></path>
          <g fill="#1f3969" opacity="0.28">
            <path d="M348.914 532.604H367.305V579.289H348.914z"></path>
            <path d="M367.305 581.289h-18.391a2 2 0 01-2-2V532.6a2 2 0 012-2h18.391a2 2 0 012 2v46.685a2 2 0 01-2 2.004zm-16.391-4h14.391V534.6h-14.391z"></path>
          </g>
          <rect
            width="203.426"
            height="38.557"
            x="182.27"
            y="579.289"
            fill="#50b56f"
            rx="6.761"
          ></rect>
          <path
            fill="#1f3969"
            d="M378.935 619.846h-189.9a8.772 8.772 0 01-8.762-8.761V586.05a8.772 8.772 0 018.762-8.761h189.9a8.771 8.771 0 018.761 8.761v25.035a8.771 8.771 0 01-8.761 8.761zm-189.9-38.557a4.767 4.767 0 00-4.762 4.761v25.035a4.767 4.767 0 004.762 4.761h189.9a4.767 4.767 0 004.761-4.761V586.05a4.767 4.767 0 00-4.761-4.761z"
          ></path>
          <g fill="#1f3969" opacity="0.28">
            <path d="M378.935 579.289h-30.021v15a17.06 17.06 0 0017.061 17.061h19.708c0-.087.013-.173.013-.261V586.05a6.761 6.761 0 00-6.761-6.761z"></path>
            <path d="M385.683 613.347h-19.708a19.083 19.083 0 01-19.061-19.062v-15a2 2 0 012-2h30.021a8.771 8.771 0 018.761 8.761v25.035c0 .1-.005.2-.012.294a2.1 2.1 0 01-2.001 1.972zm-34.769-32.058v13a15.078 15.078 0 0015.061 15.062h17.718v-23.3a4.767 4.767 0 00-4.761-4.761z"></path>
          </g>
          <path
            fill="#cecece"
            d="M432.39 625.587H212.442a32.774 32.774 0 010 22.716H432.39a32.789 32.789 0 010-22.716z"
          ></path>
          <path
            fill="#5f5aff"
            d="M206.485 619.543H438.355V625.587H206.485z"
          ></path>
          <path
            fill="#1f3969"
            d="M438.355 627.587h-231.87a2 2 0 01-2-2v-6.044a2 2 0 012-2h231.87a2 2 0 012 2v6.044a2 2 0 01-2 2zm-229.87-4h227.87v-2.044h-227.87z"
          ></path>
          <path
            fill="#f6f9fd"
            d="M206.485 648.303H438.355V654.347H206.485z"
          ></path>
          <path
            fill="#5f5aff"
            d="M206.485 648.303H438.355V654.347H206.485z"
          ></path>
          <path
            fill="#1f3969"
            d="M438.355 656.347h-231.87a2 2 0 01-2-2V648.3a2 2 0 012-2h231.87a2 2 0 012 2v6.044a2 2 0 01-2 2.003zm-229.87-4h227.87V650.3h-227.87z"
          ></path>
          <path
            fill="#bfcfe2"
            d="M553.631 633l-3.013-33.652H501.21L498.2 633c-.7 7.816-5.4 15.3-12.777 21.276l-.009.072h81.007l-.009-.072c-7.377-5.976-12.081-13.462-12.781-21.276z"
          ></path>
          <g fill="#1f3969" opacity="0.28">
            <path d="M501.21 599.346L499.401 619.543 552.426 619.543 550.618 599.346 501.21 599.346z"></path>
            <path d="M552.427 621.543H499.4a2 2 0 01-1.992-2.179l1.809-20.2a2 2 0 011.992-1.821h49.408a2 2 0 011.992 1.821l1.809 20.2a2 2 0 01-1.992 2.179zm-50.839-4h48.651l-1.45-16.2h-45.75z"></path>
          </g>
          <path
            fill="#1f3969"
            d="M566.417 656.347H485.41a2 2 0 01-1.985-2.242 2.178 2.178 0 01.735-1.385c7.135-5.778 11.412-12.846 12.044-19.9l3.014-33.651a2 2 0 011.992-1.821h49.407a2 2 0 011.992 1.821l3.015 33.651c.631 7.054 4.908 14.121 12.043 19.9a2 2 0 01.727 1.312 2.082 2.082 0 01-.484 1.6 2.031 2.031 0 01-1.493.715zm-75.894-4H561.3c-5.674-5.765-9.063-12.435-9.665-19.171l-2.852-31.829h-45.744l-2.851 31.83c-.603 6.736-3.988 13.406-9.665 19.17z"
          ></path>
          <rect
            width="340"
            height="230"
            x="355.914"
            y="374.346"
            fill="#fff"
            rx="12"
          ></rect>
          <rect
            width="340"
            height="230"
            x="355.914"
            y="374.346"
            fill="#bfcfe2"
            rx="12"
          ></rect>
          <path
            fill="#1f3969"
            d="M683.914 606.347h-316a14.016 14.016 0 01-14-14v-206a14.015 14.015 0 0114-14h316a14.015 14.015 0 0114 14v206a14.016 14.016 0 01-14 14zm-316-230a10.011 10.011 0 00-10 10v206a10.011 10.011 0 0010 10h316a10.012 10.012 0 0010-10v-206a10.011 10.011 0 00-10-10z"
          ></path>
          <path
            fill="#f6f9fd"
            d="M438.618 325.642H613.2090000000001V631.642H438.618z"
            transform="rotate(90 525.914 478.642)"
          ></path>
          <g fill="#1f3969" opacity="0.28">
            <path d="M383.928 374.346v138.593a8 8 0 008 8H581a8 8 0 008-8V374.346z"></path>
            <path d="M581 522.939H391.928a10.011 10.011 0 01-10-10V374.346a2 2 0 012-2H589a2 2 0 012 2v138.593a10.011 10.011 0 01-10 10zM385.928 376.346v136.593a6.007 6.007 0 006 6H581a6.006 6.006 0 006-6V376.346z"></path>
          </g>
          <path
            fill="#1f3969"
            d="M678.914 567.938h-306a2 2 0 01-2-2V391.346a2 2 0 012-2h306a2 2 0 012 2v174.592a2 2 0 01-2 2zm-304-4h302V393.346h-302zM539.359 587.048h-26.891a2 2 0 110-4h26.891a2 2 0 110 4z"
          ></path>
          <rect
            width="205.073"
            height="164.286"
            x="392.928"
            y="345.654"
            fill="#2d425e"
            rx="8"
          ></rect>
          <path
            fill="#1f3969"
            d="M598 367.108H392.928a2 2 0 01-2-2v-11.454a10.011 10.011 0 0110-10H590a10.011 10.011 0 0110 10v11.454a2 2 0 01-2 2zm-203.073-4H596v-9.454a6.006 6.006 0 00-6-6H400.928a6.007 6.007 0 00-6 6z"
          ></path>
          <path
            fill="#d0ddf0"
            d="M400.928 345.654H590a8 8 0 018 8v15.264H392.928v-15.264a8 8 0 018-8z"
          ></path>
          <path
            fill="#1f3969"
            d="M598 370.918H392.928a2 2 0 01-2-2v-15.264a10.011 10.011 0 0110-10H590a10.011 10.011 0 0110 10v15.264a2 2 0 01-2 2zm-203.073-4H596v-13.264a6.006 6.006 0 00-6-6H400.928a6.007 6.007 0 00-6 6z"
          ></path>
          <path
            fill="#1f3969"
            d="M598 370.918H392.928a2 2 0 01-2-2v-15.264a10.011 10.011 0 0110-10H590a10.011 10.011 0 0110 10v15.264a2 2 0 01-2 2zm-203.073-4H596v-13.264a6.006 6.006 0 00-6-6H400.928a6.007 6.007 0 00-6 6z"
          ></path>
          <path
            fill="#1f3969"
            d="M590 511.939H400.928a10.011 10.011 0 01-10-10V353.654a10.011 10.011 0 0110-10H590a10.011 10.011 0 0110 10v148.285a10.011 10.011 0 01-10 10zM400.928 347.654a6.007 6.007 0 00-6 6v148.285a6.007 6.007 0 006 6H590a6.006 6.006 0 006-6V353.654a6.006 6.006 0 00-6-6z"
          ></path>
          <g fill="#1f3969" opacity="0.28">
            <rect
              width="132.016"
              height="138.945"
              x="564.673"
              y="406.4"
              rx="8"
            ></rect>
            <path d="M688.689 547.346H572.673a10.012 10.012 0 01-10-10V414.4a10.011 10.011 0 0110-10h116.016a10.011 10.011 0 0110 10v122.946a10.012 10.012 0 01-10 10zM572.673 408.4a6.006 6.006 0 00-6 6v122.946a6.007 6.007 0 006 6h116.016a6.007 6.007 0 006-6V414.4a6.006 6.006 0 00-6-6z"></path>
          </g>
          <rect
            width="132.016"
            height="138.945"
            x="572.673"
            y="399.4"
            fill="#2aa1ff"
            rx="8"
          ></rect>
          <path
            fill="#1f3969"
            d="M696.689 540.346H580.673a10.012 10.012 0 01-10-10V407.4a10.011 10.011 0 0110-10h116.016a10.011 10.011 0 0110 10v122.946a10.012 10.012 0 01-10 10zM580.673 401.4a6.006 6.006 0 00-6 6v122.946a6.007 6.007 0 006 6h116.016a6.007 6.007 0 006-6V407.4a6.006 6.006 0 00-6-6z"
          ></path>
          <rect
            width="91.903"
            height="18.134"
            x="592.69"
            y="419.339"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            opacity="0.34"
            rx="5.167"
            style={{ mixBlendMode: "screen" }}
          ></rect>
          <g
            opacity="0.34"
            style={{ mixBlendMode: "screen" }}
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <rect
              width="55.977"
              height="18.134"
              x="592.77"
              y="448.646"
              rx="5.167"
            ></rect>
            <rect
              width="27.989"
              height="18.134"
              x="656.684"
              y="448.646"
              rx="5.167"
            ></rect>
          </g>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M592.69 497.23L684.593 497.23"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M592.69 508.021L684.593 508.021"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M592.69 518.811L648.667 518.811"
          ></path>
          <circle cx="413" cy="357.286" r="4" fill="#1f3969"></circle>
          <circle cx="426.886" cy="357.286" r="4" fill="#1f3969"></circle>
          <circle cx="440.772" cy="357.286" r="4" fill="#1f3969"></circle>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M510.741 387.379L523.669 387.379"
          ></path>
          <path
            fill="none"
            stroke="#7bffa0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M444.772 387.379L501.148 387.379"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M417 387.379L436.772 387.379"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M442.772 485.938L485.83 485.938"
          ></path>
          <path
            fill="none"
            stroke="#7bffa0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M417 485.938L430.885 485.938"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M501.149 399.699L509.164 399.699"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M464.279 399.699L491.506 399.699"
          ></path>
          <path
            fill="none"
            stroke="#ffc47d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M426.886 399.699L454.63 399.699"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M469.83 412.019L493.668 412.019"
          ></path>
          <path
            fill="none"
            stroke="#ff5757"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M439.769 412.019L462.251 412.019"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M473.009 424.339L477.947 424.339"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M453.189 424.339L464.279 424.339"
          ></path>
          <path
            fill="none"
            stroke="#7bffa0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M426.886 424.339L444.772 424.339"
          ></path>
          <path
            fill="none"
            stroke="#ffc47d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M465.288 436.659L497.182 436.659"
          ></path>
          <path
            fill="none"
            stroke="#ff5757"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M426.886 436.659L455.513 436.659"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M502.182 448.979L519.525 448.979"
          ></path>
          <path
            fill="none"
            stroke="#ff5757"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M465.288 448.979L493.037 448.979"
          ></path>
          <path
            fill="none"
            stroke="#7bffa0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M439.769 448.979L455.513 448.979"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M477.893 461.299L493.037 461.299"
          ></path>
          <path
            fill="none"
            stroke="#9169ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M439.769 461.299L467.513 461.299"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M517.205 473.619L534.497 473.619"
          ></path>
          <path
            fill="none"
            stroke="#ffc47d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M464.279 473.619L507.848 473.619"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M426.886 473.619L454.63 473.619"
          ></path>
          <path
            fill="#1f3969"
            d="M430.359 634.522H214.9a2 2 0 110-4h215.459a2 2 0 110 4zM430.359 642.539H214.9a2 2 0 110-4h215.459a2 2 0 010 4z"
          ></path>
          <path
            fill="#1f3969"
            d="M432.39 650.3H212.442a2 2 0 01-1.86-2.735 30.787 30.787 0 000-21.247 2 2 0 011.86-2.734H432.39a2 2 0 011.86 2.733 30.792 30.792 0 000 21.249 2 2 0 01-1.86 2.734zm-217.168-4h214.389a35.6 35.6 0 010-18.716H215.222a35.626 35.626 0 010 18.716z"
          ></path>
          <path
            fill="#ffa364"
            d="M722.76 544.444H732.574V617.0939999999999H722.76z"
            transform="rotate(-6.695 727.66 580.766)"
          ></path>
          <path
            fill="#2aa1ff"
            d="M718.956 544.666H728.77V552.056H718.956z"
            transform="rotate(-6.695 723.86 548.36)"
          ></path>
          <path
            fill="#1f3969"
            d="M719.42 554.6a2 2 0 01-1.986-1.767l-.862-7.34a2 2 0 011.753-2.22l9.747-1.144a2 2 0 012.22 1.753l.861 7.34a2 2 0 01-1.753 2.219l-9.747 1.145a2.037 2.037 0 01-.233.014zm1.358-7.587l.395 3.367 5.774-.678-.394-3.367z"
          ></path>
          <path
            fill="#1f3969"
            d="M727.028 619.418a2 2 0 01-1.986-1.767l-8.47-72.154a2 2 0 011.753-2.22l9.747-1.144a2 2 0 012.22 1.753l8.47 72.154a2 2 0 01-1.753 2.22l-9.747 1.144a2.054 2.054 0 01-.234.014zm-6.25-72.4l8 68.181 5.775-.677-8-68.182z"
          ></path>
          <path
            fill="#ff5252"
            d="M741.439 558.065H751.2529999999999V630.715H741.439z"
            transform="rotate(6.204 746.301 594.346)"
          ></path>
          <path
            fill="#1f3969"
            d="M747.3 633.032c-.073 0-.146 0-.219-.011l-9.757-1.061a2 2 0 01-1.772-2.2l7.85-72.224a2 2 0 012.2-1.772l9.757 1.06a2 2 0 011.773 2.2l-7.851 72.224a2 2 0 01-1.981 1.784zm-7.556-4.833l5.78.629 7.419-68.247-5.78-.629z"
          ></path>
          <path
            fill="#2d425e"
            d="M744.965 558.256H754.779V565.646H744.965z"
            transform="rotate(6.204 749.827 561.916)"
          ></path>
          <path
            fill="#1f3969"
            d="M754.354 568.155c-.072 0-.145 0-.218-.011l-9.757-1.061a2 2 0 01-1.773-2.2l.8-7.347a2 2 0 012.2-1.772l9.757 1.06a2 2 0 011.773 2.2l-.8 7.347a2 2 0 01-1.982 1.784zm-7.555-4.833l5.78.629.367-3.37-5.78-.629z"
          ></path>
          <path
            fill="#6567c3"
            d="M761.07 654.573L721.809 654.573 715.424 594.39 767.455 594.39 761.07 654.573z"
          ></path>
          <path
            fill="#6567c3"
            style={{ mixBlendMode: "overlay" }}
            d="M715.424 594.39L715.541 595.495 755.183 595.495 748.915 654.573 761.07 654.573 767.455 594.39 715.424 594.39z"
          ></path>
          <path
            fill="#1f3969"
            d="M761.069 656.573h-39.26a2 2 0 01-1.99-1.789l-6.384-60.184a2 2 0 011.989-2.211h52.031a2 2 0 011.989 2.211l-6.385 60.183a2 2 0 01-1.99 1.79zm-37.462-4h35.664l5.96-56.183h-47.584z"
          ></path>
        </g>
      </g>
    </motion.svg>
    )
}

export default GummyProgramming
