import React, {useEffect} from "react";
import "./Home.scss"
import Message from "../../components/Message/Message";

const Home = () => {

    const date = new Date()

    return (
        <>
            <div className='home'>
                <Message
                    avatar='https://sun4-10.userapi.com/s/v1/ig2/WnnXZ8qMFGXG57edF-YcbysK_efKcuBJkMgytSu6E2Z9W9pmvnDL9P-5w7YvL3s9jJ7O8H6jeNkOaseTrCrPCWud.jpg?size=400x400&quality=96&crop=0,0,599,599&ava=1'
                    text='Привет, как дела у бродяги-недосимпотяги?'
                    date={date}
                    user={{fullName: 'Roman Dmitriev'}}
                    isMe={true}
                    isChecked={true}
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
            </div>
        </>
    )
}

export default Home