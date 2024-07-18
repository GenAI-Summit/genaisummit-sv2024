"use client";

import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.title}>Summit Information</div>
          <div className={styles.content}>Oct 30 - Nov 3, 2024</div>
          <div className={styles.content}>Santa Clara, CA</div>
          <div className={styles.content}>genaix@gptdao.ai</div>
          <div className={`${styles.content} hover:text-sky-500`}>
            <Link href="https://linktr.ee/gptdao" target="_blank">
              Contact us
            </Link>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>Contact Us</div>
          <div className={styles.content}>
            We sincerely invite you to join us, bring your creativity and ideas,
            and explore the future of generative AI together. Please contact us
            for more information.
          </div>
          <div className={`${styles.content} ${styles.icons}`}>
            <Link href="https://x.com/genaisummitsf" target="_blank">
              <Icon className="icon" src="/images/icons/x.png" alt="x" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/gptdao/"
              target="_blank"
            >
              <Icon
                className="icon"
                src="/images/icons/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link href="https://www.facebook.com/gptdaoai/" target="_blank">
              <Icon
                className="icon"
                src="/images/icons/facebook.png"
                alt="facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/genaisummit.xyz"
              target="_blank"
            >
              <Icon
                className="icon"
                src="/images/icons/instagram.png"
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        Copyright 2024 GPTDAO. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
