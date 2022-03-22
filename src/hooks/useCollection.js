import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = collecction => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collecction)

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      // update states
      setDocuments(results)
      setError(null)
    }, err => {
      console.log(err)
      setError('could not fecth the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [documents])

  return { documents, error }
  
}