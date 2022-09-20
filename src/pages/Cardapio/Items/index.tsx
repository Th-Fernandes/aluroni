import { useEffect, useState } from 'react';
import styles from './Items.module.scss';
import Item from './item';
import items from 'data/cardapio.json';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens({busca, filtro, ordenador}:Props) {
  const [lista, setLista] = useState(items);

  useEffect(() => { 
    function testaBusca(title: string) {
      const regex = new RegExp(busca, 'i'); // torna a string de busca insensitive case 
      return regex.test(title);
    }
  
    function testaFiltro(id: number) {
      if(filtro !== null) return filtro === id;
      return true;
    }

    function ordenar(novaLista: typeof items) {
      switch(ordenador) {
      case 'porcao': 
        return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoas':
        return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1);
      case 'preco':
        return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
      default:
        return novaLista; 
      }
    }

    const novaLista = items.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    const novaListaOrdenada = ordenar(novaLista);

    setLista(novaListaOrdenada);

    console.log(ordenador, novaLista);
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles['items']}>
      {
        lista.map((item) => (
          <Item key={item.id} {...item} />
        ))
      }
    </div>
  );
}
