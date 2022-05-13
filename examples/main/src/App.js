import './App.css';
import { RtwDatepick } from "./dist/rtw.min";
import {useState} from "react";

function App() {
  const [ month, monthSet ] = useState(5);
  const [ year, ] = useState(2022);
  const [ date, ] = useState(10);

  return (
    <div className="App">
      <header className="App-header">
        <RtwDatepick
          year={year}
          month={month}
          date={date}
          onMonthChange={monthSet}
        />
      </header>
    </div>
  );
}

export default App;
