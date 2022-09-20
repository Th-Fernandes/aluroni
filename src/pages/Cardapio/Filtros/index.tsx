import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import styles from './Filtros.module.scss';
import filtros from './filtros.json';

// type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null,
  setFiltro: Dispatch<SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}:Props) {
  function selecionarFiltro(opcao:number) {
    return setFiltro(opcaoAnterior => {
      if (opcaoAnterior === opcao) return null;
      return opcao;
    });
  }

  return (
    <div className={styles.filtros}>
      {
        filtros.map(({label, id}) => (
          <button
            onClick={() => selecionarFiltro(id)}
             
            className={classNames({
              [styles['filtros__filtro']]: true,
              [styles['filtros__filtro--ativo']]: filtro === id
            })} 
            key={id}>
            {label}
          </button>
        ))
      }
    </div>
  );
}