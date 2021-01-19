import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/pages/app.module.css'

import { FiInbox, FiCalendar, FiBook } from 'react-icons/fi'

import Accordion from '../components/Accordion'

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('todayComponent')

  function toggleActiveComponent(componentToShow: string) {
    setActiveComponent(componentToShow)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anthe Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.sideBar}>
        <nav className={styles.navigationItems}>
          <button
            className={
              activeComponent === 'todayComponent'
              && styles.selected
            }
            onClick={() => toggleActiveComponent('todayComponent')}
          >
            <FiCalendar size={20} />
            Hoje
          </button>
          <button
            className={
              activeComponent === 'inboxComponent'
              && styles.selected
            }
            onClick={() => toggleActiveComponent('inboxComponent')}
          >
            <FiInbox size={20} />
            Inbox
          </button>
          <Accordion
            title="Projetos"
          >
            <button
              className={
                activeComponent === 'project'
                && styles.selected
              }
              onClick={() => toggleActiveComponent('project')}
            >
              <FiBook size={20} />
              Escola
            </button>
            <button>
              <FiBook size={20} />
              Trabalho
            </button>
            <button>
              <FiBook size={20} />
              Pessoal
            </button>
          </Accordion>
          <Accordion
            title="Categorias"
          >
            <button>
              <FiBook size={20} />
              Projeto 1
            </button>
            <button>
              <FiBook size={20} />
              Projeto 2
            </button>
            <button>
              <FiBook size={20} />
              Projeto 3
            </button>
          </Accordion>
        </nav>
      </aside>

      <main className={styles.main}></main>
    </div>
  )
}

export default App