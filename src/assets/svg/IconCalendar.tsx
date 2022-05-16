import React from "react";

export function IconCalendar ({ fillColor = '#303A3F', iconClassName = 'w-10 h-10' }): JSX.Element {
  return (
    <svg
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
    >
      <g>
        <rect fill={fillColor} height="65" width="65" x="223.5" y="244.6"/>
        <rect fill={fillColor} height="65" width="65" x="325.4" y="244.6"/>
        <rect fill={fillColor} height="65" width="65" x="121.7" y="343.4"/>
        <rect fill={fillColor} height="65" width="65" x="223.5" y="343.4"/>
        <rect fill={fillColor} height="65" width="65" x="325.4" y="343.4"/>
        <path
          d="M155.8,123.8L155.8,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C184.9,110.7,171.8,123.8,155.8,123.8z"
          fill={fillColor}
        />
        <path
          d="M430.7,61.9h-33v39.7c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9h-90.4v39.7   c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9H83.6c-27.1,0-49.3,22.5-49.3,50v350c0,27.5,22.2,50,49.3,50   h347.2c27.1,0,49.3-22.5,49.3-50v-350C480,84.4,457.8,61.9,430.7,61.9z M422.3,414.7c0,17.1-13.8,31.1-30.6,31.1h-269   c-16.8,0-30.6-14-30.6-31.1V238.3c0-17.1,13.8-32.3,30.6-32.3h269c16.8,0,30.6,15.2,30.6,32.3V414.7z"
          fill={fillColor}
        />
        <path
          d="M348.3,123.8L348.3,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C377.4,110.7,364.3,123.8,348.3,123.8z"
          fill={fillColor}
        />
      </g>
    </svg>
  )
}