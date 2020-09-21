import axios from 'axios'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const Request = ({ restaurants, error }: AppProps) => {
  if (error) {
    return <div>An error occured: {error.message}</div>
  }
  return (
    <ul>
      {restaurants.map((restaurant: AppProps) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  )
}

Request.getInitialProps = async (ctx: AppProps) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}restaurants`)
    const restaurants = res.data
    return { restaurants }
  } catch (error) {
    return { error }
  }
}

export default Request
