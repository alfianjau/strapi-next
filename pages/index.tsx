import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
// import { types } from 'util'

const Container = styled.div``
const Main = styled.main``
const BlogTitle = styled.h1``
const List = styled.ul`
  list-style: square;
`

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`

const title: string = 'Testing Next JS and Typescript'
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)
  return (
    <Container className={styles.container}>
      <Head>
        <title>Strapi next typescript graphql</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={styles.main}>
        <BlogTitle className={styles.title}>{title}</BlogTitle>
        <Link href="/about">
          <a>About this blog</a>
        </Link>
        <List>
          {posts.map((post) => (
            <Link key={post.id} href="/posts/[id]" as={`posts/${post.id}`}>
              <ListItem>
                <PostTitle>{post.title}</PostTitle>
              </ListItem>
            </Link>
          ))}
        </List>
      </Main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          JAJAL Typescript
        </a>
      </footer>
    </Container>
  )
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}
