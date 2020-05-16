import React from "react";

const Loading = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="184px"
    height="184px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(25 50)">
      <circle
        cx="0"
        cy="0"
        r="9"
        fill="rgba(255, 255, 255, 0.8983870967741936)"
        transform="scale(0.393966 0.393966)"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.5128205128205128s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1.5384615384615383s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </g>
    <g transform="translate(50 50)">
      <circle
        cx="0"
        cy="0"
        r="9"
        fill="rgba(255, 255, 255, 0.8983870967741936)"
        transform="scale(0.842973 0.842973)"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.2564102564102564s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1.5384615384615383s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </g>
    <g transform="translate(75 50)">
      <circle
        cx="0"
        cy="0"
        r="9"
        fill="rgba(255, 255, 255, 0.8983870967741936)"
        transform="scale(0.972446 0.972446)"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="0s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1.5384615384615383s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </g>
  </svg>
);

export default Loading;
