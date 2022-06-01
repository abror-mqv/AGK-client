import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './_components/header/Index'
import Navigation from './_components/navigation/index'
import HomeBlock from './_components/blcoks/Home/Home'
import LandingBlock from './_components/blcoks/Landing/LandingBlock'
import Stats from './_components/blcoks/Stats/Quality'
import Quality from './_components/blcoks/Quality/Quality'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>        
      <Navigation/>
      <HomeBlock/>
      <LandingBlock/>
      <Stats/>
      <Quality/>
    </div>
  )
}
