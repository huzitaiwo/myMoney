import { useAuthContext } from "../../hooks/useAuthContext"

// styles
import styles from './Home.module.css'

// components
import TransctionForm from './TransctionForm'


export default function Home() {
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <TransctionForm uid={user.uid}/>
      </div>
    </div>
  )
}
