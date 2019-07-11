import React, { Suspense } from 'react'
import Routes from '../../routes'
import '../../sass/main.scss'
import Auth from '../Auth'
import Footer from '../Footer'
import Header from '../Header'
import InfoLoading from '../Shared/Loader/InfoLoader'
import styles from './app.module.scss'
import useApp from './hooks/useApp'

const App = () => {
  const { isTabbing, focusOutlineHandler } = useApp()

  return (
    <div
      className={`${styles.container} ${!isTabbing && styles['no-focus-ring']}`}
      onKeyDown={focusOutlineHandler}
      role="presentation"
    >
      <div className={styles.content}>
        <Header />
        <Suspense fallback={<InfoLoading />}>
          <Routes />
        </Suspense>
      </div>
      <Footer />
      <Auth />
    </div>
  )
}

export default App
