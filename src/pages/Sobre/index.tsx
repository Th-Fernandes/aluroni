import styles from './Sobre.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import house from 'assets/sobre/house.png';
import pasta1 from 'assets/sobre/pasta1.png';
import pasta2 from 'assets/sobre/pasta2.png';

const images = [pasta1, pasta2];

export function Sobre() {
  return (
    <section>
      <h3 className={stylesTheme.titulo}>sobre</h3>

      <div className={styles.sobreNos}>
        <img src={house} alt="Casa Aluroni" />

        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>

      <div className={styles.imagens}>
        {
          images.map(image => (
            <div key={image} className={styles.imagens__imagem}>
              <img src={image} alt="imagem de massa" />
            </div>
          ))
        }
      </div>
    </section>
  );
}