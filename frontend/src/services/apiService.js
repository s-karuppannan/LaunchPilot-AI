const API_BASE_URL = import.meta.env.VITE_API_URL

class ApiService {
  async generateBlueprint(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/generateBlueprint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to generate blueprint')
      }

      return await response.json()
    } catch (error) {
      console.error('Generate blueprint error:', error)
      throw error
    }
  }

  async saveBlueprint(blueprintId, sessionId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/saveBlueprint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blueprintId, sessionId }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to save blueprint')
      }

      return await response.json()
    } catch (error) {
      console.error('Save blueprint error:', error)
      throw error
    }
  }

  async getBlueprintHistory(sessionId) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/getBlueprintHistory?sessionId=${sessionId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to fetch blueprint history')
      }

      return await response.json()
    } catch (error) {
      console.error('Get blueprint history error:', error)
      throw error
    }
  }

  async healthCheck() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`)
      return await response.json()
    } catch (error) {
      console.error('Health check error:', error)
      throw error
    }
  }
}

export default new ApiService()
