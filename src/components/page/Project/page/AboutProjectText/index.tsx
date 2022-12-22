import React from 'react'
import styles from './styles.module.scss'

import CiteDecoration from '../../../../../../public/project/icons/quotationMarksIcon.svg'

import Decoration from '../../../../../../public/project/icons/starDecoration.svg'

import Image from 'next/image'

export const AboutProjectText = () => {
  return (
    <section className={styles.aboutProjectText}>
      <div className={styles.decoration}>
        <Image src={Decoration} alt="Ícone de uma estrela " />
      </div>

      <div className={styles.title}>
        <h2>
          A new development <br /> in Belo Horizonte
        </h2>

        <p>Brisas Pampulha</p>
      </div>

      <p>
        A new venture in the heart of Belo Horizonte with the proposal to live
        with quality of life, a sublime experience that will bring together the
        best of architecture with the proximity of nature, this is Brisas
        Pampulha
      </p>

      <p>
        The great challenge in creating the Brisas brand was to bring together
        in a single symbol the ideia of lightness, modernity and refinement, in
        addition to building a visual universe that was expansive enough to be
        work on several fronts
      </p>

      <div className={styles.cite}>
        <Image src={CiteDecoration} alt="Ícone de aspas" />

        <div>
          <h3>
            I agree to go to a place where the only noise is the breeze and the
            peace of your touch on the skin
          </h3>

          <span>Luis Fonseca</span>
        </div>
      </div>

      <p>
        The Brisas brand seeks to portray in an iconographic way the literal
        meaning of the word, as a gentle movement of the wind that reaches the
        most varied surfaces in an endless cyclic process. At the same time, the
        brand works on a more affective level by portraying the lightness and
        good feeling described by the poet Luis Fonseca. Still in time, it is
        worth noting that the symbol still depicts the first letter of the
        naming, the letter &rdquo;B&rdquo; in the creation of the symbol
      </p>
    </section>
  )
}
