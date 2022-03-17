import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const singup = (email, password, displayName) => {
    setError(null)
    setIsLoading(true)

    try {
      // singup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if(!res) {
        throw new Error('Could not complete signup')
      }

      await res.user.updateProfile({ displayName })
      console.log(res.user)
    }
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsLoading(false)
    }
  }

  return { isLoading, error, singup }
}