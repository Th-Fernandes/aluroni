import styles from './Item.module.scss';
import classNames from 'classnames';

interface Items {
  title: string,
  description: string,
  photo: string,
  size: number,
  serving: number,
  price: number,
  // id: number,
  category: {
    id: number,
    label: string
  }
}


export default function Item(props:Items) {
  const {title, description, size, serving, price, category, photo} = props;

  function handlePlural(peopleQuantity:number) {
    const result = peopleQuantity > 1
      ? 'pessoas'
      : 'pessoa';
    
    return result;
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={
            classNames(
              [styles.item__tipo],
              [styles[`item__tipo__${category.label.toLowerCase()}`]]
            )
          }>{category.label}</div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>Serve {serving} {handlePlural(serving)}</div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}