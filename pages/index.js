import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Recipe Renuion</h1>
      <p className={styles.text}>A place for all those memories that are connected to food!</p>
      <p className={styles.text}>Share grandma's sugar cookie recipe with your cousins.</p>
      <p className={styles.text}>Scan a copy of your mom's Minestrone Soup recipe card to save her handwritting and notes for your kids to have.</p>
      <p className={styles.text}>Upload a video of yourself showing that tricky technique of how your aunt taught you to roll out pie crust.</p>
      <Link href='/about'>
        <a className={styles.btn}>Go to My Profile</a>
      </Link>
      <Link href='/about'>
        <a className={styles.btn}>Jump to my Recipe Book</a>
      </Link>
    </div>
  )
}
