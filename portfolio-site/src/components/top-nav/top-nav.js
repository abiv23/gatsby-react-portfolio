import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styles from "./top-nav.module.scss"

/* expected props are as follow:
    visible: boolean */


const TopNav = (props) => {

    return (
        <header>
            <nav style={{height: props.visible ? '50px' : '0'}} className={styles.navWrapper}>
            
            </nav>
        </header>
  )
}

export default TopNav;
