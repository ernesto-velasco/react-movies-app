import styles from "./Header.module.css"

export default function Header({ setSearchValue }) {
  const handleOnChange = (e) => setSearchValue(e.target.value);

  return (
    <header className={styles.header}>
      <h1>🎬 Movies App</h1>
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Type to search..."
          className={styles.input}
          onChange={(e) => handleOnChange(e)}
        />
      </form>
    </header>
  );
}
