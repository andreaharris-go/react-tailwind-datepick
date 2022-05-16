import React, {useEffect, useState} from 'react';
import { format, startOfMonth, getDay } from 'date-fns';
import { NumberOfDate } from "./NumberOfDate";
import { useRtwDatepick } from 'contexts/RtwDatepick';
import { NavigationPrev } from 'components/NavigationPrev';
import { NavigationNext } from 'components/NavigationNext';
import {useEventClickOutside} from "hooks/useEventClickOutside/useEventClickOutside";
import {IconCalendar} from "../../assets/svg/IconCalendar";

export function Root(): JSX.Element {
  const rtwDatepick = useRtwDatepick();
  const {
    ref,
    isComponentVisible,
    isComponentVisibleSet
  } = useEventClickOutside(false);

  const monthManipulate = function (m: number) {
    return m - 1;
  }

  const updateStartIdx = function (y: number, m: number, d: number): number {
    return [0, 1, 2, 3, 4, 5, 6].findIndex(i => i === getDay(startOfMonth(new Date(y, monthManipulate(m), d))));
  }

  const displayDateNumber = function (n: number, s: number): number {
    return (n - s);
  };

  const displayYear = function (n: number): number {
    return rtwDatepick.locale === 'th' ? n + 543 : n;
  }

  const displayMonth = function (n: number): string {
    if (rtwDatepick.locale === 'th') {
      switch (n) {
        case 1:
          return 'มกราคม';
        case 2:
          return 'กุมภาพันธ์';
        case 3:
          return 'มีนาคม';
        case 4:
          return 'เมษายน';
        case 5:
          return 'พฤษภาคม';
        case 6:
          return 'มิถุนายน';
        case 7:
          return 'กรกฎาคม';
        case 8:
          return 'สิงหาคม';
        case 9:
          return 'กันยายน';
        case 10:
          return 'ตุลาคม';
        case 11:
          return 'พฤศจิกายน';
        case 12:
          return 'ธันวาคม';
      }
    }

    return format(new Date(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date), 'MMM')
  }

  const [ h1Month, h1MonthSet ] = useState('');
  const [ sIdx, sIdxSet ] = useState(updateStartIdx(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date));

  useEffect(() => {
    sIdxSet(updateStartIdx(rtwDatepick.year, rtwDatepick.month, rtwDatepick.date));
  }, [h1Month]);

  const [ dateSelected, dateSelectedSet ] = useState(rtwDatepick.defaultEmpty ? 0 : rtwDatepick.date);
  const [ exactlyDateSelected, exactlyDateSelectedSet ] = useState('');
  useEffect(() => {
    if (dateSelected) {
      rtwDatepick.date = dateSelected;
      exactlyDateSelectedSet(`${rtwDatepick.year}${rtwDatepick.month}${rtwDatepick.date}`);
      rtwDatepick.onDateSelected?.(`${rtwDatepick.date}-${rtwDatepick.month}-${rtwDatepick.year}`);
      isComponentVisibleSet(false);
    }
  }, [dateSelected]);

  return (
    <div className="relative w-full">
      <div
        className="flex cursor-pointer w-full"
        onClick={() => {
          if (!isComponentVisible) {
            isComponentVisibleSet(true)
          }
        }}
      >
        {
          rtwDatepick.iconHide ? <div className="w-full h-10" /> : <IconCalendar iconClassName={rtwDatepick.mainIcon.className} fillColor={rtwDatepick.mainIcon.fillColor} />
        }
      </div>
      <div ref={ref} className={`${rtwDatepick.classNames.l1} transition ease-in-out duration-500 ${isComponentVisible ? 'block' : 'hidden'}`}>
        <div className="max-w-sm w-full shadow-lg">
          <div className="p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <span className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">{displayMonth(rtwDatepick.month)} {displayYear(rtwDatepick.year)}</span>
              <div className="flex items-center">
                <NavigationPrev
                  onPreviousClick={() => {
                    if (rtwDatepick.month === 1) {
                      rtwDatepick.month = 13;
                      rtwDatepick.year = rtwDatepick.year - 1;
                      rtwDatepick.onYearChange?.(rtwDatepick.year);
                    }

                    h1MonthSet(format(new Date(rtwDatepick.year, monthManipulate(rtwDatepick.month) - 1, 1), 'MMM'));
                    rtwDatepick.onMonthChange?.(rtwDatepick.month - 1);
                  }}
                />
                <NavigationNext
                  onNextClick={() => {
                    if (rtwDatepick.month === 12) {
                      rtwDatepick.month = 0;
                      rtwDatepick.year = rtwDatepick.year + 1;
                      rtwDatepick.onYearChange?.(rtwDatepick.year);
                    }

                    h1MonthSet(format(new Date(rtwDatepick.year, monthManipulate(rtwDatepick.month) + 1, 1), 'MMM'));
                    rtwDatepick.onMonthChange?.(rtwDatepick.month + 1);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'อา' : 'Su'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'จ' : 'Mo'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'อ' : 'Tu'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'พ' : 'We'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'พฤ' : 'Th'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'ศ' : 'Fr'}</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{rtwDatepick.locale === 'th' ? 'ส' : 'Sa'}</p>
                    </div>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  {
                    [1, 2, 3, 4, 5, 6, 7].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  {
                    [8, 9, 10, 11, 12, 13, 14].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  {
                    [15, 16, 17, 18, 19, 20, 21].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  {
                    [22, 23, 24, 25, 26, 27, 28].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  {
                    [29, 30, 31, 32, 33, 34, 35].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  {
                    [36, 37, 38, 39, 40, 41, 42].map(i => {
                      return (
                        <td className="pt-6" key={`r1_${rtwDatepick.year}${rtwDatepick.month}${i}`}>
                          <NumberOfDate
                            yearNum={rtwDatepick.year}
                            monthNum={rtwDatepick.month}
                            dateNum={displayDateNumber(i, sIdx)}
                            onDateClick={dateSelectedSet}
                            dateSelectedNum={dateSelected}
                            exactlyDateSelected={exactlyDateSelected}
                          />
                        </td>
                      )
                    })
                  }
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
