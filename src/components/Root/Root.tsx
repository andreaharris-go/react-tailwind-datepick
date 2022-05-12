import React, { useState } from 'react';
import { format, startOfMonth, getDay } from 'date-fns';
import {NumberOfDate} from "./NumberOfDate";

export function Root(): JSX.Element {
  const [ h1Month, ] = useState(format(new Date(), 'MMM'));
  const [ h1Year, ] = useState(format(new Date(), 'yyyy'));
  const [ sIdx, ] = useState([0, 1, 2, 3, 4, 5, 6].findIndex(i => i === getDay(startOfMonth(new Date()))));
  const displayDateNumber = function (n: number, s: number): number {
    return (n - s);
  };

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">{h1Month} {h1Year}</span>
            <div className="flex items-center">
              <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
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
              <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100">
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
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
              <tr>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                  </div>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(1, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(2, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(3, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(4, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(5, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(6, sIdx)} />
                </td>
                <td className="pt-6">
                  <NumberOfDate dateNum={displayDateNumber(7, sIdx)} />
                </td>
              </tr>
              <tr>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(8, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(9, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(10, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(11, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(12, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(13, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(14, sIdx)} />
                </td>
              </tr>
              <tr>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(15, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(16, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(17, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(18, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(19, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(20, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(21, sIdx)} />
                </td>
              </tr>
              <tr>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(22, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(23, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(24, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(25, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(26, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(27, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(28, sIdx)} />
                </td>
              </tr>
              <tr>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(29, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(30, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(31, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(32, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(33, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(34, sIdx)} />
                </td>
                <td>
                  <NumberOfDate dateNum={displayDateNumber(35, sIdx)} />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
