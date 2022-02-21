import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const singup = (email, password, displayName) => {
    
  }

  return { isLoading, error, singup }
}