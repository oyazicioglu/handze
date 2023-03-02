import { PropsBase } from '@/lib/PropsBase'
import React from 'react'

interface Props extends PropsBase {

}

export const Bedge = (props: Props) => {
    return (
        <div className="bedge">
            {props.children}
        </div>
    )
}
