import React from 'react';
import checkedSvg from '../../assets/img/checked.svg';
import noCheckedSvg from '../../assets/img/noChecked.svg';

const CheckIcon = ({isMe, isChecked}: PropsType) => {

    return (
        <>
            {isMe !== undefined && isChecked ?
                <img className='message__icon-checked' src={checkedSvg} alt="Checked icon"/>
                :
                <img className='message__icon-checked' src={noCheckedSvg} alt="noChecked icon"/>
            }
        </>
    );
};

export default CheckIcon;

type PropsType = {
    isChecked?: boolean
    isMe?: boolean
}
