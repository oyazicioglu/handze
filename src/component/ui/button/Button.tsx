import { PropsBase } from '@/lib/PropsBase'
import React from 'react'
import classes from "./Button.module.scss";

interface Props extends PropsBase {
    color?: 'primary' | 'secondary';
    size?: 'small' | 'normal' | 'large';
}

export const Button = (props: Props) => {
    return (
        <button className={`${classes.button} ${props.color ? props.color : ''} ${props.size ? props.size : ''} `}>
            {props.children}
            <div className="shutter"></div>
        </button>
    )
}
