import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import size from 'lodash/size'

import { getPath } from 'js/routes'
import { getLiked } from 'js/global/ui/duck/selectors'
import { like as likeMovie, openErrorModal } from 'js/global/ui/duck/actions'
import { FavoriteButton } from 'js/movies/components/FavoriteButton'

import styles from './MovieCard.less'
class MovieCardComponent extends PureComponent {
  render = () => {
    const { data, liked } = this.props
    return (
      <figure className={styles.root}>
        <div className={styles.posterWrapper}><img className={styles.poster} src={data.Poster} alt={data.Title} /></div>
        <figcaption className={styles.meta}>
          <Link className={styles.icon} to={getPath('movie', { movieId: data.imdbID })}>See more</Link>
          <FavoriteButton className={styles.icon} onClick={this.onClickFavorite} active={liked.includes(data.imdbID)} />
        </figcaption>
        <div className={styles.title}>
          {data.Title}
          <div className={styles.year}>{data.Year}</div>
        </div>
      </figure>
    )
  }

  onClickFavorite = e => {
    e.preventDefault()
    const { toggleLike, openErrorModal, data, liked } = this.props
    size(liked) < 3 ? toggleLike(data.imdbID) : openErrorModal()
  }
}

const mapStateToProps = state => ({
  liked: getLiked(state)
})

const mapDispatchToProps = dispatch => ({
  toggleLike: movie => dispatch(likeMovie(movie)),
  openErrorModal: () => dispatch(openErrorModal())
})

export const MovieCard = connect(mapStateToProps, mapDispatchToProps)(MovieCardComponent)
