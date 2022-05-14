import React, { createContext, ReactNode } from 'react';

import { RtwDatepickProps } from 'RtwDatepick';
import { RtwDatepickBase } from "types/RtwDatepickBase";

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
    onMonthChange: initialProps.onMonthChange,
    onDateSelected: initialProps.onDateSelected,
    classNames: initialProps.classNames || { l1: 'p-1' },
  }

  return (
    <RtwDatepickContext.Provider value={value}>
      {props.children}
    </RtwDatepickContext.Provider>
  );
}
