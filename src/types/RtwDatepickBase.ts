import {
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
  onMonthChange?: MonthChangeEventHandler;
  classNames: ModifierClassName;
}
