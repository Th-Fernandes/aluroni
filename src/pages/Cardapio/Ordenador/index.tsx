import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import {MdKeyboardArrowUp ,MdKeyboardArrowDown} from "react-icons/md";
import classNames from "classnames";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";

interface Props {
  ordenador: string,
  setOrdenador: Dispatch<SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [isOrdenadorOpen, setIsOrdenadorOpen] = useState(false);
  const getOpcoesNome = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  
  return (
    <button 
      onClick={() => setIsOrdenadorOpen(actualState => !actualState) }
      onBlur={() => setIsOrdenadorOpen(false)}
      className={classNames({
        [styles['ordenador']]: true,
        [styles['ordenador--ativo']]: ordenador !== "",
      })}>
      <span>{getOpcoesNome || `Ordenar por`}</span>
      {isOrdenadorOpen ? <MdKeyboardArrowUp size={22}/> : <MdKeyboardArrowDown size={22}/>}
      <div className={classNames({
        [styles["ordenador__options"]]: true,
        [styles["ordenador__options--ativo"]]: isOrdenadorOpen
      })}>
        {
          opcoes.map(({nome, value}) => (
            <div
              onClick={() => setOrdenador(value)} 
              className={styles["ordenador__option"]} 
              key={value}>
              {nome} 
            </div>
          ))
        }
      </div>
    </button>
  )
}