import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"


const IndexPage = (props) => {

  let [topNavVisible, setTopNavVisible] = useState(true);
  let [heroImgSize, setHeroImgSize] = useState('');

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "top-nav/continental-divide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function handleSizeChange() {
    console.log(document.getElementsByTagName("img")[0].height);
    return setHeroImgSize(document.getElementsByTagName("img")[0].height)
  }

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange())
    
    return () => {
      window.removeEventListener("resize", handleSizeChange())
    }
  },[]);


  return (
    <Layout >
      <SEO title="Andrew Biviano - Front End Developer &amp; Digital Marketing - Denver, CO" description="Web professional with strong background in customer acquisition and optimization. 14+ years of working with developers and developing solutions to the ecommerce conversion funnel."/>
      <div className={styles.heroImageContainer} onMouseMove={(e) => e.clientY < '50' ? setTopNavVisible(true) : setTopNavVisible(false)}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className={styles.heroGradientContainer} style={{top: topNavVisible ? '50px' : '0', height: heroImgSize}}>
            <h1>Frontend Developer</h1>
            <p>working hard to make websites awesome.</p>
        </div>
      </div>
      
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
