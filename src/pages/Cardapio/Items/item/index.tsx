import styles from './Item.module.scss';
import { Meal } from 'types/Meal';
import { TagsMeal } from 'components/TagsMeal';

export default function Item(props: Meal) {
  const { title, description, photo } = props;

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
        <TagsMeal
          {...props}
        />
      </div>
    </div>
  );
}