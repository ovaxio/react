import React from 'react'

import styles from './FavoriteButton.less'
export const FavoriteButton = ({ onClick, active, big }) => (
  <button
    className={`${active ? styles.rootActive : styles.root} ${big ? styles.big : ''}`}
    onClick={onClick}
  >
    {active ? '★' : '☆'}
  </button>
)

