import React, {FC} from 'react';
import {Button as BaseButton} from 'antd';
import './Button.scss';
import classNames from 'classnames';
import {SizeType} from 'antd/es/config-provider/SizeContext';
import {ButtonType} from 'antd/es/button';
import {ButtonHTMLType} from 'antd/es/button/button';

const Button: FC<PropsType> = props => {
    return (<>
        <BaseButton {...props} className={classNames('button', props.className, {
            'button--large': props.size === 'large'
        })}/>
    </>);
};

type PropsType = {
    className?: string
    size?: SizeType,
    type?: ButtonType,
    htmlType?: ButtonHTMLType
}

export default Button;