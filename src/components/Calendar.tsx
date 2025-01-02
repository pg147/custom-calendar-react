import Cell from "./Cell";

export default function Calendar() {
    return (
        <div className="w-full px-4 lg:px-0 lg:max-w-xl mx-auto">
            <h1 className="text-lg font-medium text-center">Calendar</h1>
            <div className="flex flex-col items-center h-20 border p-4 rounded-3xl">
                <div className="w-full grid grid-cols-7 items-center text-lg text-center justify-around">
                    <Cell>{"<<"}</Cell>
                    <Cell className="text-primary">{"<"}</Cell>
                    <Cell className="col-span-3 hover:bg-white cursor-default">January, 2025</Cell>
                    <Cell className="text-primary">{">"}</Cell>
                    <Cell>{">>"}</Cell>
                </div>
                <div className="h-fit w-full grid grid-cols-7">
                
                </div>
            </div>
        </div>
    )
}
