import { useState } from 'react';

import {Items} from 'pages/Cardapio/Items';
import { SearchInput } from './SearchInput';
import { Filters } from './Filters';
import {SortByCategory} from './SortByCategory';

import stylesTheme from 'styles/Theme.module.scss';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

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
        <SortByCategory category={category} setCategory={setCategory} />
      </div>

      <Items search={search} filter={filter} sorter={category} />
    </section>
  );
}