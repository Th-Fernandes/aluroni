import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Inicio() {
  function PratosRecomendados() {
    const pratosRecomendados = [...cardapio];

    return pratosRecomendados
      .sort(() => 0.5 - Math.random())
      .splice(0,3);
  }


  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>

      <div className={styles.recomendados}>
        {PratosRecomendados().map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}