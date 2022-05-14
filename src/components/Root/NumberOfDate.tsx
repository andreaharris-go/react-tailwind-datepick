import React from 'react';
import {endOfMonth, getDate} from "date-fns";
import {DateClickEventHandler} from "types/EventHandlers";

export interface NumberOfDateProps {
  dateNum: number;
  yearNum: number;
  monthNum: number;
  dateSelectedNum: number;
  exactlyDateSelected: string;
  onDateClick: DateClickEventHandler;
}

export function NumberOfDate(props: NumberOfDateProps): JSX.Element {
  const last = getDate(endOfMonth(new Date()));
  const hidden = props.dateNum > last || props.dateNum < 1;

  return hidden ? <></> : (
    <div className="w-full h-full">
      <div className="text-base text-gray-500 font-medium w-8 h-8">
        {
          props.dateSelectedNum === props.dateNum && `${props.yearNum}${props.monthNum}${props.dateNum}` === props.exactlyDateSelected
            ? (
              <p className="rounded-full w-full h-full flex flex-col justify-center items-center cursor-pointer bg-purple-600 text-white">
                {`${props.dateNum}`}
              </p>
            )
            : <p
              className="rounded-full w-full h-full flex flex-col justify-center items-center cursor-pointer hover:bg-purple-600 hover:text-white"
              onClick={() => {
                props.onDateClick(props.dateNum);
              }}
            >
              {`${props.dateNum}`}
            </p>
        }
      </div>
    </div>
  );
}
