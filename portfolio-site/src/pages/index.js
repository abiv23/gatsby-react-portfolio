import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql} from "gatsby"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout";
import useBreakpoints from '../components/breakpoint-manager/breakpoints';
import ProjectCard from "../components/project-card/project-card";
import SEO from "../components/seo";
import styles from "../styles/index.module.scss";


const IndexPage = (props) => {

  const heroImage = useStaticQuery(graphql`
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

  const [brkpnt, setbrkpnt] = useState('');
  const breakpoint = brkpnt;
  

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

  console.log(brkpnt);

  return (
    <Layout >
      <SEO title="Andrew Biviano - Front End Developer &amp; Digital Marketing - Denver, CO" description="Web professional with strong background in customer acquisition and optimization. 14+ years of working with developers and developing solutions to the ecommerce conversion funnel."/>
        <BackgroundImage
          Tag="section"
          className={styles.heroImageContainer}
          fluid={heroImage.file.childImageSharp.fluid}
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
            <div className={styles.cardContainer}>
              <ProjectCard 
                  imgName="plg-homepage.png" 
                  headline="PorchLight Real Estate Group"
                  subText="Example of front-end development work at PLG."/>
              <ProjectCard 
                  imgName="scoreboard.jpg" 
                  headline="The Moral Scoreboard"
                  subText="NFL team arrest comparison."/>
              <ProjectCard 
                  imgName="keycode.png" 
                  headline="KeyCode Translator"
                  subText="Converts a keyboard button to it's key code."/>
              <ProjectCard 
                  imgName="seo.png" 
                  headline="14+ years of consistent SEO traffic growth"
                  subText="PageSpeed, UI/UX, RankBrain and modern SEO."/>
              <ProjectCard 
                  imgName="retro-pie.png" 
                  headline="A comprehensive blast of nostalgia."
                  subText="A multi-platform videogame emulator."/>
              <ProjectCard 
                  imgName="super-mario.jpg" 
                  headline="Super Mario Super Soundboard"
                  subText="Soundboard for everyone's favorite Italian plumber Mario."/>
            </div>
            </>
          }
          {breakpoint ==="desktop" &&
          <>
            <div className={styles.cardContainer}>
              <ProjectCard 
                  imgName="plg-homepage.png" 
                  headline="PorchLight Real Estate Group"
                  subText="Example of front-end development work at PLG."/>
              <ProjectCard 
                  imgName="scoreboard.jpg" 
                  headline="The Moral Scoreboard"
                  subText="NFL team arrest comparison."/>
            </div>
            <div className={styles.cardContainer}>
              <ProjectCard 
                  imgName="keycode.png" 
                  headline="KeyCode Translator"
                  subText="Converts a keyboard button to it's key code."/>
              <ProjectCard 
                  imgName="seo.png" 
                  headline="14+ years of consistent SEO traffic growth"
                  subText="PageSpeed, UI/UX, RankBrain and modern SEO."/>
            </div> 
            <div className={styles.cardContainer}>
              <ProjectCard 
                  imgName="retro-pie.png" 
                  headline="A comprehensive blast of nostalgia."
                  subText="A multi-platform videogame emulator."/>
              <ProjectCard 
                  imgName="super-mario.jpg" 
                  headline="Super Mario Super Soundboard"
                  subText="Soundboard for everyone's favorite Italian plumber Mario."/>
            </div>
          </>
          }
    </Layout>
  )
}

export default IndexPage
