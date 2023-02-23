import classNames from 'classnames';
import { Dispatch, memo, SetStateAction } from 'react';
import styles from './Filtros.module.scss';
import filtros from './filtros.json';

// type IOpcao = typeof filtros[0];

interface Props {
  filter: number | null,
  setFilter: Dispatch<SetStateAction<number | null>>
}

function FiltersComp({filter, setFilter}:Props) {
  function selecionarFiltro(opcao:number) {
    return setFilter(opcaoAnterior => {
      if (opcaoAnterior === opcao) return null;
      return opcao;
    });
  }

  return (
    <div className={styles.filters}>
      {
        filtros.map(({label, id}) => (
          <button
            onClick={() => selecionarFiltro(id)}
             
            className={classNames({
              [styles['filters__filter']]: true,
              [styles['filters__filter--active']]: filter === id
            })} 
            key={id}>
            {label}
          </button>
        ))
      }
    </div>
  );
}

export const Filters = memo(FiltersComp);