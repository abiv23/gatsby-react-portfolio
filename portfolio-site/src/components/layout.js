/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";

import TopNav from "./top-nav/top-nav";
import Footer from "./footer/footer";

const Layout = ({ children }) => {

  const [navVisible, setNavVisible] = useState(true);
  const [brkpnt, setbrkpnt] = useState('');
  

  useEffect(() => {
    if(typeof window !== 'undefined') {
      let width = window.innerWidth;
      if(width < 320) {
        setbrkpnt('iphone5');
      } else if(width >= 320 && width < 720 ) {
        setbrkpnt('mobile');
      } else if(width >= 720 && width < 1024) {
        setbrkpnt('ipad');
      } else if(width >= 1024) {
        setbrkpnt('desktop');
      }
    }
  }, []);

  return (
    <>
      <TopNav visible={navVisible} brkpnt={brkpnt}/>
        <main onMouseMove={(e) => e.clientY < '50' ? setNavVisible(true) : setNavVisible(false) }>{children}</main>
      <Footer brkpnt={brkpnt}/>
    </>
  )
}

export default Layout
