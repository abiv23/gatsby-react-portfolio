import React from "react";

import styles from "./project-card.module.scss";

/* expected props are as follow:
    imgName: string 
    imgFileExt: string 
    headline: string
    subText: string
*/

const ProjectCard = (props) => {

    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardContainer__card}>
                <div className={styles.projectCardContainer__card__imageContainer}>
                    <img src={require(`../../images/home-page/${props.imgName}.${props.imgFileExt}`)} />
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