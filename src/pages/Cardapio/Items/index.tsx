import { useEffect, useState } from "react";
import styles from "./Items.module.scss";
import Item from "./item";
import items from "./items.json";

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

    const novaLista = items.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(novaLista);

    console.log(ordenador, novaLista)
  }, [busca, filtro, ordenador])

  return (
    <div className={styles["items"]}>
      {
        lista.map((item) => (
          <Item key={item.id} {...item} />
        ))
      }
    </div>
  )
}
