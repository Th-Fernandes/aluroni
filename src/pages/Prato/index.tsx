import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import { TagsMeal } from 'components/TagsMeal';
import NotFound from 'pages/NotFound';

export function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const meal = cardapio.find(item => item.id === Number(id));
  return (
    <>

      {
        meal 
          ?
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>

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
                <TagsMeal {...meal} />
              </div>
            </section>
          </>

          : <NotFound />
      }
    </>
  );
}