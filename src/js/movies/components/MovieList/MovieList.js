import React, { Fragment } from 'react'
import map from 'lodash/map'
import { connect } from 'react-redux'

import { getMovies } from 'js/movies/duck/selectors'
import { MovieCard } from 'js/movies/components/MovieCard'

import styles from './MovieList.less'
const MovieListComponent = ({ data }) => (
  <Fragment>
    <div className={styles.root}>
      {map(data, (m, index) => <MovieCard key={index} data={m} />)}
    </div>
  </Fragment>
)


const mapStateToProps = state => ({
  data: getMovies(state)
})

export const MovieList = connect(mapStateToProps)(MovieListComponent)