import React from 'react'
import { Link } from "react-router-dom";

import { getPath } from 'js/routes'
import { Footer } from 'js/global/Footer'
import styles from './Home.less'

export const Home = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.title}>Blablamovie, your best movies</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis pellentesque tortor, eu scelerisque eros pretium ac. Pellentesque posuere tincidunt mollis. Pellentesque elementum neque vitae est hendrerit, ac malesuada orci bibendum. Nullam congue arcu a pulvinar viverra. Curabitur placerat dui non lectus consequat, nec pretium lorem luctus. Proin quis turpis ac eros tempus porttitor. Nam ullamcorper purus ut tellus lobortis egestas. Sed auctor mattis sapien, et faucibus purus.</p>
      <div className={styles.ctaWrapper}>
        <Link className={styles.cta} to={getPath('movies')}>Vote for your 3 favorite movies</Link>
      </div>
    </div>
    <Footer />
  </div>
)
