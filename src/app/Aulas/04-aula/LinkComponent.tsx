import Link from "next/link";
import styles from "./link.module.css";

export default function LinkComponent(props) {
  return (
    <>
      <Link href={props.destino}>
        <div
          className={styles.descriptionStyle}
          style={{
            backgroundColor: props.cor ?? "blue",
          }}
        >
          {props.titulo}
        </div>
      </Link>
    </>
  );
}
