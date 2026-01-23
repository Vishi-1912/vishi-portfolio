import styles from "@/styles/navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Vishi</div>

      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}