import { useEffect, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

export const useCollection = collecction => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collecction)

    ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })
    })
  }, [])
  
}