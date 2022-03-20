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
    case 'IS_LOADING':
      return { isLoading: true, document: null, error: null, success: null }
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
    dispatch({ type: 'IS_LOADING' })
      
  }

  // delete document
  const deleteDocument = id => {

  }

  useEffect(() => {
    return () => setUnMounted(true)
  }, [])

  return { addDocument, deleteDocument, reponse }

}