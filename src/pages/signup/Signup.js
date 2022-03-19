import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { error, isLoading, singup} = useSignup()
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    singup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input 
          type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type='text'
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isLoading &&<button className='btn'>Signup</button>}
      {isLoading && <button className='btn'>signing up...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
