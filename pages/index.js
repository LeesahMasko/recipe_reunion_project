import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
      className={styles.landingImage}
      src="/food.jpg"
      alt="picture of food on gradient background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      />

      <h1 className={styles.title}>Recipe Renuion</h1>
      <p className={styles.landingText}>Where food, family, friends, and memories gather.</p>
      <p className={styles.landingText}>Even when you are far apart.</p>
      <Link href='/about'>
        <a className={styles.btn}>Go to My Profile</a>
      </Link>
      <Link href='/about'>
        <a className={styles.btn}>Jump to my Recipe Book</a>
      </Link>
      </div>

  )
}
