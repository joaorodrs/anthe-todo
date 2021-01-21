import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/pages/app.module.css'

import { FiInbox, FiCalendar, FiBook, FiMenu, FiPlus, FiEdit2, FiCircle } from 'react-icons/fi'

import Accordion from '../components/Accordion'
import TaskBoard from '../components/TaskBoard'

import firebase from '../config/firebase-config'

interface Project {
  id: string,
  fromUserEmail?: string,
  projectColor?: string,
  projectName?: string
}

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('Hoje')
  const [showSideMenu, setShowSideMenu] = useState(false)

  const [creatingProject, setCreatingProject] = useState(false)

  const [projects, setProjects] = useState<Project[]>([])

  function toggleActiveComponent(componentToShow: string) {
    setActiveComponent(componentToShow)
  }

  function toggleSideMenu() {
    setShowSideMenu(oldValue => !oldValue)
  }

  function createProject() {
    firebase.firestore()
      .collection('projects')
      .add({})
  }

  useEffect(() => {
    firebase.firestore()
      .collection('projects')
      .where('fromUserEmail', '==', 'jpjoao1001@gmail.com')
      .onSnapshot(snap => {
        const projects = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setProjects(projects)
      })
  })

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
            {projects.reverse().map(project => (
              <a
                className={
                  activeComponent === project.projectName
                  && styles.selected
                }
                onClick={() => toggleActiveComponent(project.projectName)}
              >
                <FiBook size={20} color={project.projectColor} />
                {project.projectName}
              </a>
            ))}
            {creatingProject ? (
                <div className={styles.projectInputWrapper}>
                  <select>
                    <option value="blue">blue</option>
                  </select>
                  <input
                    className={styles.createProjectInput}
                  />
                </div>
              ) : (
                <a
                  onClick={() => setCreatingProject(true)}
                >
                  <FiPlus size={20} color="#6627aa" />
                  Criar projeto
                </a>
              )
            }
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