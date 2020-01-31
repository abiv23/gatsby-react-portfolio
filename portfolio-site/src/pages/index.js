import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout";
import useBreakpoints from '../components/breakpoint-manager/breakpoints';
import ProjectCard from "../components/project-card/project-card";
import SEO from "../components/seo";
import styles from "../styles/index.module.scss";


const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-page/continental-divide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const breakpoint = useBreakpoints();

  // function handleSizeChange() {
  //   console.log(document.getElementsByTagName("img")[0].height);
  //   return setHeroImgSize(document.getElementsByTagName("img")[0].height)
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleSizeChange())
    
  //   return () => {
  //     window.removeEventListener("resize", handleSizeChange())
  //   }
  // },[]);

  return (
    <Layout >
      <SEO title="Andrew Biviano - Front End Developer &amp; Digital Marketing - Denver, CO" description="Web professional with strong background in customer acquisition and optimization. 14+ years of working with developers and developing solutions to the ecommerce conversion funnel."/>
        <BackgroundImage
          Tag="section"
          className={styles.heroImageContainer}
          fluid={data.file.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <div className={styles.heroGradientContainer}>
            <h1>Front end developer.</h1>
            <p>working hard to make websites awesome</p>
          </div>        
        </BackgroundImage>
        <div className={styles.homeBody}>
          <h2 className={styles.homeBody__Header}>Projects</h2>
        </div>
        {breakpoint !=="desktop" &&
          <>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            <ProjectCard 
                imgName="plg-homepage" 
                imgFileExt="png"
                headline="PorchLight Real Estate Group"
                subText="Example of front-end development work at PLG."/>
            </>
          }
    </Layout>
  )
}

export default IndexPage
