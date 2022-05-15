import {
  DateChangeEventHandler,
  DateSelectedEventHandler,
  MonthChangeEventHandler, YearChangeEventHandler
} from "./EventHandlers";

export interface ModifierClassName {
  l1: string;
}

export interface RtwDatepickBase {
  className?: string;
  year: number;
  month: number;
  date: number;
  iconHide: boolean;
  locale: string;
  classNames: ModifierClassName;
  onMonthChange?: MonthChangeEventHandler;
  onYearChange?: YearChangeEventHandler;
  onDateChange?: DateChangeEventHandler;
  onDateSelected?: DateSelectedEventHandler;
}
