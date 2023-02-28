import Link from 'next/link';
import React, { Fragment } from 'react'
import { Anchor } from '../anchor/Anchor';
import styles from "./Header.module.css";


export const Header = () => {
    return (
        <Fragment>
            <div className={styles.navContainer}>
                <div className="logo">Logo</div>
                <nav className="nav">
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Anchor href='/'>Home</Anchor>
                        </li>
                        <li className={styles.li}>
                            <Anchor href='/shop'>Shop</Anchor>
                        </li>
                    </ul>
                </nav>
                <div className="actions">Actions</div>
            </div>
        </Fragment>
    )
}
