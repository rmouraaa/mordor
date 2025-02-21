import React from 'react'
import { BestWorkComponent } from '../../BestWorkComponent'
import styles from './styles.module.scss'

import bestWordImageOne from '../../../../public/images/hatImage.webp'

import bestWordImageTwo from '../../../../public/images/brandingImage.webp'

import bestWordImageThree from '../../../../public/images/coatImage.webp'

export const BestWork = () => {
  return (
    <section className={styles.bestWork} id="ourCase">
      <div className={styles.container}>
        <h2>
          Some of our <span>best work</span>
        </h2>

        <div className={styles.components}>
          <BestWorkComponent
            title={'A new development in Belo Horizonte'}
            image={bestWordImageOne}
            link={'/project/1'}
          />

          <BestWorkComponent
            title={'A new development in Belo Horizonte'}
            image={bestWordImageTwo}
            link={'/project/2'}
            variant={'left'}
          />

          <BestWorkComponent
            title={'A new development in Belo Horizonte'}
            image={bestWordImageThree}
            link={'/project/3'}
          />
        </div>
      </div>
    </section>
  )
}
