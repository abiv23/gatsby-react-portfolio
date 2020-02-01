import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql} from "gatsby";
import styles from "./project-card.module.scss";
import Img from "gatsby-image";

/* expected props are as follow:
    imgName: string 
    headline: string
    subText: string
*/

const ProjectCard = (props) => {

    const imgs = useStaticQuery(graphql`
                    query {
                            allImageSharp {
                                edges {
                                    node {
                                        fluid {
                                            base64
                                            tracedSVG
                                            aspectRatio
                                            src
                                            srcSet
                                            srcWebp
                                            srcSetWebp
                                            sizes
                                            originalImg
                                            originalName
                                            presentationWidth
                                            presentationHeight
                                        }
                                    }
                                }
                            }
                        }
                `)


    const [imgName, setImgName] = useState(props.imgName);
    const [imgIndex, setImgIndex] = useState(0);

     function findImageIndex() {
        imgs.allImageSharp.edges.map((item, i)=> {
            const imgOriginalName = item.node.fluid.originalName;
            const indexValue = i;
            if (imgOriginalName === imgName){
                setImgIndex(indexValue);
            }
        })
     }

     useEffect(() => {
         findImageIndex();
      },[]);

    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardContainer__card}>
                <div className={styles.projectCardContainer__card__imageContainer}>
                    <Img fluid={imgs.allImageSharp.edges[imgIndex].node.fluid} />
                </div>
                <div className={styles.projectCardContainer__card__textContainer}>
                    <h3>{props.headline}</h3>
                    <p>{props.subText}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;