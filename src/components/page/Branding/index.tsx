import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Separator from '../../../../public/icons/separator.svg'
import CardOne from '../../../../public/icons/cardBranding.svg'
import CardTwo from '../../../../public/icons/cardAnimation.svg'
import CardThree from '../../../../public/icons/cardInnovation.svg'
import { ButtonBackground } from '../../ButtonBackground'

export const Branding = () => {
  return (
    <section className={styles.branding}>
      <div className={styles.container}>
        <h2>
          <span>Brand your</span> business for success
        </h2>

        <p>
          Branding, animation or innovation, here we create what your company
          needs
        </p>

        <Image
          src={Separator}
          alt="Ícone de um separador"
          className={styles.separator}
        />

        <div className={styles.cards}>
          <div>
            <Image src={CardOne} alt="Ícone de uma carta" />
          </div>

          <div>
            <Image src={CardTwo} alt="Ícone de uma carta" />
          </div>

          <div>
            <Image src={CardThree} alt="Ícone de uma carta" />
          </div>
        </div>

        <ButtonBackground buttonText={'Contact now'} />
      </div>
    </section>
  )
}
