import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChangeHandler = (
    value: Date | [Date | null, Date | null] | null,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(`onChangeHanlder.value = ${value}`);
    console.log(`onChangeHanlder.event = ${event.target.value}`);
  };

  // This function can get 全角 value.
  const onChangeRawHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`onChangeRawHandler.value = ${event.target.value}`);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChangeRaw={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeRawHandler(event)
        }
        onChange={(value, event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(value, event)
        }
      />
    </div>
  );
};

export default Example;
