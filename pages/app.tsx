import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/pages/app.module.css'

import { FiInbox, FiCalendar, FiBook, FiMenu } from 'react-icons/fi'

import Accordion from '../components/Accordion'
import TaskBoard from '../components/TaskBoard'

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('Hoje')
  const [showSideMenu, setShowSideMenu] = useState(false)

  function toggleActiveComponent(componentToShow: string) {
    setActiveComponent(componentToShow)
  }

  function toggleSideMenu() {
    setShowSideMenu(oldValue => !oldValue)
  }

  const task = {
    title: 'Tarefa um',
    description: 'Uma tarefa legal',
    dueTime: ''
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Anthe: ${activeComponent}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        onClick={toggleSideMenu}
        className={styles.menuButton}
      >
        <FiMenu size={25} color="white" />
      </button>

      <aside className={styles.sideBar} style={{ left: showSideMenu ? '0px' : '-175px' }}>
        <h1 className={styles.logoTitle}>anthe.</h1>
        <nav className={styles.navigationItems}>
          <button
            className={
              activeComponent === 'Hoje'
              && styles.selected
            }
            onClick={() => toggleActiveComponent('Hoje')}
          >
            <FiCalendar size={20} />
            Hoje
          </button>
          <button
            className={
              activeComponent === 'Inbox'
              && styles.selected
            }
            onClick={() => toggleActiveComponent('Inbox')}
          >
            <FiInbox size={20} />
            Inbox
          </button>
          <Accordion
            title="Projetos"
          >
            <a
              className={
                activeComponent === 'Escola'
                && styles.selected
              }
              onClick={() => toggleActiveComponent('Escola')}
            >
              <FiBook size={20} />
              Escola
            </a>
            <a>
              <FiBook size={20} />
              Trabalho
            </a>
            <a>
              <FiBook size={20} />
              Pessoal
            </a>
          </Accordion>
          <Accordion
            title="Categorias"
          >
            <a>
              <FiBook size={20} />
              Projeto 1
            </a>
            <a>
              <FiBook size={20} />
              Projeto 2
            </a>
            <a>
              <FiBook size={20} />
              Projeto 3
            </a>
          </Accordion>
        </nav>
      </aside>

      <main
        className={styles.main}
        onClick={toggleSideMenu}
      >
        <header>
          <h2>{activeComponent}</h2>
        </header>
        <TaskBoard taskCategory={activeComponent} />
      </main>
    </div>
  )
}

export default App