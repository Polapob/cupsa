import { SelectChangeEvent } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useGeneration = () => {
  const { user } = useContext(AuthContext)
  const [generation, setGeneration] = useState<string>('')
  const updateGeneration = (event: SelectChangeEvent) => {
    setGeneration(event.target.value)
  }
  useEffect(() => {
    setGeneration(user.generationId.toString())
  }, [user.generationId])

  return { updateGeneration, generation }
}

export default useGeneration
