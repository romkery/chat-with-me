import React from "react";
// @ts-ignore
import checkedSvg from "../../assets/img/checked.svg";
// @ts-ignore
import noCheckedSvg from "../../assets/img/noChecked.svg";

const CheckIcon = ({isMe, isChecked}: PropsType) => {
    console.log(isMe)
    return (
        <>
            {isMe && isChecked ?
                <img className='message__icon-checked' src={checkedSvg} alt="Checked icon"/>
                :
                <img className='message__icon-checked' src={noCheckedSvg} alt="noChecked icon"/>
            }
        </>
    )
}

export default CheckIcon;

type PropsType = {
    isChecked?: boolean
    isMe?: boolean
}
