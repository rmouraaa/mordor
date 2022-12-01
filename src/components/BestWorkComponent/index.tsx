import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Decoration from '../../../public/icons/linkDecoration.svg'

interface BestWorkProps {
  title: string
  image: StaticImageData
  link: string
  variant?: 'left' | 'right'
}
export const BestWorkComponent = ({
  title,
  image,
  link,
  variant = 'right'
}: BestWorkProps) => {
  if (variant === 'left') {
    return (
      <div className={styles.container}>
        <Image src={image} alt={title} />

        <div className={styles.contentLeft}>
          <h3>{title}</h3>
          <p>Brisas Pampulha</p>

          <div className={styles.link}>
            <a href={link}>See more</a>

            <Image src={Decoration} alt="Decoração" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>Brisas Pampulha</p>

        <div className={styles.link}>
          <a href={link}>See more</a>

          <Image src={Decoration} alt="Decoração" />
        </div>
      </div>

      <Image src={image} alt={title} />
    </div>
  )
}
