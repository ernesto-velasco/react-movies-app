import styles from "./RemoveFromFavoritesBtn.module.css"

export default function RemoveFromFavoritesBtn() {
  return (
    <>
      <span className={styles.leadText}>Remove</span>
      <svg
        viewBox="0 0 24 24"
        width="15px"
        height="15px"
        stroke="tomato"
        strokeWidth="2"
        fill="tomato"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </>
  );
}