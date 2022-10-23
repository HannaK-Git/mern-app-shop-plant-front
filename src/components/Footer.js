import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterComp = () => {
  const [d, setD] = useState();

  useEffect(() => {
    let date = new Date().getFullYear();
    setD(date);
  }, []);
  return (
    <div className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.middleBox}>
            <h6>Contact us</h6>
            <p>
              4 Private Drive, Surrey <br />
              Little Whinging,
              <br />
              Surrey
              <br />
            </p>
          </div>
          <div className={styles.thirdBox}>
            <h6>A little bit more about us</h6>
            <p>
              If you would like to know some information about a wizarding world
              of magic you are welcomed to visit our website and to open for
              yoursef some magic
            </p>
          </div>
          <div className={styles.icons}>
            <a href="https://github.com/HannaK-Git">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/hannakoval/">
              <FaLinkedin className={styles.icon} />
            </a>

            <FaWhatsapp className={styles.icon} />
          </div>
        </div>
        <p style={{ paddingLeft: "2rem" }}>
          Copyright &copy; {d} All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default FooterComp