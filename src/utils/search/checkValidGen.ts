const checkValidGen = (supportGeneration: string[], generationId: string) => {
  return !!supportGeneration.find((data) => data === generationId)
}

export default checkValidGen
