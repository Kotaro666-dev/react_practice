import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div >
            <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
        </div>
    );
};

export default Example;