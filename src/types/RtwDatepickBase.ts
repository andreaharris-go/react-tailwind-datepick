import {
  DateChangeEventHandler,
  DateSelectedEventHandler,
  MonthChangeEventHandler, YearChangeEventHandler
} from "./EventHandlers";

export interface IconCalendar {
  fillColor: string;
  className: string;
}

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
  defaultEmpty: boolean;
  classNames: ModifierClassName;
  mainIcon: IconCalendar
  onMonthChange?: MonthChangeEventHandler;
  onYearChange?: YearChangeEventHandler;
  onDateChange?: DateChangeEventHandler;
  onDateSelected?: DateSelectedEventHandler;
}
