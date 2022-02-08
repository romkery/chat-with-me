import React, {useEffect} from "react";
import "./Home.scss"
import Message from "../../components/Message/Message";
import DialogItem from "../../components/DialogItem/DialogItem";

const Home = () => {

    const date = new Date()

    return (
        <>
            <div className='home'>
                <div className="dialogs">
                    <DialogItem
                        user={{
                            fullName: 'Classic RD',
                            avatar: 'https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1',
                            isOnline: true
                        }}
                        message={{
                            text: 'И потеряется этот мир в ядерном грибе...',
                            isRead: false,
                        }}
                        isMe={true}
                        isChecked={false}/>
                    <DialogItem
                        user={{
                            fullName: 'WEB DESIGNER',
                            avatar: 'https://sun9-66.userapi.com/impg/sqHlpqAaiaY6QVdq4wbWB7mUsqYZ5FBe67RU5Q/vwIEddRFhP4.jpg?size=719x1280&quality=95&sign=12f558f991f3997d141f9e72cd0f0cc8&type=album',
                            isOnline: false
                        }}
                        message={{
                            text: 'будет тебе все переводить',
                            isRead: true,
                        }}
                        isMe={true}
                        isChecked={true}/>
                    <DialogItem
                        user={{
                            fullName: '💜💜PURPLE BRO💜💜',
                            avatar: 'https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1',
                            isOnline: true
                        }}
                        message={{
                            text: 'прикинь новый 54 на пневме',
                            isRead: false,
                            count: 10
                        }}/>
                </div>
                {/*                <Message*/}
                {/*                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'*/}
                {/*                    text='Привет, как дела у бродяги-недосимпотяги?'*/}
                {/*                    date={date}*/}
                {/*                    user={{fullName: 'Roman Dmitriev'}}*/}
                {/*                    isMe={true}*/}
                {/*                    isChecked={true}*/}
                {/*                />*/}
                {/*                <Message*/}
                {/*                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'*/}
                {/*                    isTyping*/}
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