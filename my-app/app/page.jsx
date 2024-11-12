import React from 'react'
import styles from './page.module.css'
import vision from '../public/Vision.svg'
import studio from '../public/Studio.svg'
import Image from 'next/image';
import Link from 'next/link';



const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.logo}><a href="/">Wrk..</a></div>
        <div className={styles.mainImage}>
          <img src="/Work.svg" alt="" />
        </div>

        <div className={styles.textContent}>
          <a href='/Work'>W O R K S</a>
          <h1>We create elegant and functional <br></br>custom-designed websites</h1>
        </div>

        {/* leftcontainer close */}
      </div>

      <section className={`${styles.rightContent} ${styles.border}`}>
        <div className={`${styles.section} ${styles.vision}`}>
          <Link href="/Navbar">
          <div className={styles.toggle} >
            <span></span>
            <span></span>
            <span></span>
          </div>
          </Link>
          <Image src={vision} alt="" className={styles.sectionImage} />
          <div className={styles.textContainer}>
            <a href='/Vision'>V I S I O N</a>
            <h2 className={styles.desc}>We approach projects with one clear vision</h2>
          </div>
        </div>
        <div className={`${styles.section} ${styles.studio}`}>
          <Image src={studio} alt="" className={styles.sectionImage} />
          <div className={styles.textContainer}>
            <a href='/Studio'>S T U D I O</a>
            <h2 className={styles.desc}>Our fine studio of two knows the value of hard work</h2>
          </div>
        </div>
      </section>
    </div>

  )
}

export default page
