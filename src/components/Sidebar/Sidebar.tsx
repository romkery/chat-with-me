import React, {useState} from 'react';
import './Sidebar.scss';
import {MenuOutlined} from '@ant-design/icons';
import Dialogs from '../Dialogs/Dialogs';
import Search from 'antd/es/input/Search';
import {Input} from 'antd';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Sidebar = () => {

    const onSearch = ({value}: any) => console.log(value);
    const {Search} = Input;
    const groupNames = ['All', 'Друзья', 'Семья', 'Учеба', 'Работа', 'Незнакомцы', 'Стартап', 'дела'];
    const [isShowMenu, setIsShowMenu] = useState(false);
    const toggleMenu = () => setIsShowMenu(!isShowMenu);

    return (<>
            <div className="chat__sidebar">
                <div className="chat__sidebar-search">
                    <MenuOutlined style={{fontSize: 20, cursor: 'pointer'}}
                                  className='chat__sidebar-search-img'
                                  onClick={toggleMenu}/>
                    <DropdownMenu isVisible={isShowMenu}/>
                    <Search placeholder="Search" allowClear onPressEnter={onSearch} enterButton
                            size='large' style={{borderRadius: 40}}/>
                </div>
                <div className="chat__sidebar-groups">
                    <div className="chat__sidebar-groups-wrap">
                        {groupNames.map(el =>
                            <div className="group-item" key={el}>
                                <span>{el}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="chat__sidebar-dialogs">
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
                                avatar: 'https://sun4-12.userapi.com/s/v1/ig2/lq01CX3y3ZS5coZ3Zk0j6oC3oI9URHS3ONs7PKUV8yynvJLVuNCXH0mzWCVxj4hS3NRIKmCGSkHciJXQJk_liuQZ.jpg?size=400x400&quality=96&crop=0,306,983,983&ava=1',
                                isOnline: true
                            },
                            message: {
                                userId: 3,
                                text: 'прикинь новый 54 на пневмеприкинь новый 54 на пневме',
                                isRead: false,
                                count: 1,
                                created_at: new Date()
                            },
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 1,
                                fullName: 'Anita Heath',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 1,
                                text: 'Nulla mollit nisi eu fugiat. Minim commodo pariatur deserunt est sint consectetur. Qui quis enim elit laboris quis sunt magna non nostrud officia dolor ex ullamco quis.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 11,
                                fullName: 'Mayra Dalton',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 11,
                                text: 'Excepteur id qui ullamco dolor eu fugiat qui cupidatat. Ullamco adipisicing qui id elit aliqua sint irure esse magna cillum veniam. Voluptate commodo ad deserunt voluptate fugiat enim sunt qui occaecat in nostrud.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 21,
                                fullName: 'Carter Ferrell',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 21,
                                text: 'Nostrud ipsum reprehenderit sit eiusmod adipisicing Lorem ipsum non irure. Sunt sunt qui cupidatat voluptate elit est. Veniam nulla anim enim consectetur eiusmod.',
                                isRead: true,
                                created_at: new Date(),
                                count: 8,
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 31,
                                fullName: 'Horton Rich',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 31,
                                text: 'Mollit deserunt Lorem aute nulla labore quis. Ut Lorem est quis exercitation amet. Ipsum tempor velit ad ut sint eiusmod dolore deserunt duis aliqua.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 41,
                                fullName: 'Edith Mejia',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 41,
                                text: 'Veniam elit dolore fugiat aliqua mollit ipsum quis. Fugiat velit proident excepteur proident ad tempor duis. Cupidatat dolor officia ut excepteur non non ut eu tempor.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 51,
                                fullName: 'Mcknight Mcfadden',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 51,
                                text: 'Dolore esse nisi nulla sunt culpa enim ad occaecat ea exercitation minim exercitation. Proident ex enim eu irure proident et laborum sit. Officia nulla eiusmod id consectetur laborum et proident eiusmod aliqua minim exercitation proident commodo.',
                                isRead: true,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 61,
                                fullName: 'Allie Petersen',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 61,
                                text: 'Nisi Lorem nisi voluptate nisi commodo voluptate. Nulla ex occaecat anim in ex nisi qui aliquip reprehenderit pariatur ipsum adipisicing. Reprehenderit Lorem fugiat culpa consequat eu minim culpa anim fugiat eiusmod cillum.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 71,
                                fullName: 'Parks Ward',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 71,
                                text: 'Nulla esse cillum id magna excepteur amet consectetur laboris labore. Nisi dolor officia deserunt et. Minim laborum dolor irure enim esse velit magna dolore.',
                                isRead: true,
                                created_at: new Date(),
                                count: 1,
                            },
                            isMe: false,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 81,
                                fullName: 'Juana Keller',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 81,
                                text: 'Commodo pariatur duis est minim elit occaecat laboris. Labore exercitation consequat do occaecat aliqua commodo sunt sunt magna et non Lorem sint. Id id in et quis id ullamco Lorem irure magna eiusmod esse exercitation tempor.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 91,
                                fullName: 'Fran Kerr',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 91,
                                text: 'Esse proident amet irure consectetur ut nostrud anim ipsum ipsum in nisi voluptate. Enim voluptate dolor anim ex laborum qui dolore sunt. Ea eu magna nostrud qui laborum in excepteur nulla est commodo nisi.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 101,
                                fullName: 'Weber Hensley',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 101,
                                text: 'Quis sit duis aute in esse velit dolore consequat minim proident nostrud amet. Ad sit qui nisi sunt ex magna sunt Lorem nulla ex. Sit duis esse labore in minim nulla labore ad laborum anim ut aliqua.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: false,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 111,
                                fullName: 'Houston Huff',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 111,
                                text: 'Consequat duis quis ipsum excepteur anim et eiusmod est sunt esse commodo. Laboris aute incididunt aliquip qui Lorem et ullamco amet. Ex duis quis elit velit ea ut et voluptate aute consectetur sit.',
                                isRead: true,
                                created_at: new Date(),
                                count: 2,
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 121,
                                fullName: 'Roth Parsons',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 121,
                                text: 'Ut aliquip irure incididunt dolore nisi elit culpa aliqua tempor dolor quis eiusmod. Quis magna ut commodo fugiat velit ut id reprehenderit mollit. Sunt velit voluptate proident anim aliquip nisi veniam adipisicing officia incididunt.',
                                isRead: true,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 131,
                                fullName: 'Austin Reese',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 131,
                                text: 'Esse dolor sunt reprehenderit eu ex in ad reprehenderit non laborum sint dolore. Cupidatat culpa ipsum quis irure voluptate. Esse reprehenderit proident culpa cupidatat consectetur sit consectetur.',
                                isRead: true,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 141,
                                fullName: 'Parker Savage',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 141,
                                text: 'Pariatur ea adipisicing tempor ullamco cillum non ex minim reprehenderit. Irure nisi consectetur tempor elit adipisicing laborum fugiat ut eu sint consequat non aliquip et. Aliqua anim occaecat enim mollit do do duis.',
                                isRead: true,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 151,
                                fullName: 'Jeannette Dunn',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 151,
                                text: 'Sit laborum irure ut enim voluptate ipsum esse excepteur. Sit fugiat consequat officia sit minim est irure. Consequat pariatur excepteur nisi dolor enim duis do culpa aute velit et mollit et.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 161,
                                fullName: 'Dorothea Kramer',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: false
                            },
                            message: {
                                userId: 161,
                                text: 'Commodo fugiat ex mollit aute velit officia id reprehenderit. Duis incididunt veniam nostrud id non consectetur nostrud laboris elit labore. Nisi sint ipsum duis do officia.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 171,
                                fullName: 'Imelda Frederick',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 171,
                                text: 'Aliquip irure velit nostrud incididunt labore eu proident minim tempor sunt excepteur minim. Reprehenderit amet labore eiusmod consectetur veniam sit ullamco deserunt est eiusmod pariatur ullamco amet. Aliqua nisi ut aute quis cupidatat laboris eiusmod sint.',
                                isRead: true,
                                created_at: new Date(),
                                count: 4,
                            },
                            isMe: false,
                            isChecked: true
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 181,
                                fullName: 'Jolene Maddox',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 181,
                                text: 'Qui anim labore eu incididunt nostrud nostrud. Dolor duis velit consequat nostrud commodo laboris cillum laborum ad laboris aliqua. Lorem adipisicing eu quis tempor enim voluptate et velit.',
                                isRead: true,
                                created_at: new Date(),
                                count: 10,
                            },
                            isMe: false,
                            isChecked: false
                        },
                        {
                            _id: 0.8220885281458068,
                            user: {
                                _id: 191,
                                fullName: 'Holmes Eaton',
                                avatar: 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000) + Math.trunc(Math.random()) * 1000,
                                isOnline: true
                            },
                            message: {
                                userId: 191,
                                text: 'Sit laboris cupidatat in occaecat irure duis amet ex non ullamco ipsum est eiusmod laborum. In sint ipsum quis eu tempor. Occaecat ad anim labore non minim proident qui eu qui reprehenderit id Lorem minim.',
                                isRead: false,
                                created_at: new Date()
                            },
                            isMe: true,
                            isChecked: true
                        }
                    ]}/>
                </div>
            </div>
        </>
    );
};

export default Sidebar;


