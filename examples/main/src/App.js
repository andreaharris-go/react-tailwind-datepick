import './App.css';
import { RtwDatepick } from "./dist/rtw.min";
import {useState} from "react";

function App() {
  const [ month, monthSet ] = useState(5);
  const [ year, yearSet ] = useState(2022);
  const [ date, dateSet ] = useState(10);
  const [ dateSelected, dateSelectedSet ] = useState('');

  return (
    <div className="App">
      <header className="App-header flex justify-center items-center">
        <div className="mt-20 text-center">
          <h1 className="text-2xl mb-6">Result: {dateSelected}</h1>
          <div className="flex">
            <RtwDatepick
              onDateSelected={dateSelectedSet}
              year={year}
              month={month}
              date={date}
              onMonthChange={monthSet}
              onYearChange={yearSet}
              onDateChange={dateSet}
              iconHide={false}
              locale="th"
              classNames={{
                l1: 'absolute top-0 left-0'
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
