import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"

// styles
import styles from './Home.module.css'
import TransactionList from "./TransactionList"

// components
import TransctionForm from './TransctionForm'


export default function Home() {
  const { user } = useAuthContext()
  const { documents, error} = useCollection('transactions')

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransctionForm uid={user.uid}/>
      </div>
    </div>
  )
}
