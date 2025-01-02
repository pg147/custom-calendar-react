import clsx from "clsx";

interface Props extends React.PropsWithChildren {
    onClick? : () => void;
    className? : string;
}

const Cell: React.FC<Props> = ({className, onClick, children}) => {
    return(
        <div onClick={onClick} className={clsx("p-2 rounded-xl text-center cursor-pointer font-medium hover:bg-tile", className)}>{children}</div>
    )
}

export default Cell;