import {
  DateSelectedEventHandler,
  MonthChangeEventHandler
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
  classNames: ModifierClassName;
  onMonthChange?: MonthChangeEventHandler;
  onDateSelected?: DateSelectedEventHandler;
}
