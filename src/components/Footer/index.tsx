import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Decoration from '../../../public/icons/separatorCopyright.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2>
            <span>Let is talk about</span> your new brand{' '}
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.agency}>
            <h3>Agency</h3>

            <p>Rua Costa Cabral 2602 Porto, Portugal</p>
          </div>

          <div className={styles.phone}>
            <h3>Phone</h3>

            <p>+355 000 000 00</p>
          </div>

          <div className={styles.email}>
            <h3>Email</h3>

            <p>contact@mordor.com.br</p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>All rights reserved for</p>

          <Image src={Decoration} alt="Decoração" />

          <p>Mordor Design and experience</p>
        </div>
      </div>
    </footer>
  )
}
