import { useState } from 'react';

import Items from 'pages/Cardapio/Items';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';

import stylesTheme from 'styles/Theme.module.scss';
import styles from './Cardapio.module.scss';


export default function Cardapio() {
  const [busca, setBusca] = useState<string>('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');

  return (
    <section className={styles.container}>
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