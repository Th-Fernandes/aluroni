import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';

export function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const meal = cardapio.find(item => item.id === Number(id));
  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      {
        meal ?
          <section className={styles.container}>
            <h1 className={styles.titulo}>
              {meal.title}
            </h1>
            <div className={styles.imagem}>
              <img src={meal.photo} alt={meal.title} />
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {meal.description}
              </p>
              <div className={styles.tags}>
                <div className={classNames({
                  [styles.tags__tipo]: true,
                  [styles[`tags__tipo__${meal.category.label.toLowerCase()}`]]: true
                })}>
                  {meal.category.label}
                </div>
                <div className={styles.tags__porcao}>
                  {meal.size}g
                </div>
                <div className={styles.tags__qtdpessoas}>
                  Serve {meal.serving} pessoa {meal.serving == 1 ? '' : 's'}
                </div>
                <div className={styles.tags__valor}>
                  R$ {meal.price.toFixed(2)}
                </div>
              </div>
            </div>
          </section>

          :
          <section className={styles.container}>
            <h1 className={styles.titulo}>
              Não foi possível encontrar o prato :(
            </h1>
          </section>
      }
    </>
  );
}