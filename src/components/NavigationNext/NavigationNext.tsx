import React from 'react';

export interface NavigationProps {
  onNextClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function NavigationNext(props: NavigationProps): JSX.Element {
  return (
    <button
      className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
      onClick={(e) => {
        props.onNextClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler  icon-tabler-chevron-right"
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
        <polyline points="9 6 15 12 9 18"/>
      </svg>
    </button>
  );
}