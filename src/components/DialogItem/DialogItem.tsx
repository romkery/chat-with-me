import React, {FC} from "react";
import './DialogItem.scss'
import classNames from "classnames";
import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";
import {format, isThisMonth, isToday} from "date-fns";
import {AvatarColors} from "../../assets/AvatarColors";

const DialogItem: FC<PropsType> = ({user, message, isChecked, isMe}) => {

    const getAvatar = (avatar: string | undefined) => {
        const random = user._id > 9 ? 14 - Number(user._id.toString().slice(-1)) : user._id = (14 - user._id)
        if (avatar) {
            return <img
                src={avatar}
                alt={user.fullName}/>
        } else {
            return <>
                <div className='dialogs__item-noAvatar' style={{backgroundColor: AvatarColors[random]}}>
                    {user.fullName?.charAt(0).toUpperCase()}
                </div>
            </>
        }
    }

    const getMessageTime = (created_at: Date) => {
        if (isToday(created_at)) {
            return format(
                created_at, 'HH:mm'
            )
        } else if (isThisMonth(created_at)) {
            return format(
                created_at, 'LLL d'
            )
        } else {
            return format(
                created_at, 'MM.dd.yyyy'
            )
        }
    }

    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className="dialogs__item-avatar">
                {getAvatar(user.avatar)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullName}</b>
                    <span>
                        {getMessageTime(message.created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    {isMe ? <CheckIcon isChecked={isChecked} isMe={isMe}/> :
                        <div className="dialogs__item-count">
                            <span>{message.count}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DialogItem

type PropsType = {
    isMe?: boolean
    isChecked?: boolean
    message: {
        userId: number
        text: string
        isRead?: boolean
        created_at: Date
        count?: number
    }
    user: {
        _id: number
        avatar?: string
        fullName?: string
        isOnline?: boolean
    }
}
