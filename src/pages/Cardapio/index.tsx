import Buscador from "./Buscador";
import {ReactComponent as Logo} from "assets/logo.svg";
import styles from "./Cardapio.module.scss";
import { useState } from "react";
import Filtros from "./Filtros";

export default function Cardapio(){
  const [ busca, setBusca ] = useState<string>('');
  const [ filtro, setFiltro] = useState<number | null>(null);

  return ( 
    <main>
      <nav className={styles["menu"]}>
        <Logo/>
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa.
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>
          Cardápio
        </h3>

        <Buscador
          busca={busca}
          setBusca={setBusca}
        />

        <div className={styles.cardaprio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
        </div>
      </section>
    </main>
  )
}