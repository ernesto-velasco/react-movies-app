import styles from "./MovieList.module.css";

export default function MovieList({ movies, addToFavoritesBtn, handleFavoriteClick }) {
  const AddToFavoritesBtn = addToFavoritesBtn;
  return (
    <section>
      {movies && movies.length > 0 && (
        <header className={styles.header}>
          <h3>Search Results</h3>
        </header>
      )}
      <div className={styles.movieList}>
        {movies &&
          movies.map((movie) => (
            <div key={`search-result-${movie.imdbID}`} className={styles.movie}>
              <div className={styles.movieBody}>
                <img
                  src={movie.Poster}
                  alt={`movie poster for ${movie.Title}`}
                />
                <div
                  className={styles.overlay}
                  onClick={() => handleFavoriteClick(movie)}
                >
                  <AddToFavoritesBtn />
                </div>
              </div>
              <p>{movie.Title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
