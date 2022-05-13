import {MonthChangeEventHandler} from "./EventHandlers";

export interface RtwDatepickBase {
  className?: string;
  year: number;
  month: number;
  date: number;
  config?: string;
  onMonthChange?: MonthChangeEventHandler;
}
