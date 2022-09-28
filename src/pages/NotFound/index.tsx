import {ReactComponent as NotFoundBg} from 'assets/not_found.svg';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true
    })}>
    
      <NotFoundBg />
    </div>  
  );
}