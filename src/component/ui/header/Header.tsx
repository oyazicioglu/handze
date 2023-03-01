import React, { Fragment } from 'react'
import { Anchor } from '../anchor/Anchor';
import styles from "./Header.module.scss";

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
                        <li className={styles.li}>
                            <Anchor href='/contact'>Contact</Anchor>
                        </li>
                        <li className={styles.li}>
                            <Anchor href='/aboutus'>About Us</Anchor>
                        </li>
                        <li className={styles.li}>
                            <Anchor href='/feedback'>Feedback</Anchor>
                        </li>
                    </ul>
                </nav>
                <div className={styles.actions}>
                </div>
            </div>
        </Fragment>
    )
}
