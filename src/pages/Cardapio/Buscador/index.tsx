import {Dispatch, SetStateAction} from 'react';
import styles from './Buscador.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}

export function SearchInput({search, setSearch}:Props){
  return (
    <div className={styles.buscador}>
      <input 
        value={search}
        onChange={event => setSearch(event.target.value)}
        type="text"
        placeholder="Buscar..." 
      />

      <CgSearch size={20} color="#4c4d5e"/>
    </div>
  );
}