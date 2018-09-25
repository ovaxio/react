import React from 'react'

import styles from './Footer.less'
import twitter from 'styles/img/twitter.svg'
import facebook from 'styles/img/facebook.svg'

export const Footer = () =>
  <div className={styles.root}>
    <div className={styles.copyright}>© 2018 Blablamovie</div>
    <a target="_blank" rel="noopener noreferrer" href="http://www.twitter.com" className={styles.item}><img src={twitter} alt="twitter" className={styles.itemLogo} /></a>
    <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com" className={styles.item}><img src={facebook} alt="facebook" className={styles.itemLogo} /></a>
  </div>
