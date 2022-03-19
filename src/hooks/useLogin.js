import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"

export const useLogin = () => {
  const [unMounted, setUnMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setError(null)
    setIsLoading(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      
      if(!res) {
        throw new Error('Could not complete login')
      }

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!unMounted) {
        setError(null)
        setIsLoading(false)
      }
    }
    catch (err) {
      if (!unMounted) {
        setError(err.message)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  },[])

  return { isLoading, error, login }
}