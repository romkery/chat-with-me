import React, {useEffect} from 'react';
import './Home.scss';
import {EllipsisOutlined} from '@ant-design/icons';
import './../../styles/layouts/_chat.scss';
import Message from '../../components/Message/Message';
import OnlineStatus from '../../components/status/Status';
import ChatInput from '../../components/ChatInput/ChatInput';
import Sidebar from '../../components/Sidebar/Sidebar';

const audio = require('../../assets/fingerlicking-message-tone.mp3');

const Home = () => {

    const date = new Date();

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        addTheme();
    };

    const addTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('body')?.classList.remove('dark');
        } else {
            document.querySelector('body')?.classList.add('dark');
        }
    };

    useEffect(addTheme, []);

    return (
        <>
            <div className='home'>
                <div className="chat">
                    <Sidebar/>
                    <div className="chat__dialog">
                        <div className="chat__dialog-header">
                            <div className="chat__dialog-header-center">
                                <img
                                    src="https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1"
                                    alt="user_avatar"/>
                                <div>
                                    <b className="chat__dialog-header-username">Роман Дмитриев</b>
                                    <OnlineStatus online={true}/>
                                </div>
                            </div>
                            <EllipsisOutlined style={{fontSize: '22px', transform: 'rotate(90deg)'}}
                                              onClick={toggleTheme}/>
                        </div>
                        <div className="chat__dialog-messages-wrap">
                            <div className="chat__dialog-messages">
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    text='Привет, как дела у бродяги-недосимпотяги?'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    isMe={true}
                                    isChecked={true}
                                />
                                <Message
                                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                                    audio={audio}
                                    date={date}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?water'
                                        },
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?success'
                                        }
                                    ]}
                                />
                                <Message
                                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'
                                    text='Друг мой, друг мой,
                            Я очень и очень болен.'
                                    date={date}
                                    user={{fullName: 'Roman Dmitriev'}}
                                    attachments={[
                                        {
                                            filename: 'image.jpg',
                                            url: 'https://source.unsplash.com/random/1000x1000/?city'
                                        },
                                    ]}
                                />
                                <ChatInput/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;