
import React  from 'react'
import styles from './page.module.css'

const Navbar = () => {

    return (
        <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}><a href="/">Wrk..</a></div>
          <div className={styles.contact}>
            <p className={styles.title}>C O N T A C T</p>
            <h1 className={styles.email}>hello@waaark.com</h1>
            <p className={styles.social}>Facebook • Twitter • LinkedIn</p>
          </div>
        </div>
  
        <div className={styles.rightSection}>
          <div className={styles.navigation}>
          <div className={styles.toggle}><a href="/">☰</a></div>
            <p className={styles.title}>N A V I G A T I O N</p>
            <ul className={styles.navlinks}>
             <a href="/Vision"> <li>Vision</li></a>
             <a href="/Work"> <li className={styles.work}>Works</li></a>
             <a href="/Studio"> <li>Studio</li></a>
            </ul>
          </div>
        </div>
      </div>
    )
}



export default Navbar