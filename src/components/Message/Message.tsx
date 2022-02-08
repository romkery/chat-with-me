// @ts-ignore
import checkedSvg from './../../assets/img/checked.svg'
// @ts-ignore
import noCheckedSvg from './../../assets/img/noChecked.svg'
import React, {FC} from 'react';
import './Message.scss'
import {formatDistanceToNow} from 'date-fns'
import classNames from "classnames";
import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";

const Message: FC<PropsType> = ({avatar, text, date, user, isMe, isChecked, attachments, isTyping}) => {

    return (
        <div className={classNames('message', {
            'message--isMe': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments?.length === 1
        })}>
            <div className="message__content">
                <CheckIcon isChecked={isChecked} isMe={isMe}/>
                <div className="message__avatar">
                    <img src={avatar} alt={`User ${user?.fullName}`}/>
                </div>
                <div className="message__info">
                    <div>
                        {(text || isTyping) &&
                        <div className="message__bubble">
                            <div className="message__text">
                                {text && <p>{text}</p>}
                            </div>
                            {isTyping && <div className="message__typing">
                                <span/>
                                <span/>
                                <span/>
                            </div>}
                        </div>
                        }
                        <div className="message__attachments">
                            {attachments?.map(item =>
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            )}
                        </div>
                        {date && <Time date={date}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;

type PropsType = {
    avatar: string
    text?: string
    date?: Date | number
    user?: {
        fullName?: string
    }
    isMe?: boolean
    isChecked?: boolean
    attachments?: Array<{
        filename: string
        url: string
    }>
    isTyping?: boolean
}
