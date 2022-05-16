import React, { createContext, ReactNode } from 'react';

import { RtwDatepickProps } from 'RtwDatepick';
import {IconCalendar, RtwDatepickBase} from "types/RtwDatepickBase";

export interface RtwDatepickContextValue extends RtwDatepickBase {}

export const RtwDatepickContext = createContext<RtwDatepickBase | undefined>(undefined);

export interface RtwDatepickProviderProps {
  initialProps: RtwDatepickProps;
  children?: ReactNode;
}

export function RtwDatepickProvider(props: RtwDatepickProviderProps): JSX.Element {
  const { initialProps } = props;

  const value: RtwDatepickContextValue = {
    className: initialProps.className,
    year: initialProps.year || 0,
    month: initialProps.month || 0,
    date: initialProps.date || 0,
    iconHide: initialProps.iconHide || false,
    locale: initialProps.locale || 'en',
    defaultEmpty: initialProps.defaultEmpty || false,
    mainIcon: initialProps.mainIcon || { fillColor: '#303A3F', className: 'w-10 h-10' },
    onMonthChange: initialProps.onMonthChange,
    onYearChange: initialProps.onYearChange,
    onDateSelected: initialProps.onDateSelected,
    onDateChange: initialProps.onDateChange,
    classNames: initialProps.classNames || { l1: 'p-1' },
  }

  return (
    <RtwDatepickContext.Provider value={value}>
      {props.children}
    </RtwDatepickContext.Provider>
  );
}
