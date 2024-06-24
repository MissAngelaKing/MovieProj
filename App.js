import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import MoviesPage from './Pages/MoviesPage/MoviePage';
import ActorsPage from './Pages/ActorsPage/ActorsPage';
import SingleActorPage from './Pages/SingleActorsPage/SingleActorsPage';
import SingleMoviePage from './Pages/SingleMoviePage/SingleMoviePage';
import TvSeries from '../src/Pages/TVShows/TvSeries'
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/movie/:movieId" element={<SingleMoviePage />} />
          <Route path="/actor/:actorId" element={<SingleActorPage />} />
          <Route path="/tv" element={<TvSeries />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
