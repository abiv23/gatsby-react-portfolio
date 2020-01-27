import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql} from "gatsby"
import styles from "./top-nav.module.scss"
import Img from "gatsby-image"
import useBreakpoints from '../breakpoint-manager/breakpoints';

/* expected props are as follow:
    visible: boolean */


const TopNav = (props) => {

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "top-nav/white-hp-logo.png" }) {
        childImageSharp {
          fixed(height: 45, width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const point = useBreakpoints();

  console.log(point)

    return (
        <header>
          {point === "iphone5" || point === "mobile" &&
            <nav className={styles.navWrapper}>
                <div className={styles.mobileNav}>
                    <Img fixed={data.file.childImageSharp.fixed} alt="andrew biviano website logo" />
                </div>
            </nav>
          }
          {point === "tablet" || point === "desktop" &&
            <nav style={{height: props.visible ? '50px' : '0'}} className={styles.navWrapper}>
              <div className={styles.mobileNav}>
                  <Img fixed={data.file.childImageSharp.fixed} alt="andrew biviano website logo" />
              </div>
            </nav>}
        </header>
  )
}

export default TopNav;
