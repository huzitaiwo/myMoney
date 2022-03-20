import { useState } from "react"


export default function TransctionForm() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <>
      <h3>Add a Transaction</h3>
      <form>
        <label>
          <span>Transation name:</span>
          <input 
            type="text"
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
      </form>
    </>
  )
}
