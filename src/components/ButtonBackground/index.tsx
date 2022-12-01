import React from 'react'
import styles from './styles.module.scss'

interface ButtonBackgroundProps {
  buttonText: string
}

export const ButtonBackground = ({ buttonText }: ButtonBackgroundProps) => {
  return (
    <a href="#" className={styles.button}>
      {buttonText}
    </a>
  )
}
