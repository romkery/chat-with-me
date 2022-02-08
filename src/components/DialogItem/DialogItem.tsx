import React, {FC} from "react";
import './DialogItem.scss'
import classNames from "classnames";
import Time from "../Time/Time";
import CheckIcon from "../CheckIcon/CheckIcon";

const DialogItem: FC<PropsType> = ({user, message, isChecked, isMe}) => {

    const getAvatar = (avatar: string | undefined) => {
        if (avatar) {
            return <img
                src={avatar}
                alt='roman'/>
        } else {
            //avatar
        }
    }

    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user?.isOnline})}>
            <div className="dialogs__item-avatar">
                {getAvatar(user?.avatar)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user?.fullName}</b>
                    <span>
                        {/*<Time date={12} suffix={true}/>*/}
                        13:20
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    {isMe ? <CheckIcon isChecked={isChecked} isMe={isMe}/> :
                        <div
                            className="dialogs__item-count">{
                            message.count && message.count > 9 ? '+9' : message.count}
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
        text: string
        isRead?: boolean
        created_at?: number | Date
        count?: number
    }
    user?: {
        avatar?: string
        fullName?: string
        isOnline?: boolean
    }
}
