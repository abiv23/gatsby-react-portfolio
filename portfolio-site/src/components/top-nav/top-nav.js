// import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
// import { useStaticQuery, graphql} from "gatsby"

import styles from "./top-nav.module.scss"
// import Img from "gatsby-image"
import useBreakpoints from '../breakpoint-manager/breakpoints';


/* expected props are as follow:
    visible: boolean */


const TopNav = (props) => {

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const breakpoint = useBreakpoints();
  const Close = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>)
  };
  const Hamburger = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    )
  }

    return (
        <header>
          {breakpoint !== "desktop" &&
            <nav style={{height: props.visible ? '50px' : '0'}} className={styles.navWrapper}>
                <div className={styles.logo} onClick={(e) => setDropDownVisible() }>
                  <img src={require("../../images/top-nav/white-hp-logo.png")} alt="andrew biviano website logo" />
                </div>
                <div style={{opacity: dropDownVisible ? "0" : "1"}} className={styles.hamburger}>
                    <Hamburger />
                </div>
                <div className={styles.close}>
                    <Close />
                </div>
            </nav>
          }
          {breakpoint === "desktop" &&
            <nav style={{height: '50px'}} className={styles.navWrapper}>
              <div className={styles.logo}>
                <img src={require("../../images/top-nav/white-hp-logo.png")} alt="andrew biviano website logo" />
              </div>
            </nav>}
        </header>
  )
}

export default TopNav;
