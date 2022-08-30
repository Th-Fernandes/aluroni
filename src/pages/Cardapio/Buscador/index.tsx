import {Dispatch, SetStateAction} from "react"
import styles from "./Buscador.module.scss"
import {CgSearch} from "react-icons/cg";

interface Props {
  busca: string,
  setBusca: Dispatch<SetStateAction<string>>
}

export default function Buscador({busca, setBusca}:Props){
  return (
    <div className={styles.buscador}>
      <input 
        onChange={event => setBusca(event.target.value)}
        type="text" 
      />

      <CgSearch size={20} color="#4c4d5e"/>
    </div>
  )
}