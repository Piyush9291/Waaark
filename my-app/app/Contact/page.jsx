import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.container}>

    <header className={styles.right}>
          <h1>Vision</h1>
    </header>


     <main className={styles.main}>
      <div className={styles.contactUs}>C O N T A C T U S</div>
      <div className={styles.email}>hello@waaark.com</div>
      <div className={styles.socialLinks}>
        Facebook • Twitter • LinkedIn
      </div>
      <div className={styles.menu}>
          <h1>Works</h1>
        </div>
    </main>
    
    <div className={styles.left}>
         <div className={styles.link}>
           <a href="/Vision"><h3>V I S I O N</h3></a>
            <h3>P R O C E S S</h3>
            <h3 className={styles.contact}>C O N T A C T</h3>
         </div>
         <div className={styles.studio}>
           <h1>Studio</h1>
        </div>
    </div>

    </div>
  )
}

export default page