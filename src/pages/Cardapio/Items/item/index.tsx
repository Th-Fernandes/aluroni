import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import { TagsMeal } from 'components/TagsMeal';

import { Meal } from 'types/Meal';
import styles from './Item.module.scss';

function ItemComp(props: Meal) {
  const {title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/prato/${props.id}`)} 
      className={styles.item}
    >
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
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

export const Item = memo(ItemComp);