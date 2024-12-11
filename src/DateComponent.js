import { compareAsc } from 'date-fns';
import { useState } from 'react';

function DateComponent({ today }) {
  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];
  dates.sort(compareAsc);
  // console.log(props);
  const [value, setValue] = useState(1);
  /**
   * value = 1
   */
  return (
    <div>
      <h2>
        {dates.map((el, index) => (
          <p key={index}>{el.toDateString()}</p>
        ))}
        <p>{today}</p>
      </h2>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  );
}

export default DateComponent;
