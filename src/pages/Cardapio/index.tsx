import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Items from 'pages/Cardapio/Items';
import stylesTheme from 'styles/Theme.module.scss';


export default function Cardapio() {
  const [busca, setBusca] = useState<string>('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');

  return (
    <section className={stylesTheme.container}>
      <h3 className={stylesTheme.titulo}>
        Cardápio
      </h3>

      <Buscador
        busca={busca}
        setBusca={setBusca}
      />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>

      <Items busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}