import { useState } from 'react'
import axios from 'axios'

const url = 'https://strapi-jalatunda.herokuapp.com/'

const Post = ({ allCategories, errorCategories }) => {
  const [modifiedData, setModifiedData] = useState({
    name: '',
    description: '',
    categories: [],
  })
  const [errorRestaurants, setErrorRestaurants] = useState(null)

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${url}restaurants`, modifiedData)
      console.log(response)
    } catch (error) {
      setErrorRestaurants(error)
    }
  }

  const renderCheckbox = (category) => {
    const { categories } = modifiedData
    const isChecked = categories.includes(category.id)
    const handleCheckboxChange = () => {
      if (!categories.includes(category.id)) {
        handleChange({
          target: { name: 'categories', value: categories.concat(category.id) },
        })
      } else {
        handleChange({
          target: {
            name: 'categories',
            value: categories.filter((v) => v !== category.id),
          },
        })
      }
    }
    return (
      <div key={category.id}>
        <label htmlFor={category.id}>{category.name}</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name="categories"
          id={category.id}
        />
      </div>
    )
  }
  if (errorCategories) {
    return <div>An error occured (categories): {errorCategories.message}</div>
  }
  if (errorRestaurants) {
    return <div>An error occured (restaurants): {errorRestaurants.message}</div>
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Restaurants</h3>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={modifiedData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={modifiedData.description}
            onChange={handleChange}
          />
        </label>
        <div>
          <br />
          <b>Select categories</b>
          <br />
          {allCategories.map(renderCheckbox)}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

Post.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${url}restaurants`)
    const allCategories = res.data
    return { allCategories }
  } catch (errorCategories) {
    return { errorCategories }
  }
}

export default Post
