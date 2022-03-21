import { useState } from "react"
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from "../../hooks/useAuthContext"


export default function TransctionForm() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { user } = useAuthContext()
  const { addDocument } = useFirestore('transactions')

  const handleSubmit = e => {
    e.preventDefault()
    const uid = user.id
    addDocument({ name, amount, uid })
  }

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transation name:</span>
          <input 
            type="text"
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Transation amount:</span>
          <input 
            type="number"
            required
            onChange={e => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}
