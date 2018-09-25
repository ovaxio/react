import React, { Fragment, PureComponent }  from 'react'
import { connect } from 'react-redux'
import size from 'lodash/size'

import { Loader } from 'js/global/Loader'
import { getMovieDetails } from 'js/movies/duck/selectors'
import { Footer } from 'js/global/Footer'
import { like as likeMovie, openErrorModal } from 'js/global/ui/duck/actions'
import { getLiked } from 'js/global/ui/duck/selectors'
import { FavoriteButton } from 'js/movies/components/FavoriteButton'

import styles from './Movie.less'
class MovieComponent extends PureComponent {
  render = () => {
    const { data, liked } = this.props
    const isLiked = data && liked.includes(data.imdbID)
    return (
      <Fragment>
        <article className={styles.root}>
        {!data
          ? <Loader />
          : (
              <Fragment>
                <h1 className={styles.title}>{data.Title}<small>{data.Year}</small></h1>
                <div className={styles.wrapper}>
                  <div className={styles.posterWrapper}>
                    <img className={styles.poster} src={data.Poster} alt={`movie's poster`} />
                  </div>
                  <div className={styles.metas}>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Release Date&nbsp;:</span>{data.Released}</div>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Runtime&nbsp;:</span>{data.Runtime}</div>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Genre&nbsp;:</span>{data.Genre}</div>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Country&nbsp;:</span>{data.Country}</div>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Actors&nbsp;:</span>{data.Actors}</div>
                    <div className={styles.metaItem}><span className={styles.metaLabel}>Languages&nbsp;:</span>{data.Language}</div>
                  </div>
                </div>
                <div className={styles.notation}>
                  {!isLiked ? 'Like it... or not' : 'Wow this movie is on your favorites\' list 😁'}
                  <FavoriteButton big={true} onClick={this.onClickFavorite} active={isLiked} />
                </div>
                <p className={styles.plot}>{data.Plot}</p>
              </Fragment>
            )
          }
          <Footer />
        </article>
      </Fragment>
    )
  }

  onClickFavorite = e => {
    e.preventDefault()
    const { toggleLike, openErrorModal, data, liked } = this.props
    size(liked) < 3 ? toggleLike(data.imdbID) : openErrorModal()
  }
}

const mapStateToProps = state => ({
  data: getMovieDetails(state),
  liked: getLiked(state)
})

const mapDispatchToProps = dispatch => ({
  toggleLike: movie => dispatch(likeMovie(movie)),
  openErrorModal: () => dispatch(openErrorModal())
})

export const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent)