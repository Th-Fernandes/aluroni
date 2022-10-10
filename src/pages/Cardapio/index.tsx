import { useState } from 'react';

import Items from 'pages/Cardapio/Items';
import { SearchInput } from './Buscador';
import { Filters } from './Filtros';
import Ordenador from './Ordenador';

import stylesTheme from 'styles/Theme.module.scss';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');

  return (
    <section className={styles.container}>
      <h3 className={stylesTheme.titulo}>
        Cardápio
      </h3>

      <SearchInput
        search={search}
        setSearch={setSearch}
      />

      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>

      <Items busca={search} filtro={filter} ordenador={ordenador} />
    </section>
  );
}