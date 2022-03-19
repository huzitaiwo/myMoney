import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setError(null)
    setIsLoading(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      if(!res) {
        throw new Error('Could not complete login')
      } else {
        setError(false)
        setIsLoading(false)
      }
    }
    catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }


  return { isLoading, error, login }
}