import React from 'react';
import {endOfMonth, getDate} from "date-fns";

export interface NumberOfDateProps {
  dateNum: number;
}

export function NumberOfDate(props: NumberOfDateProps): JSX.Element {
  const last = getDate(endOfMonth(new Date()))
  const hidden = props.dateNum > last || props.dateNum < 1
  return hidden ? <></> : (
    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
        {`${props.dateNum}`}
      </p>
    </div>
  );
}
