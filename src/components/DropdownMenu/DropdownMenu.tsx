import React, {FC, useEffect} from 'react';
import './DropdownMenu.scss';
import {Dropdown, Menu, Switch} from 'antd';
import {BulbOutlined, ExperimentOutlined, SettingOutlined, TagOutlined, UserOutlined} from '@ant-design/icons';
import {AccentColors, addAccent, toggleAccent, toggleTheme} from '../../utils/helpers/Theme';

const DropdownMenu: FC<PropsType> = ({isVisible}) => {

        // const dropdown = document.querySelector('.menu-accent-colors') as HTMLElement;
        // //
        // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // // @ts-ignore
        // dropdown.onmouseleave(() => {
        //     dropdown.style.display = 'none';
        // });
        //
        // dropdown.addEventListener('mouseleave', e => {
        //     dropdown.style.display = 'none';
        // });

        useEffect(() => addAccent(), []);

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <TagOutlined/><p>Saved Messages</p>
                </Menu.Item>
                <Menu.Item key="1">
                    <UserOutlined/><p>Contacts</p>
                </Menu.Item>
                <Menu.Item key="2">
                    <SettingOutlined/><p>Settings</p>
                </Menu.Item>
                <Menu.Item key="3">
                    <BulbOutlined/><p>Dark Mode</p> <Switch onChange={toggleTheme}/>
                </Menu.Item>
                <Menu.Item key="4">
                    <ExperimentOutlined/><p>Accent Color</p>
                    {AccentColors.map(el => <div className='menu-accent-colors'
                                                 style={{backgroundColor: el}}
                                                 key={el}
                                                 onClick={() => toggleAccent(el)}/>)}
                </Menu.Item>
            </Menu>
        );

        return (
            <>
                <Dropdown overlay={menu} trigger={['click']} visible={isVisible}
                          className='dropdown-menu'
                          placement='bottomLeft'>
                    <a/>
                </Dropdown>
            </>
        );
    }
;

export default DropdownMenu;

type PropsType =
    {
        isVisible: boolean;
    }
