import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import routes from './routes.json';

export function Menu() {
  return (
    <header>
      <nav className={styles['menu']}>
        <Logo />

        <ul className={styles.menu__list}>
          {
            routes.map(route => (
              <li className={styles.menu__link} key="route.id">
                <Link to={route.to}>{route.label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}