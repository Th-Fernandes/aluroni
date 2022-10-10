import { useEffect, useState } from 'react';

import { Item } from './item';

import items from 'data/cardapio.json';
import styles from './Items.module.scss';

interface Props {
  search: string,
  filter: number | null,
  sorter: string
}

export function Items({search, filter, sorter}:Props) {
  const [list, setList] = useState(items);

  useEffect(() => { 
    function validateSearch(title: string) {
      const regex = new RegExp(search, 'i'); // torna a string de busca insensitive case 
      return regex.test(title);
    }
  
    function validateFilter(id: number) {
      if(filter !== null) return filter === id;
      return true;
    }

    function sort(newList: typeof items) {
      switch(sorter) {
      case 'porcao': 
        return newList.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoas':
        return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
      case 'preco':
        return newList.sort((a,b) => a.price > b.price ? 1 : -1);
      default:
        return newList; 
      }
    }

    const newList = items.filter(item => validateSearch(item.title) && validateFilter(item.category.id));
    const novaListaOrdenada = sort(newList);

    setList(novaListaOrdenada);
  }, [search, filter, sorter]);

  return (
    <div className={styles['items']}>
      {
        list.map((item) => (
          <Item key={item.id} {...item} />
        ))
      }
    </div>
  );
}
