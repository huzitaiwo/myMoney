import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
}