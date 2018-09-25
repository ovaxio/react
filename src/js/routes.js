import React from 'react'

import { Route, Switch } from 'react-router-dom'
import dispatcher from 'js/utils/dispatcher'
import { PageContainer } from 'js/global/PageContainer'

import { Home } from 'js/home/screens/Home'
import { Movies } from 'js/movies/screens/Movies'
import { Movie } from 'js/movies/screens/Movie'

import * as actions from 'js/actions'

export const routes = store => (
  <section>
    {/**********
    * Dispatch *
    ************/}

    <Switch>
      <Route exact path="/" component={dispatcher(store, actions.enterHome)}/>
      <Route exact path="/movies" component={dispatcher(store, actions.enterMovies)}/>
      <Route exact path="/movie/:id" component={dispatcher(store, actions.enterMovie)}/>
    </Switch>

    {/***********
    * Rendering *
    *************/}

    <Switch>
      <Route path="/" render={() =>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movie/:id" component={Movie} />
          </Switch>
        </PageContainer>
      }/>
    </Switch>
  </section>
)

export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'movie':
      return `/movie/${params.movieId}`
    case 'movies':
      return `/movies`

    case 'home':
    default:
      return '/'
  }
}