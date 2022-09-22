import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        console.log('ya zapustilas');
    }, []);

    return (<>
            <div className="chat__sidebar">
                <div className="chat__sidebar-search">
                    <MenuOutlined style={{fontSize: 20, cursor: 'pointer'}}
                                  className='chat__sidebar-search-img'
                                  onClick={toggleMenu}/>
                    <DropdownMenu isVisible={isShowMenu}/>
                    <Search placeholder="Search" allowClear enterButton
                            size='large' style={{borderRadius: 40}}/>
                </div>
                <div className="chat__sidebar-groups">
                    <div className="chat__sidebar-groups-wrap">
                        {groupNames.map((el, index) =>
                            <div className="group-item" key={index}>
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
                                avatar: 'https://sun9-west.userapi.com/sun9-37/s/v1/ig2/Ye99m5cau03zHl0ML3CPbwascm0oYTpRjwC2On35Mm_seuERWwpvyvii_T4s1SB5BizjpZIDoh8C9AiF2DNjdbMc.jpg?size=960x1280&quality=95&type=album',
                                isOnline: true
                            },
                            message: {
                                userId: 1,
                                text: 'Работаем...',
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
                                fullName: 'Elon Musk',
                                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dZXnvL-ywl_d4pYV5OWyWI3cxMb3j_Wnjg&usqp=CAU/impg/sqHlpqAaiaY6QVdq4wbWB7mUsqYZ5FBe67RU5Q/vwIEddRFhP4.jpg?size=719x1280&quality=95&sign=12f558f991f3997d141f9e72cd0f0cc8&type=album',
                                isOnline: false
                            },
                            message: {
                                userId: 2,
                                text: 'tweet me',
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
                                fullName: 'Steve Jobs',
                                avatar: 'data:image/jpeg;base64,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',
                                isOnline: true
                            },
                            message: {
                                userId: 3,
                                text: 'strength in simplicity',
                                isRead: false,
                                count: 1,
                                created_at: new Date()
                            },
                        },
                        {
                            _id: Math.random(),
                            user: {
                                _id: 1,
                                fullName: 'Anita Heath',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 11,
                                fullName: 'Mayra Dalton',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 21,
                                fullName: 'Carter Ferrell',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 31,
                                fullName: 'Horton Rich',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 41,
                                fullName: 'Edith Mejia',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 51,
                                fullName: 'Mcknight Mcfadden',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 61,
                                fullName: 'Allie Petersen',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 71,
                                fullName: 'Parks Ward',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 81,
                                fullName: 'Juana Keller',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 91,
                                fullName: 'Fran Kerr',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 101,
                                fullName: 'Weber Hensley',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 111,
                                fullName: 'Houston Huff',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 121,
                                fullName: 'Roth Parsons',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 131,
                                fullName: 'Austin Reese',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 141,
                                fullName: 'Parker Savage',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 151,
                                fullName: 'Jeannette Dunn',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 161,
                                fullName: 'Dorothea Kramer',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 171,
                                fullName: 'Imelda Frederick',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 181,
                                fullName: 'Jolene Maddox',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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
                            _id: Math.random(),
                            user: {
                                _id: 191,
                                fullName: 'Holmes Eaton',
                                avatar: `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
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


