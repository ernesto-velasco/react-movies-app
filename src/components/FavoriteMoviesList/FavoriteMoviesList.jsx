import styles from "./FavoriteMoviesList.module.css";

export default function FavoriteMoviesList({
  movies,
  removeFromFavorites,
  handleFavoriteClick,
}) {
  const RemoveFromFavoritesBtn = removeFromFavorites;
  return (
    <section className={styles.favoriteMoviesList}>
      <header className={styles.header}>
        <h3>Favorites</h3>
      </header>
      <div className={styles.movies}>
        {movies.length != 0 ? null : (
          <p>Whoops! You don't have any favorite movie yet 😕</p>
        )}
        {movies &&
          movies.reverse().map((movie, index) => (
            <div key={`fav-${index}-${movie.imdbID}`} className={styles.movie}>
              <div className={styles.movieBody}>
                <img
                  src={movie.Poster}
                  alt={`movie poster for ${movie.Title}`}
                />
                <div
                  className={styles.overlay}
                  onClick={() => handleFavoriteClick(movie.imdbID)}
                >
                  <RemoveFromFavoritesBtn />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
