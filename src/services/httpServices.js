import axios from "axios"
import credentials from "../../environment"

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${credentials.API_KEY}`
  }
})

export default yelp
