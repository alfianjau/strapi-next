import axios from 'axios'

const Request = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>
  }
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  )
}

Request.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}restaurants`)
    const restaurants = res.data
    return { restaurants }
  } catch (error) {
    return { error }
  }
}

export default Request
