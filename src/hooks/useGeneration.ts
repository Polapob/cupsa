import { SelectChangeEvent } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { apiService } from '../services'
import ALL_GENERATION from '../services/mock/allGeneration.mock'

const useGeneration = () => {
  const { user } = useContext(AuthContext)
  const [generation, setGeneration] = useState<string>('')
  const [generationLists, setGenerationLists] =
    useState<string[]>(ALL_GENERATION)
  const updateGeneration = (event: SelectChangeEvent) => {
    setGeneration(event.target.value)
  }
  useEffect(() => {
    setGeneration(user.generationId.toString())
  }, [user.generationId])
  useEffect(() => {
    const fecthGenerations = async () => {
      try {
        const { result } = await apiService.getAllGenerations()
        setGenerationLists(result)
      } catch (err) {
        setGenerationLists(ALL_GENERATION)
      }
    }
    fecthGenerations()
  }, [])

  return { updateGeneration, generation, generationLists }
}

export default useGeneration
