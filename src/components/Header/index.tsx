import React from 'react'
import { ButtonBackground } from '../ButtonBackground'
import styles from './styles.module.scss'

import { Link } from 'react-scroll'

interface HeaderProps {
  isProjectPage?: boolean
}

export const Header = ({ isProjectPage = false }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              {isProjectPage ? (
                <a href="/">Welcome to Mordor</a>
              ) : (
                <Link
                  offset={0}
                  to="welcome"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#welcome"
                >
                  Welcome to Mordor
                </Link>
              )}
            </li>

            <li>
              {isProjectPage ? (
                <a href="/">Service</a>
              ) : (
                <Link
                  offset={0}
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#service"
                >
                  Service
                </Link>
              )}
            </li>

            <li>
              {isProjectPage ? (
                <a href="/">Our cases</a>
              ) : (
                <Link
                  offset={0}
                  to="ourCase"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#ourCase"
                >
                  Our cases
                </Link>
              )}
            </li>

            <li>
              <Link
                offset={0}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <ButtonBackground buttonText={'Contact now'} />
      </div>
    </header>
  )
}
