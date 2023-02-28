import styles from "./Anchor.module.css";

import React, { Fragment } from 'react'
import Link from "next/link";

interface Props {
    href: string;
    children: React.ReactNode
}

export const Anchor = (props: Props) => {
    return (
        <Fragment>
            <div className={styles.anchor}>
                <Link href={props.href}>
                    {props.children}
                    <div className={styles.underline}></div>
                </Link>
            </div>

        </Fragment>
    )
}
