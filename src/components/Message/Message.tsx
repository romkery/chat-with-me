// @ts-ignore
import checkedSvg from './../../assets/img/checked.svg'
// @ts-ignore
import noCheckedSvg from './../../assets/img/noChecked.svg'
import React, {FC} from 'react';
import './Message.scss'
import {formatDistanceToNow} from 'date-fns'
import classNames from "classnames";

const Message: FC<PropsType> = ({avatar, text, date, user, isMe, isChecked, attachments}) => {

    return (
        <div className={classNames('message', {'message--isMe': isMe})}>
            <div className="message__content">
                {isMe && isChecked ?
                    <img className='message__icon-checked' src={checkedSvg} alt="Checked icon"/>
                    :
                    <img className='message__icon-checked' src={noCheckedSvg} alt="noChecked icon"/>
                }
                <div className="message__avatar">
                    <img src={avatar} alt={`User ${user.fullName}`}/>
                </div>
                <div className="message__info">
                    <div>
                        <div className="message__bubble">
                            <div className="message__text">
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className="message__attachments">
                            {attachments?.map(item =>
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            )}
                        </div>
                        <span className="message__date">{formatDistanceToNow(date, {addSuffix: true})}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;

type PropsType = {
    avatar: string
    text: string
    date: number | Date
    user: {
        fullName?: string
    }
    isMe?: boolean
    isChecked?: boolean
    attachments?: Array<{
        filename: string
        url: string
    }>
}
