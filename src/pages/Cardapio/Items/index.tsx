import styles from "./Items.module.scss";
import Item from "./item";
import items from "./items.json";

export default function Itens() {
  return (
    <div className={styles["items"]}>
      {
        items.map((item) => (
          <Item 
            key={item.id}
            {...item} 
          />
        ))
      }
    </div>
  )
}
