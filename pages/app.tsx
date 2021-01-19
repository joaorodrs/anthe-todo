import Head from 'next/head'
import styles from '../styles/pages/app.module.css'

import { FiInbox, FiCalendar, FiFolder } from 'react-icons/fi'

import Accordion from '../components/Accordion'

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.sideBar}>
        <nav className={styles.navigationItems}>
          <button>
            <FiCalendar size={20} />
            Hoje
          </button>
          <button>
            <FiInbox size={20} />
            Inbox
          </button>
          <Accordion
            title="Projetos"
          >
            <p>hello1</p>
            <p>hello1</p>
            <p>hello1</p>
          </Accordion>
        </nav>
      </aside>

      <main className={styles.main}></main>
    </div>
  )
}

export default App