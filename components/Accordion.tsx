import styles from '../styles/components/Accordion.module.css'
import { useState, useRef } from 'react'

import { FiChevronRight, FiRotateCcw } from 'react-icons/fi'

interface AccordionProps {
  title: string
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [activeAccordion, setActiveAccordion] = useState('')
  const [accordionContentHeight, setAccordionContentHeight] = useState('0px')

  const contentRef = useRef(null)

  function toggleAccordion() {
    setActiveAccordion(oldValue => oldValue === '' ? 'active' : '')
    setAccordionContentHeight(activeAccordion === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`)
  }

  return (
    <div className={styles.accordionContainer}>
      <button
        className={`${styles.accordion} ${activeAccordion}`}
        onClick={toggleAccordion}
      >
        <FiChevronRight
          style={{
            transform: activeAccordion === 'active' ? 'rotate(90deg)' : 'none'
          }}
          size={20} color="white"
        />
        <p className={styles.accordionTitle}>
          {title}
        </p>
      </button>
      <div
        className={styles.accordionContent}
        ref={contentRef}
        style={{ maxHeight: accordionContentHeight }}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion