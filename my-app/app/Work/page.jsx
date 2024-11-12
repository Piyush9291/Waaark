import React from 'react'
import styles from './page.module.css'
// import Image from 'next/image';
// import Artisan from '/public/Artisan.png'; 

const Work = () => {
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>W O R K</p>
                    <h1 className={styles.text}>
                        Website <br />
                        E‑commerce<br />
                        Magazine/Blog </h1>
                    <p className={styles.desc}>& custom solutions</p>
                </div>
            </section>
            <div>
                <div className="feature-section">
                    <div className="left">
                        <video autoplay muted loop >
                       <source src=' https://waaark.com/uploads/2018/01/artisan-talent-ld.mp4'/>
                        </video>
                    </div>
                    <div className="right">
                        <h2>Artisan Talent</h2>
                        <p>/ Website</p>
                        <p>
                            The creative staffing agency Artisan Talent contacted us for a complete redesign of
                            their website. To bring a creative touch and make their offer more readable, we created
                            a minimalist website, strengthened with illustrations and micro-interactions.
                        </p>
                        <button>Visit</button>
                    </div>
                    <div className="menu">
                        <button className="menu-icon">☰</button>
                        <nav>
                            <a href="#works">Works</a>
                            <a href="#featured">Featured</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work



