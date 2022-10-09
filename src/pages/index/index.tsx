import { useNavigate } from 'react-router-dom';
import type { Meal } from 'types/Meal';

import storePicture from 'assets/nossa_casa.png';
import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Index() {
  const navigate = useNavigate();

  function recommendedMeals() {
    const recommendedMeals = [...cardapio];

    return recommendedMeals
      .sort(() => 0.5 - Math.random())
      .splice(0, 4);
  }

  function redirectToDetails(meal:Meal) {
    navigate(`/prato/${meal.id}`, {state: {meal}, /*replace: true */});
  }

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>

      <div className={styles.recomendados}>
        {recommendedMeals().map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button
              onClick={() => redirectToDetails(item)}
              className={styles.recomendado__botao}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTheme.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={storePicture} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}