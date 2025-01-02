import clsx from "clsx";

interface Props extends React.PropsWithChildren {
    className? : string;
}

const Cell: React.FC<Props> = ({className, children}) => {
    return(
        <div className={clsx("p-2 rounded-xl cursor-pointer font-medium hover:bg-tile", className)}>{children}</div>
    )
}

export default Cell;