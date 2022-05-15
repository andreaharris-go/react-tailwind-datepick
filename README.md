# react-tailwind-datepick #

![screen short](docs/images/screen.png)

## Installation
```
npm install react-tailwind-datepick
```

```javascript
import { RtwDatepick } from "react-tailwind-datepick"

function App() {
  const [ month, monthSet ] = useState(5);
  const [ year, yearSet ] = useState(2022);
  const [ date, dateSet ] = useState(8);
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
```

## Contribute Installation ##
```
git clone https://github.com/andreaharris-go/react-tailwind-datepick.git

cd react-tailwind-datepick

npm install

npm run build-watch

cd examples/main

npm install

npm run start
```

Dev URL. http://localhost:3000
