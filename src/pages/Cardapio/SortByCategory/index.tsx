import { useState } from 'react';
import classNames from 'classnames';
import type { Dispatch, SetStateAction } from 'react';

import {MdKeyboardArrowUp ,MdKeyboardArrowDown} from 'react-icons/md';

import styles from './Ordenador.module.scss';
import options from './options.json';

interface Props {
  category: string,
  setCategory: Dispatch<SetStateAction<string>>
}

export function SortByCategory({category, setCategory}: Props) {
  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const getCategoriesName = category && options.find(opcao => opcao.value === category)?.nome;
  
  return (
    <button 
      onClick={() => setIsSorterOpen(actualState => !actualState)}
      onBlur={() => setIsSorterOpen(false)}
      className={classNames({
        [styles['sort']]: true,
        [styles['sort--active']]: category !== '',
      })}>
      <span>{getCategoriesName || 'Ordenar por'}</span>

      {isSorterOpen 
        ? <MdKeyboardArrowUp size={22}/> 
        : <MdKeyboardArrowDown size={22}/>}

      <div className={classNames({
        [styles['sort__options']]: true,
        [styles['sort__options--active']]: isSorterOpen
      })}>
        {
          options.map(({nome, value}) => (
            <div
              onClick={() => setCategory(value)} 
              className={styles['sort__option']} 
              key={value}>
              {nome} 
            </div>
          ))
        }
      </div>
    </button>
  );
}