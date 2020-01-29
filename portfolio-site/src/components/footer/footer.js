import React from "react";

import styles from "./footer.module.scss";

const Footer = () => {


    return (
        <footer>
            <div className={styles.letsTalk}>
                <h5>Let's Talk!</h5>
                <p>Got a project you would like me to work on? Or how about a beer and a conversation? <a href="/contact.html">Contact me</a> and i'll get back to you quickly.</p>
            </div>
            <div className={styles.copyright}>
                ©{new Date().getFullYear()} AtB Denver, Colorado
            </div>
        </footer>
    )
}

export default Footer;