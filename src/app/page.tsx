import Image from "next/image";
import styles from "./page.module.css";
import Index from ".";
export default function Home() {
return(
<section className={styles.page}>
<Index/>
</section>
);
}
