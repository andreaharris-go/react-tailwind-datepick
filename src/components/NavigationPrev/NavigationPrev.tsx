import React from 'react';

export interface NavigationProps {
  onPreviousClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function NavigationPrev(props: NavigationProps): JSX.Element {
  return (
    <button
      className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
      onClick={(e) => {
        props.onPreviousClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="15 6 9 12 15 18"/>
      </svg>
    </button>
  );
}
