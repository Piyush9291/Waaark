import React from 'react'
import styles from './page.module.css'
const Vision = () => {
  return (
    <div>
    <section className={styles.container}>
    <div className={styles.logo}>
      <a href="/">Wrk..</a>
    </div>
    <div className={styles.toggle}>
      <a href="/Navbar">☰</a>
    </div>
      <div className={styles.content}>
        <p className={styles.title}>V I S I O N</p>
        <h1 className={styles.text}>
          Creative <br />
          Straightforward <br />
          and personal
        </h1>
        <p className={styles.desc}>Our defining principles</p>
      </div>
    </section>

    <div className={styles.Analysis}>
      <div className={styles.process}>
        <div className={styles.list}>
          <h1>Analysis</h1>
          <h3>Process -- 1</h3>
        </div>
        <div className={styles.image}>
          <img src="/Analysis.svg" alt="" />
        </div>
        <div className={styles.about}><p>We begin with determination to
          <br></br> understand your brand and the intricate
          <br></br> details of each unique project
        </p>
        </div>
      </div>
    </div>

    <div className={styles.Contact}>
      <div className={styles.process}>
        <div className={styles.list}>
          <h1>Contact</h1>
          <h3>Process -- 2</h3>
        </div>
        <div className={styles.image}>
          <img src="/Contact.svg" alt="" />
        </div>
        <div className={styles.about}><p>Through communication, we share ideas
          <br></br> and give shape to your content,<br></br>
          presenting one clear vision.
        </p>
        </div>
      </div>
    </div>

    <div className={styles.Wireframe}>
      <div className={styles.process}>
        <div className={styles.list}>
          <h1>Wireframe</h1>
          <h3>Process -- 3</h3>
        </div>
        <div className={styles.image}>
          <img src="/Wirefream.svg" alt="" />
        </div>
        <div className={styles.about}><p>The sketching of wireframes is integral in
          <br></br> beginning to realise concepts and ideas<br></br>
          into readable, managed design.
        </p>
        </div>
      </div>
    </div>

    <div className={styles.Design}>
      <div className={styles.process}>
        <div className={styles.list}>
          <h1>Design</h1>
          <h3>Process -- 4</h3>
        </div>
        <div className={styles.image}>
          <img src="/Design.svg" alt="" />
        </div>
        <div className={styles.about}><p>The sketching of wireframes is integral in
          <br></br> beginning to realise concepts and ideas<br></br>
          into readable, managed design.
        </p>
        </div>
      </div>
    </div>

    <div className={styles.Development}>
      <div className={styles.process}>
        <div className={styles.list}>
          <h1>Development</h1>
          <h3>Process -- 5</h3>
        </div>
        <div className={styles.image}>
          <img src="/Devlopment.svg" alt="" />
        </div>
        <div className={styles.about}><p>Responsive design that adheres to today’
          <br></br>technical standards, ensuring smartphone,<br></br>
          tablet and laptop users alike can interact with our work.
        </p>
        </div>
      </div>

      <div className={styles.Animation}>
        <div className={styles.process}>
          <div className={styles.list}>
            <h1>Animation</h1>
            <h3>Process -- 6</h3>
          </div>
          <div className={styles.image}>
            <img src="/Animation.svg" alt="" />
          </div>
          <div className={styles.about}><p>The addition of meaningful and
            <br></br>impeccably stylistic animation engages<br></br>
            users on a completely different level.
          </p>
          </div>
        </div>

        <div className={styles.Test}>
          <div className={styles.process}>
            <div className={styles.list}>
              <h1>Test</h1>
              <h3>Process -- 7</h3>
            </div>
            <div className={styles.image}>
              <img src="/Test.svg" alt="" />
            </div>
            <div className={styles.about}><p>To guarantee success, the final process
              <br></br>involves thorough and rigorous testing on<br></br>
              all major browsers and OS.
            </p>
            </div>
          </div>
        </div>

        <div className={styles.Followup}>
          <div className={styles.process}>
            <div className={styles.list}>
              <h1>Follow-up</h1>
              <h3>Process -- 7</h3>
            </div>
            <div className={styles.image}>
              <img src="/Followup.svg" alt="" />
            </div>
            <div className={styles.about}><p>We teach you how to pilot your website
              <br></br>through its back office. Our post‑launch<br></br>
              support is guaranteed.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Vision ;