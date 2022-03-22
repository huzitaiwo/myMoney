import { useReducer, useEffect, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

export const useCollection = () => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  
}