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

    const [imgName] = useState(props.imgName);
    const [imgIndex, setImgIndex] = useState(0);

     useEffect(() => {
        function findImageIndex() {
            imgs.allImageSharp.edges.map((item, i)=> {
                const imgOriginalName = item.node.fluid.originalName;
                const indexValue = i;
                if (imgOriginalName === imgName){
                    setImgIndex(indexValue);
                }
                return null;
            })
         }
         findImageIndex();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardContainer__card}>
                <Img fluid={imgs.allImageSharp.edges[imgIndex].node.fluid} />
                <div className={styles.projectCardContainer__card__textContainer}>
                    <h3>{props.headline}</h3>
                    <p>{props.subText}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;