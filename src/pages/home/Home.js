import styles from './Home.module.css'

// components
import TransctionForm from './TransctionForm'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <TransctionForm />
      </div>
    </div>
  )
}
