import React, { useState, useEffect } from "react"

import styles from "./top-nav.module.scss";
import useBreakpoints from '../breakpoint-manager/breakpoints';


/* expected props are as follow:
    visible: boolean */


const TopNav = (props) => {

  const [dropDownVisible, setDropDownVisible] = useState(true);
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
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    )
  }

    return (
        <header>
          {breakpoint !== "desktop" &&
            <nav style={{height: '50px'}} className={styles.mobileNavWrapper}>
                <div className={styles.mobileNavWrapper__logo} >
                  <img style={{height: "50px", width: "60px"}} src={require("../../images/top-nav/white-hp-logo.png")} alt="andrew biviano website logo" />
                </div>
                <div className={styles.mobileNavWrapper__navIconContainer} onClick={() => setDropDownVisible(!dropDownVisible) }>
                  <div style={{opacity: dropDownVisible ? "0" : "1", height: dropDownVisible ? "50" : "0"}} className={styles.navIconContainer__hamburger}>
                      <Hamburger />
                  </div>
                  <div style={{opacity: dropDownVisible ? "1" : "0", height: dropDownVisible ? "0" : "50"}} className={styles.navIconContainer__close}>
                      <Close />
                  </div>
                </div>
                <div className={styles.mobileNavWrapper__dropdown} style={{height: dropDownVisible ? "auto" : "-100vh", opacity: dropDownVisible ? "1" : "0"}}>
                  <ul style={{marginLeft: dropDownVisible ? "0" : "-100vw", opacity: dropDownVisible ? "1" : "0"}}>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                  </ul>
                </div>
            </nav>
          }
          {breakpoint === "desktop" &&
            <nav style={{height: props.visible ? '80px' : '0'}} className={styles.desktopNavWrapper}>
              <div className={styles.desktopNavWrapper__logo}>
                <img style={{height: "60px", width: "70px"}} src={require("../../images/top-nav/white-hp-logo.png")} alt="andrew biviano website logo" />
              </div>
              <div className={styles.desktopNavWrapper__dropDown}>
                  <ul>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                  </ul>
              </div>
            </nav>}
        </header>
  )
}

export default TopNav;
