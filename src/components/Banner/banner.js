// Banner.jsx - With improved features
import React, { useState, useEffect, useRef } from 'react';
import axios from '../../utlis/axcios';
import requests from '../../utlis/requests';
import './banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
        const results = request.data.results;
        if (results && results.length > 0) {
          const randomMovie = results[Math.floor(Math.random() * results.length)];
          setMovie(randomMovie);
        } else {
          setError('No movies found');
        }
      } catch (error) {
        console.error('Error fetching banner movie:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const truncate = (str, n) => {
    if (!str) return '';
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  const handlePlayClick = () => {
    console.log('Playing movie:', movie?.title || movie?.name);
    // Add your play logic here
  };

  const handleMyListClick = () => {
    console.log('Added to my list:', movie?.title || movie?.name);
    // Add your "add to list" logic here
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="banner loading">
        <div className="loading-spinner"></div>
        <p>Loading amazing content...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="banner error">
        <p>⚠️ {error || 'No movie available'}</p>
        <button onClick={() => window.location.reload()} className="banner__button">
          Retry
        </button>
      </div>
    );
  }

  const backgroundImage = `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}")`;

  return (
    <div
      ref={bannerRef}
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: backgroundImage,
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || 'Untitled'}
        </h1>
        <div className="banner__buttons">
          <button 
            className="banner__button play" 
            onClick={handlePlayClick}
            aria-label="Play"
          >
            Play
          </button>
          <button 
            className="banner__button" 
            onClick={handleMyListClick}
            aria-label="Add to my list"
          >
            My List
          </button>
        </div>
        <p className="banner__description">
          {truncate(movie?.overview, 180)}
        </p>
      </div>
      <div className="banner__fadeBottom" />
      <div className="scroll-indicator" onClick={scrollToContent}></div>
    </div>
  );
};

export default Banner;