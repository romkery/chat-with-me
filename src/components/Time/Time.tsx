import {formatDistanceToNow} from "date-fns";
import React from "react";

const Time = ({date, suffix}: PropsType) => {
    return <>
        {formatDistanceToNow(date, {addSuffix: suffix})}
    </>
}

export default Time;

type PropsType = {
    date: Date | number
    suffix?: boolean
}
