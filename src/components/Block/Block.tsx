import React, {FC} from "react";
import './Block.scss'
import classNames from "classnames";

const Block: FC<PropsType> = ({children, className}) => {
    return (
        <div className={classNames('block', className)}>{children}</div>
    )
}

type PropsType = {
    className?: string
}

export default Block