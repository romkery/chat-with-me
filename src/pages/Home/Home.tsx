import React from "react";
import "./Home.scss"
import Dialogs from "../../components/Dialogs/Dialogs";
import Message from "../../components/Message/Message";

const audio = require('./../../assets/fingerlicking-message-tone.mp3')

const Home = () => {

    const date = new Date()

    return (
        <>
            <div className='home'>
                <div className="dialogs">
                    <Dialogs items={[
                        {
                            _id: Math.random(),
                            user: {
                                _id: 1,
                                fullName: 'Classic RD',
                                avatar: 'https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1',
                                isOnline: true
                            },
                            message: {
                                userId: 1,
                                text: 'И потеряется этот мир в ядерном грибе...',
                                isRead: false,
                                created_at: new Date(2022, 1, 8)
                            },
                            isMe: true,
                            isChecked: false,
                        },
                        {
                            _id: Math.random(),
                            user: {
                                _id: 2,
                                fullName: 'WEB DESIGNER',
                                avatar: 'https://sun9-66.userapi.com/impg/sqHlpqAaiaY6QVdq4wbWB7mUsqYZ5FBe67RU5Q/vwIEddRFhP4.jpg?size=719x1280&quality=95&sign=12f558f991f3997d141f9e72cd0f0cc8&type=album',
                                isOnline: false
                            },
                            message: {
                                userId: 2,
                                text: 'будет тебе все переводить',
                                isRead: true,
                                created_at: new Date(2022, 1, 7)
                            },
                            isMe: true,
                            isChecked: true,
                        },
                        {
                            _id: Math.random(),
                            user: {
                                _id: 2,
                                fullName: 'PURPLE BRO',
                                // avatar: 'https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1',
                                isOnline: true
                            },
                            message: {
                                userId: 3,
                                text: 'прикинь новый 54 на пневмеприкинь новый 54 на пневме',
                                isRead: false,
                                count: 1,
                                created_at: new Date()
                            },
                        }]}/>
                </div>
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
                {/*                <Message*/}
                {/*                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'*/}
                {/*                    text='Друг мой, друг мой,*/}
                {/*Я очень и очень болен.'*/}
                {/*                    date={date}*/}
                {/*                    user={{fullName: 'Roman Dmitriev'}}*/}
                {/*                    attachments={[*/}
                {/*                        {*/}
                {/*                            filename: 'image.jpg',*/}
                {/*                            url: 'https://source.unsplash.com/random/1000x1000/?minimal'*/}
                {/*                        },*/}
                {/*                        {*/}
                {/*                            filename: 'image.jpg',*/}
                {/*                            url: 'https://source.unsplash.com/random/1000x1000/?water'*/}
                {/*                        },*/}
                {/*                        {*/}
                {/*                            filename: 'image.jpg',*/}
                {/*                            url: 'https://source.unsplash.com/random/1000x1000/?success'*/}
                {/*                        }*/}
                {/*                    ]}*/}
                {/*                />*/}
                {/*                <Message*/}
                {/*                    avatar='https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1'*/}
                {/*                    text='Друг мой, друг мой,*/}
                {/*Я очень и очень болен.'*/}
                {/*                    date={date}*/}
                {/*                    user={{fullName: 'Roman Dmitriev'}}*/}
                {/*                    attachments={[*/}
                {/*                        {*/}
                {/*                            filename: 'image.jpg',*/}
                {/*                            url: 'https://source.unsplash.com/random/1000x1000/?city'*/}
                {/*                        },*/}
                {/*                    ]}*/}
                {/*                />*/}
            </div>
        </>
    )
}

export default Home