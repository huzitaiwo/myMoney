import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"

// styles
import styles from './Home.module.css'
import TransactionList from "./TransactionList"

// components
import TransctionForm from './TransctionForm'


export default function Home() {
  const { user } = useAuthContext()
  const { documents, error, isLoading } = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ['createdAt', 'desc']
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <h2>{error}</h2>}
        {isLoading && <h2>loading...</h2>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransctionForm uid={user.uid}/>
      </div>
    </div>
  )
}
