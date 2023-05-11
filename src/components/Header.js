import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Bookstore CMS</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
        <img className="icon-button" alt="" />
      </nav>
    </header>
  );
}
