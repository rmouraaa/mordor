import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../../components/Header'

import styles from './styles.module.scss'

import ProjectPageTitle from '../../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../../public/project/images/projectbanner.webp'
import LogoProject from '../../../public/project/images/brisaslogo.webp'
import PatternProject from '../../../public/project/images/brisaspattern.webp'

import CardProject from '../../../public/project/images/brisascartao.webp'
import BrindeProject from '../../../public/project/images/brisasbrinde.webp'
import BookProject from '../../../public/project/images/brisasbook.webp'

import { AboutProjectBox } from '../../components/page/Project/page/AboutProjectBox'
import { Footer } from '../../components/Footer'
import { AboutProjectText } from '../../components/page/Project/page/AboutProjectText'
import { YoutubeSection } from '../../components/page/Project/page/YoutubeSection'
import { TypographySection } from '../../components/page/Project/page/TypographySection'
import { ApplicationMaterials } from '../../components/page/Project/page/ApplicationMaterials'

const Project = () => {
  return (
    <div className={styles.project}>
      <Head>
        <title>Mordor | Project</title>
      </Head>

      <Header />

      <section className={styles.introduction}>
        <div className={styles.title}>
          <Image
            src={ProjectPageTitle}
            alt="Title da pagina escrito mordor do meio e com duas nuvens nas ponta esquerda e direita"
          />
        </div>

        <div className={styles.banner}>
          <Image
            src={ProjectBanner}
            alt="Title da pagina escrito mordor do meio e com duas nuvens nas ponta esquerda e direita"
          />
        </div>
      </section>

      <AboutProjectBox />

      <AboutProjectText />

      <YoutubeSection />

      <div className={styles.projectLogo}>
        <Image src={LogoProject} alt="Logo da empresa" />
      </div>

      <TypographySection />

      <div className={styles.projectPattern}>
        <Image src={PatternProject} alt="Pattern da empresa" />
      </div>

      <ApplicationMaterials />

      <section className={styles.projectImages}>
        <Image src={CardProject} alt="Cartão da empresa" />
        <Image src={BrindeProject} alt="Brinde da empresa" />
        <Image src={BookProject} alt="Book da empresa" />
      </section>

      <Footer withBackground={true} />
    </div>
  )
}

export default Project
