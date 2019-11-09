import { useState, useEffect } from "react"
import yelp from "../services/httpServices"

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    searchApi()
  }, [])

  const searchApi = async searchQuery => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchQuery,
          location: "irvine",
          categories: "food,bars,restaurants"
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage("Oops! Something went wrong")
    }
  }
  return [searchApi, results, errorMessage]
}
