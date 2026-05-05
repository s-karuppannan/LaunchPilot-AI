import { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const SessionContext = createContext()

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used within SessionProvider')
  }
  return context
}

export const SessionProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    initializeSession()
  }, [])

  const initializeSession = () => {
    let storedSessionId = localStorage.getItem('launchpilot_session_id')
    
    if (!storedSessionId) {
      storedSessionId = uuidv4()
      localStorage.setItem('launchpilot_session_id', storedSessionId)
    }
    
    setSessionId(storedSessionId)
  }

  const resetSession = () => {
    const newSessionId = uuidv4()
    localStorage.setItem('launchpilot_session_id', newSessionId)
    setSessionId(newSessionId)
  }

  return (
    <SessionContext.Provider value={{ sessionId, resetSession }}>
      {children}
    </SessionContext.Provider>
  )
}
