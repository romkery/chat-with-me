import React, {useState} from 'react';
import './ChatInput.scss';
import {Input} from 'antd';
import {AudioOutlined, PaperClipOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons';

const ChatInput = ({isMe, isChecked}: PropsType) => {

    const [message, setMessage] = useState(null);

    const onSearch = (el: any) => setMessage(el.target.value);

    return (
        <>
            <div className="chat-input">
                <div className='chat-input__wrapper'>
                    <div className="chat-input__smile-btn">
                        <span><SmileOutlined/></span>
                    </div>
                    <Input placeholder="Message" onChange={onSearch}
                           size='large' style={{borderRadius: 12,}}/>
                    <div className="chat-input__clip">
                        <PaperClipOutlined/>
                    </div>
                </div>
                <div className="chat-input__voice">
                    {message ?
                        <span>< SendOutlined/> </span> :
                        <span>< AudioOutlined/></span>
                    }
                </div>
            </div>
        </>
    );
};

export default ChatInput;

type PropsType = {
    isChecked?: boolean
    isMe?: boolean
}
