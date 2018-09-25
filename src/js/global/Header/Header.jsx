import React from 'react'
import styles from './Header.less'
import { Menu } from 'js/global/Menu'

export const Header = () =>
  <header className={styles.root}>
    {/* <div className={styles.blurred}></div> */}
    <Menu />
  </header>
