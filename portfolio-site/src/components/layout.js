/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";

import TopNav from "./top-nav/top-nav";
import Footer from "./footer/footer";

const Layout = ({ children }) => {

  const [navVisible, setNavVisible] = useState(true);

  return (
    <>
      <TopNav visible={navVisible}/>
        <main onMouseMove={(e) => e.clientY < '50' ? setNavVisible(true) : setNavVisible(false) }>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
