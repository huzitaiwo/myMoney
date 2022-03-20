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
}