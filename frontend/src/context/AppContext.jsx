import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [currentBlueprint, setCurrentBlueprint] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const clearError = () => setError(null)

  const resetBlueprint = () => {
    setCurrentBlueprint(null)
    setError(null)
  }

  return (
    <AppContext.Provider
      value={{
        currentBlueprint,
        setCurrentBlueprint,
        isLoading,
        setIsLoading,
        error,
        setError,
        clearError,
        resetBlueprint,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
