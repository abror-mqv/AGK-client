import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './_components/header/Index'
import Navigation from './_components/navigation/index'
import HomeBlock from './_components/blcoks/Home/Home'
import LandingBlock from './_components/blcoks/Landing/LandingBlock'
import Stats from './_components/blcoks/Stats/Stats'
import Quality from './_components/blcoks/Quality/Quality'
import Money from './_components/blcoks/Money/Money'
import Support from './_components/blcoks/Support/Support'
import Request from './_components/blcoks/Request/Request'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>        
      <Navigation/>
      <HomeBlock/>
      <LandingBlock/>
      <Stats/>
      <Quality/>
      <Money/>
      <Support/>
      <Request/>
    </div>
  )
}
