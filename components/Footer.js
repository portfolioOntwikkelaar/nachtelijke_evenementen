import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Ikstlan &copy; underground club 2021</p>
      <p>
        <Link href='/about'>Over deze project</Link>
      </p>
    </footer>
  )
}
