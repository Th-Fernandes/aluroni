import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";

export default function Ordenador() {
  console.log(opcoes)

  return (
    <button className={styles['ordenador']}>
      <span>Ordenar por</span>
      <div className={styles["ordenador__options"]}>
        {
          opcoes.map(({nome, value}) => (
            <div className={styles["ordenador__option"]} key={value}>
              {nome} 
            </div>
          ))
        }
      </div>
    </button>
  )
}