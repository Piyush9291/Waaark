import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';


const Studio = () => {
   return (

      <div>
         <section className={styles.container}>
            <div className={styles.logo}>
               <a href="/">Wrk..</a>
            </div>
            <Link href="/Navbar">
          <div className={styles.toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
            <div className={styles.content}>
               <p className={styles.title}>S T U D I O</p>
               <h1 className={styles.text}>
                  15 years of industry <br />
                  experience creating <br />
                  together
               </h1>
               <p className={styles.desc}>preferring straightforward relationships with creatives
                  and <br></br> inspired decision‑makers over impersonal organizations</p>
            </div>
         </section>

         <div className={styles.teamcontainer}>
            <div className={styles.team}>
               <p className={styles.title}>T E A M</p>
               <h2>Meet the creative</h2>
               <h2>duo of our studio</h2>
            </div>

            <div className={styles.Team1}>
               <div className={styles.image}>
                  <img src="/Art Director.svg" alt="" />
                  <div className={styles.Teamcontent}>
                     <h1>Jimmy Raheriarisoa</h1>
                     <h3>A R T     D I R E C T O R</h3>
                     <p><span>Awards:</span> 4 FWA • 10 Awwwards • 14 CSS Design Awards</p>
                  </div>
               </div>
            </div>

            <div className={styles.Team2}>
               <div className={styles.image}>
                  <img src="/Studio Developer.svg" alt="" />
                  <div className={styles.Teamcontent}>
                     <h1>Antoine Wodniack</h1>
                     <h3>D E V E L O P E R</h3>
                     <p><span>Awards:</span> 4 FWA • 12 Awwwards • 15 CSS Design Awards</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Studio;