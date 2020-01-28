import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout";
import useBreakpoints from '../components/breakpoint-manager/breakpoints';
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

  const point = useBreakpoints();

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
        <div>
          <p>Bacon ipsum dolor amet meatloaf shankle pork loin ribeye. Pork belly sirloin meatball ground round, pancetta buffalo leberkas tail cow chuck ribeye turkey picanha shank kevin. Flank short ribs corned beef, sausage rump frankfurter t-bone jowl. Rump cow kevin pork loin venison sirloin ground round cupim pastrami ribeye buffalo landjaeger. Cupim short ribs tenderloin pig, beef ribs meatloaf kielbasa ham shoulder.

            Picanha doner landjaeger, pastrami pork belly swine kielbasa brisket shoulder. Bresaola buffalo short loin spare ribs. Pork belly prosciutto capicola flank porchetta. Pig alcatra andouille, tail flank bresaola shank chicken meatball. Shoulder frankfurter beef ribs leberkas shankle, beef bacon kielbasa ball tip hamburger landjaeger.

            Burgdoggen ham tongue, chuck tail pig frankfurter spare ribs beef ribs filet mignon. Pastrami tri-tip pig ribeye salami ball tip hamburger beef ham hock pork chop fatback turkey. Shankle boudin cow beef ribs, pastrami jerky frankfurter pig t-bone. Shoulder ground round tail pork chop. Pork loin beef andouille shoulder bresaola, corned beef sirloin pork jowl pastrami strip steak porchetta meatloaf turkey. Kielbasa pork belly sausage, pancetta pork boudin tenderloin jerky cow pig corned beef drumstick t-bone.

            Capicola brisket sausage alcatra short loin kevin prosciutto meatball biltong. Tail swine pork belly, cupim ribeye short loin short ribs burgdoggen jowl pancetta spare ribs. Kevin leberkas tail pastrami boudin pork buffalo bresaola flank cow shankle pork loin capicola ham hock kielbasa. Andouille swine chicken, strip steak beef ribs pork belly alcatra jerky pork loin drumstick porchetta. Picanha boudin tail, bresaola pork loin short loin short ribs corned beef. Hamburger brisket spare ribs, alcatra leberkas fatback ground round. Ground round shoulder filet mignon meatloaf ball tip.

            Leberkas flank pancetta doner. Leberkas rump pancetta shankle short loin jerky. Tongue burgdoggen sausage, pork loin drumstick salami spare ribs frankfurter brisket ham hock andouille tenderloin fatback. Prosciutto turducken spare ribs corned beef, pork loin tail rump cow pork belly bresaola. Ham buffalo spare ribs, pork loin strip steak chislic jerky ham hock tongue chuck shank drumstick meatloaf short loin. Biltong frankfurter cupim buffalo, prosciutto kielbasa sausage.

            Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
        </div>
        
    </Layout>
  )
}

export default IndexPage
