import React, {FC} from "react";
import './Dialogs.scss'
import DialogItem from "../DialogItem/DialogItem";
import orderBy from 'lodash/orderBy';

const Dialogs: FC<PropsType> = ({items}) => {
    return (
        <div className="dialogs">
            {orderBy(items, ['message.created_at'], ['desc']).map(item =>
                <DialogItem key={item._id}
                            isMe={item.user?._id === item.message.userId}
                            {...item}
                />
            )}
        </div>
    )
}

export default Dialogs

type ItemsType = {
    _id: number,
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

type PropsType = {
    items: Array<ItemsType>
}

