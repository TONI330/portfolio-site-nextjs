import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/styles-index.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
<Head>
    <meta charset="utf-8" />
    <title>Portfolio Teun</title>
</Head>

<body>
    {/* <!--Top bar--> */}
    <section class="top-bar">
        <div class="left-side">
            <div class="nav-link-wrapper">
                <a href="/">Home</a>
            </div>

            <div class="nav-link-wrapper">
                <a href="/cv.html">Curriculum Vitae</a>
            </div>
            <div class="nav-link-wrapper">
                <a href="/portfolio.html">Portfolio</a>
            </div>
        </div>

        {/* <!--Language choices here--> */}

        <a class="right-side" href="#sec-about">
            <h1 class="top-bar-about">about</h1>
            <span class="top-bar-name">Teun Leenders</span>
        </a>
    </section>

    <section className={styles.mainbody}>

        <section className={styles.firstsight}>
            <a href="/cv.html">
               <div className={styles.logocircle}>
                <Image className={styles.logocircleimg} src="/../images/portfolio_logo_2.png" alt="Logo gears light" layout='fill'></Image>
            </div>
            <div className={styles.nametext}>Teun Leenders</div>
            <div className={styles.roletext}>
                <a href="/cv.html">Technical software engineer</a>
                </div> 
            </a>
            
        </section>

        <section className={styles.homeabout} id="sec-about">
            <div className={styles.hometextandimage}>
                <span className={styles.abouttext}>
                    My name is Teun Leenders, I'm a software engineering student on Avans Hogeschool Breda. I made this
                    website to show you who I am, what I do and what I've done so far.
                    Feel free to look around!
                </span>
                <div className={styles.aboutimage}>
                </div>
            </div>

            <div className={styles.aboutsocials}>
                <a href="https://instagram.com/teuntje300/" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                    Instagram
                </a>
                <a href="https://github.com/toni330/" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                </a>
                <a href="https://www.youtube.com/channel/UCuSxxI9VGRB1WKF6L4eHY7g/" target="_blank">
                    <ion-icon name="logo-youtube"></ion-icon>
                    Youtube
                </a>
                <a href="https://www.linkedin.com/in/TeunLeenders/" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    LinkedIn
                </a>
            </div>

            <h1 className={styles.bottomtext}>Vector images by Vecteezy.com & Logo's by Ionic.io
            </h1>
        </section>
    </section>


    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
    </div>
  )
}
