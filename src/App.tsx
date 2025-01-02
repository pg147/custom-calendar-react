import { useState } from "react";
import Calendar from "./components/Calendar";
import { Calendar2 } from "iconsax-react";

const primaryColor = '#F92E43';

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  return (
    <div className="h-screen w-full px-4 flex flex-col gap-12 justify-center lg:px-0 lg:max-w-lg mx-auto">
      {/* Greeting */}
      <h1 className="text-2xl font-bold text-center">
        Welcome to Custom {""}
        <span className="text-primary">Calendar</span> {""}
      </h1>
      <div>
        {/* Selected Date */}
        <div className="flex items-center w-fit mx-auto lg:mx-0 gap-x-2 mb-6">
          <div className="flex items-center gap-x-2">
            <Calendar2 size={20} color={primaryColor} />
            <h1>Current date : </h1>
          </div>
          <p className="font-semibold">{currentDate.toDateString()}</p>
        </div>

        {/* Calendar Component */}
        <Calendar value={currentDate} onChange={setCurrentDate} />
      </div>
    </div>
  );
}