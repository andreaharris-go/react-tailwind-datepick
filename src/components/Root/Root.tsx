import React, {useEffect, useState} from 'react';
import { format, startOfMonth, getDay } from 'date-fns';
import { NumberOfDate } from "./NumberOfDate";
import { useRtwDatepick } from 'contexts/RtwDatepick';
import { NavigationPrev } from 'components/NavigationPrev';
import { NavigationNext } from 'components/NavigationNext';

export function Root(): JSX.Element {
  const updateStartIdx = function (y: number, m: number, d: number): number {
    return [0, 1, 2, 3, 4, 5, 6].findIndex(i => i === getDay(startOfMonth(new Date(y, m, d))));
  }

  const displayDateNumber = function (n: number, s: number): number {
    return (n - s);
  };

  const rtwDatepick = useRtwDatepick();
  const [ h1Month, h1MonthSet ] = useState(format(new Date(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date), 'MMM'));
  const [ h1Year, ] = useState(format(new Date(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date), 'yyyy'));
  const [ sIdx, sIdxSet ] = useState(updateStartIdx(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date));

  useEffect(() => {
    sIdxSet(updateStartIdx(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date));
  }, [h1Month]);

  return (
    <div className="">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">{h1Month} {h1Year}</span>
            <div className="flex items-center">
              <NavigationPrev
                onPreviousClick={() => {
                  h1MonthSet(format(new Date(2022, rtwDatepick.month - 1, 1), 'MMM'));
                  rtwDatepick.onMonthChange?.(rtwDatepick.month - 1);
                }}
              />
              <NavigationNext
                onNextClick={() => {
                  h1MonthSet(format(new Date(2022, rtwDatepick.month + 1, 1), 'MMM'));
                  rtwDatepick.onMonthChange?.(rtwDatepick.month + 1);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
              <tr>
                <th>
                  <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                  </div>
                </th>
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
