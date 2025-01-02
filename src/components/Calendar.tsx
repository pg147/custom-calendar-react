import { add, differenceInDays, endOfMonth, format, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Props {
    value?: Date,
    onChange?: (value: Date) => void
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);

    const numofDays = differenceInDays(endDate, startDate) + 1;
    const daysTillStart = startDate.getDay();

    const prevMonth = () => onChange && onChange(sub(value, {months: 1}));
    const nextMonth = () => onChange && onChange(add(value, {months: 1}))
    return (
        <div className="w-full px-4 lg:px-0 lg:max-w-lg mx-auto">
            <h1 className="text-lg font-medium text-center">Calendar</h1>

            <div className="h-fit flex flex-col items-center border p-4 rounded-3xl">
                {/* User Controls and Current Month */}
                <div className="w-full grid grid-cols-7 items-center text-lg justify-around">
                    {/* Change to Previous Year */}
                    <Cell>{"<<"}</Cell>

                    {/* Change to Previous Month */}
                    <Cell onClick={prevMonth} className="text-primary">{"<"}</Cell>

                    {/* Current month & year */}
                    <Cell className="col-span-3 pointer-events-none">{format(value, 'LLLL yyyy')}</Cell>

                    {/* Change to Next Month */}
                    <Cell onClick={nextMonth} className="text-primary">{">"}</Cell>

                    {/* Change to Next Year */}
                    <Cell>{">>"}</Cell>
                </div>

                {/* Separator */}
                <div className="px-4 w-full my-4">
                    <hr className="w-full" />
                </div>

                {/* Row - Week Day Headers */}
                <div className="h-fit w-full grid grid-cols-7 pointer-events-none text-sm">
                    {weekDays.map((days, index) => (
                        <Cell className="font-semibold" key={index}>{days}</Cell>
                    ))}
                </div>

                {/* Row - Days */}
                <div className="h-fit w-full grid grid-cols-7 font-regular text-sm">
                    {Array.from({length : daysTillStart}).map((_, index) => {
                        return <Cell key={index} />
                    })}

                    {Array.from({length : numofDays}).map((_, index) => {
                        const date = index + 1;

                        return <Cell key={index}>{date}</Cell>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar;