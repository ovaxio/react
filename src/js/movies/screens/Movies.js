import React from 'react'

import { MovieList } from 'js/movies/components/MovieList'
import { Footer } from 'js/global/Footer'

import styles from './Movies.less'

export const Movies = () => (
  <div className={styles.root}>
    <p>The movies participating in the vote. You can choose a maximum of 3 movies.</p>
    <MovieList />
    <Footer />
  </div>
)
