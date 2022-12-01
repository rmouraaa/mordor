import React from 'react'
import { ButtonBackground } from '../ButtonBackground'
import styles from './styles.module.scss'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <a href="#">Welcome to Mordor</a>
            </li>

            <li>
              <a href="#">Service</a>
            </li>

            <li>
              <a href="#">Our cases</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <ButtonBackground buttonText={'Contact now'} />
      </div>
    </header>
  )
}
