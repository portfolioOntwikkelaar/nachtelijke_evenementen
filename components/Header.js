import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Disco Evenementen</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Evenementen</a>
            </Link>
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link href='/events/add'>
                  <a>Maak Eve</a>
                </Link>
              </li>
              <li>
                <Link href='/account/dashboard'>
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className='btn-secondary btn-icon'
                >
                  <FaSignOutAlt /> Uitloggen
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href='/account/login'>
                  <a className='btn-secondary btn-icon'>
                    <FaSignInAlt /> Inschrijven
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
