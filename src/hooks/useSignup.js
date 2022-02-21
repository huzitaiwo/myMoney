import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const singup = (email, password, displayName) => {
    setError(null)
    setIsLoading(tru)

    try {
      // singup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    }
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsLoading(false)
    }
  }

  return { isLoading, error, singup }
}