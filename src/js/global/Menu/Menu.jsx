import React from 'react'
import { NavLink } from "react-router-dom";

import { getPath } from 'js/routes'
import styles from './Menu.less'
import logo from 'styles/img/logo-big.png'

export const Menu = () =>
  <nav>
    <ul className={styles.list}>
      <li className={styles.homeItem}>
        <NavLink exact to={getPath('home')}><img src={logo} className={styles.logo} alt="logo Blablamovie" title="Blablamovie" /></NavLink>
      </li>
      <li className={styles.item}>
        <NavLink exact to={getPath('home')}>Home</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to={getPath('movies')}>Movies' list</NavLink>
      </li>
    </ul>
  </nav>
