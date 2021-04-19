import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Footer />
    </div>
  )
}
