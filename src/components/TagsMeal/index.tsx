import classNames from 'classnames';
import { Meal } from 'types/Meal';
import styles from './TagsMeal.module.scss';

export function TagsMeal(props:Meal) {
  const {category, serving, size, price, } = props;

  function handlePlural(peopleQuantity:number) {
    const result = peopleQuantity > 1
      ? 'pessoas'
      : 'pessoa';
    
    return result;
  }

  return (
    <div className={styles.tags}>
      <div className={
        classNames(
          [styles.tags__tipo],
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]
        )
      }>{category.label}</div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>Serve {serving} {handlePlural(serving)}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}