import { Article } from '../../components/Article'
import { useRouter } from 'next/router'
export default function Post() {
  const router = useRouter()
  console.log(router)
  const { title } = router.query

  return (
    <Article>
      <h1>{title}</h1>
      <p>This is about page</p>
    </Article>
  )
}
