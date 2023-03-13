import {Dispatch, memo, SetStateAction, useMemo} from 'react';
import styles from './Buscador.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}

function SearchInputComp({search, setSearch}:Props){
  const memoizedSearchIcon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

  return (
    <div className={styles.buscador}>
      <input 
        value={search}
        onChange={event => setSearch(event.target.value)}
        type="text"
        placeholder="Buscar..." 
      />
      {memoizedSearchIcon}
    </div>
  );
}

export const SearchInput = memo(SearchInputComp);