import { useReducer, useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

let initialState = {
  document: null,
  error: null,
  isLoading: false,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const useFirestore = collection => {
  const [reponse, dispatch] = useReducer(firestoreReducer, initialState)
  const [unMounted, setUnMounted] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // add document
  const addDocument = doc => {
      
  }

  // delete document
  const deleteDocument = id => {

  }

  useEffect(() => {
    return () => setUnMounted(true)
  }, [])

  return { addDocument, deleteDocument, reponse }

}